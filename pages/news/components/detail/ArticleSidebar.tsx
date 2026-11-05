import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '@/mocks/news';

export default function ArticleSidebar({ article }: { article: Article }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: 'ri-linkedin-fill',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        typeof window !== 'undefined' ? window.location.href : ''
      )}`,
    },
    {
      name: 'Facebook',
      icon: 'ri-facebook-fill',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        typeof window !== 'undefined' ? window.location.href : ''
      )}`,
    },
    {
      name: 'X',
      icon: 'ri-twitter-x-line',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        typeof window !== 'undefined' ? window.location.href : ''
      )}&text=${encodeURIComponent(article.title)}`,
    },
  ];

  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      <div className="bg-background-50 border border-background-200 rounded-2xl p-6">
        <h3 className="font-heading text-sm font-semibold text-foreground-950 uppercase tracking-wide">Share</h3>
        <div className="mt-4 flex items-center gap-2.5">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${link.name}`}
              className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-background-100 border border-background-200 text-foreground-700 hover:bg-primary-600 hover:text-background-50 hover:border-primary-600 transition-colors"
            >
              <i className={`${link.icon} text-lg`}></i>
            </a>
          ))}
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy link"
            className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-background-100 border border-background-200 text-foreground-700 hover:bg-primary-600 hover:text-background-50 hover:border-primary-600 transition-colors"
          >
            <i className={`${copied ? 'ri-check-line' : 'ri-link'} text-lg`}></i>
          </button>
        </div>
        {copied && <p className="mt-2 text-xs font-semibold text-primary-700">Link copied to clipboard</p>}
      </div>

      <div className="bg-background-50 border border-background-200 rounded-2xl p-6">
        <h3 className="font-heading text-sm font-semibold text-foreground-950 uppercase tracking-wide">Tags</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary-900 bg-secondary-100 rounded-full px-3 py-1.5"
            >
              <i className="ri-hashtag text-secondary-600"></i>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-primary-900 rounded-2xl p-6 text-background-50 relative overflow-hidden">
        <i className="ri-customer-service-2-line absolute -right-3 -bottom-3 text-7xl text-background-50/10"></i>
        <h3 className="font-heading text-lg font-semibold leading-snug">Need help with a project like this?</h3>
        <p className="mt-2 text-sm text-background-200 leading-relaxed">
          Talk to our team about power, fire safety or engineering for your business.
        </p>
        <Link
          to="/contact"
          className="cursor-pointer mt-5 whitespace-nowrap inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors"
        >
          Request a Quote
          <i className="ri-arrow-right-line"></i>
        </Link>
      </div>

      <Link
        to="/news"
        className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-foreground-700 hover:text-primary-700 transition-colors"
      >
        <i className="ri-arrow-left-line"></i>
        Back to all news
      </Link>
    </aside>
  );
}