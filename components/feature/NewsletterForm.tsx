import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = (formData.get('company_alt') as string | null)?.trim();
    if (honeypot) {
      setStatus('success');
      form.reset();
      return;
    }
    formData.delete('company_alt');

    const email = (formData.get('email') as string | null)?.trim();
    if (!email) {
      setError('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setError('');

    try {
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, String(value));
      });

      const response = await fetch('https://readdy.ai/api/form/db6u1s6cdv04m4p4gdi0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string } } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMessage = parsed?.meta?.message || parsed?.meta?.detail || responseText;

      if (response.ok && parsed?.code === 'OK') {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setError(serverMessage || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please try again.');
    }
  };

  return (
    <form
      id="newsletter-signup-form"
      data-readdy-form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-stretch gap-2 w-full max-w-md"
    >
      <input
        type="text"
        name="company_alt"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        readOnly
        className="hp-field"
      />
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="flex-1 px-4 py-2.5 rounded-full bg-background-50/10 border border-background-50/20 text-background-50 placeholder:text-background-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="cursor-pointer whitespace-nowrap px-5 py-2.5 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {status === 'success' && (
        <p className="sm:basis-full text-xs text-primary-300 mt-1">Thanks for subscribing! Please check your inbox.</p>
      )}
      {status === 'error' && <p className="sm:basis-full text-xs text-red-400 mt-1">{error}</p>}
    </form>
  );
}