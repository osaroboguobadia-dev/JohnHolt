import { useState, type FormEvent } from 'react';
import { enquiryDepartments, enquirySubjects } from '@/mocks/contact';

type Status = 'idle' | 'loading' | 'success' | 'error';

const FORM_URL = 'https://readdy.ai/api/form/db8b5a3k13ra8mig8p1g';

export default function EnquiryForm() {
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

    const fullName = (formData.get('full_name') as string | null)?.trim();
    const email = (formData.get('email') as string | null)?.trim();
    const message = (formData.get('message') as string | null)?.trim();
    if (!fullName || !email || !message) {
      setError('Please provide your name, a valid email address and a short message.');
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
    <form id="contact-enquiry-form" data-readdy-form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
        <label htmlFor="contact-name" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Full Name <span className="text-primary-600">*</span>
        </label>
        <input id="contact-name" type="text" name="full_name" required placeholder="Your full name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="contact-company" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Company / Organisation
        </label>
        <input id="contact-company" type="text" name="company" placeholder="Your company name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Email Address <span className="text-primary-600">*</span>
        </label>
        <input id="contact-email" type="email" name="email" required placeholder="you@example.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Phone Number
        </label>
        <input id="contact-phone" type="tel" name="phone" placeholder="+234 000 000 0000" className={inputClass} />
      </div>

      <div>
        <label htmlFor="contact-department" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Department <span className="text-primary-600">*</span>
        </label>
        <select id="contact-department" name="department" required defaultValue="" className={`${inputClass} cursor-pointer`}>
          <option value="" disabled>
            Select a department
          </option>
          {enquiryDepartments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Subject <span className="text-primary-600">*</span>
        </label>
        <select id="contact-subject" name="subject" required defaultValue="" className={`${inputClass} cursor-pointer`}>
          <option value="" disabled>
            What is it about?
          </option>
          {enquirySubjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="contact-message" className="block text-xs font-semibold text-foreground-700 mb-1.5">
          Your Message <span className="text-primary-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          maxLength={500}
          required
          placeholder="Tell us about your requirements, project or question (max 500 characters)."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary-600 text-background-50 text-sm font-semibold hover:bg-primary-700 transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
          {status !== 'loading' && <i className="ri-send-plane-line"></i>}
        </button>
        {status === 'success' && (
          <p className="text-sm font-semibold text-primary-700 flex items-center gap-2">
            <i className="ri-checkbox-circle-line"></i>
            Thanks — your message has been received. Our team will be in touch shortly.
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