import { useEffect, useState, type FormEvent } from 'react';
import { jobRoles } from '@/mocks/careers';

type Status = 'idle' | 'loading' | 'success' | 'error';

const FORM_URL = 'https://readdy.ai/api/form/db8b2mk6oi3g3tv8ukmg';
const ROLE_OPTIONS = [...jobRoles.map((r) => r.title), 'Speculative Application / General'];

export default function ApplicationForm({ selectedRole }: { selectedRole: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    if (selectedRole) {
      setPosition(selectedRole);
    }
  }, [selectedRole]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = (formData.get('website_alt') as string | null)?.trim();
    if (honeypot) {
      setStatus('success');
      form.reset();
      setPosition('');
      return;
    }
    formData.delete('website_alt');

    const email = (formData.get('email') as string | null)?.trim();
    const fullName = (formData.get('full_name') as string | null)?.trim();
    if (!fullName || !email) {
      setError('Please provide your full name and a valid email address.');
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
        setPosition('');
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
    <form id="careers-application-form" data-readdy-form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <input
        type="text"
        name="website_alt"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        readOnly
        className="hp-field"
      />

      <div>
        <label htmlFor="careers-name" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Full Name <span className="text-primary-600">*</span>
        </label>
        <input id="careers-name" type="text" name="full_name" required placeholder="Your full name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="careers-email" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Email Address <span className="text-primary-600">*</span>
        </label>
        <input id="careers-email" type="email" name="email" required placeholder="you@example.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="careers-phone" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Phone Number
        </label>
        <input id="careers-phone" type="tel" name="phone" placeholder="+234 000 000 0000" className={inputClass} />
      </div>

      <div>
        <label htmlFor="careers-position" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Position of Interest <span className="text-primary-600">*</span>
        </label>
        <select
          id="careers-position"
          name="position"
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>
            Select a role
          </option>
          {ROLE_OPTIONS.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="careers-link" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Link to CV / Portfolio
        </label>
        <input
          id="careers-link"
          type="url"
          name="cv_link"
          placeholder="https://link-to-your-cv.com"
          className={inputClass}
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="careers-message" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Why Are You a Great Fit?
        </label>
        <textarea
          id="careers-message"
          name="message"
          rows={5}
          maxLength={500}
          placeholder="Tell us briefly about your experience and why you would like to join us (max 500 characters)."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? 'Submitting…' : 'Submit Application'}
          {status !== 'loading' && <i className="ri-send-plane-line"></i>}
        </button>
        {status === 'success' && (
          <p className="text-sm font-semibold text-primary-700 flex items-center gap-2">
            <i className="ri-checkbox-circle-line"></i>
            Thanks — your application has been received. We will be in touch.
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