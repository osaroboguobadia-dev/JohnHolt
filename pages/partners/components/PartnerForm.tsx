import { useState, type FormEvent } from 'react';
import { partnerFormCategories } from '@/mocks/partners';

type Status = 'idle' | 'loading' | 'success' | 'error';

const FORM_URL = 'https://readdy.ai/api/form/db8b3o8kk00l6eltri5g';

export default function PartnerForm() {
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

    const company = (formData.get('company_name') as string | null)?.trim();
    const email = (formData.get('email') as string | null)?.trim();
    if (!company || !email) {
      setError('Please provide your company name and a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setError('');

    try {
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        if (value !== '') params.append(key, String(value));
      });

      const response = await fetch(FORM_URL, {
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

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-background-50 border border-background-200 text-sm text-foreground-800 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300';

  return (
    <form
      id="partner-application-form"
      data-readdy-form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
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

      <div>
        <label htmlFor="partner-company" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Company Name <span className="text-primary-600">*</span>
        </label>
        <input
          id="partner-company"
          type="text"
          name="company_name"
          required
          placeholder="Your company name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="partner-contact" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Contact Person
        </label>
        <input
          id="partner-contact"
          type="text"
          name="contact_name"
          placeholder="Your full name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="partner-email" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Work Email <span className="text-primary-600">*</span>
        </label>
        <input
          id="partner-email"
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="partner-phone" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Phone Number
        </label>
        <input id="partner-phone" type="tel" name="phone" placeholder="+234 000 000 0000" className={inputClass} />
      </div>

      <div>
        <label htmlFor="partner-type" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Partnership Category <span className="text-primary-600">*</span>
        </label>
        <select id="partner-type" name="partnership_type" required defaultValue="" className={`${inputClass} cursor-pointer`}>
          <option value="" disabled>
            Select a category
          </option>
          {partnerFormCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="partner-website" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Website
        </label>
        <input
          id="partner-website"
          type="url"
          name="website"
          placeholder="https://yourcompany.com"
          className={inputClass}
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="partner-message" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Tell Us About Your Business
        </label>
        <textarea
          id="partner-message"
          name="message"
          rows={5}
          maxLength={500}
          placeholder="Briefly describe your company and the kind of partnership you are interested in (max 500 characters)."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? 'Submitting…' : 'Submit Partner Application'}
          {status !== 'loading' && <i className="ri-send-plane-line"></i>}
        </button>
        {status === 'success' && (
          <p className="text-sm font-semibold text-primary-700 flex items-center gap-2">
            <i className="ri-checkbox-circle-line"></i>
            Thanks — your application has been received. Our partnerships team will be in touch.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm font-semibold text-red-600 flex items-center gap-2">
            <i className="ri-error-warning-line"></i>
            {error}
          </p>
        )}
      </div>
    </form>
  );
}