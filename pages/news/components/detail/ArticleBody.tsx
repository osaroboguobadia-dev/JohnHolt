import type { ArticleBlock } from '@/mocks/news';

export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-7">
      {blocks.map((block, idx) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={idx}
              className="font-heading text-xl md:text-2xl font-semibold text-foreground-950 leading-snug pt-2"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === 'quote') {
          return (
            <blockquote
              key={idx}
              className="relative bg-primary-50 border-l-4 border-primary-500 rounded-r-2xl px-6 py-6 md:px-8 md:py-7"
            >
              <i className="ri-double-quotes-l text-2xl text-primary-400"></i>
              <p className="font-heading text-lg md:text-xl text-foreground-900 leading-relaxed mt-2">
                {block.text}
              </p>
              {block.cite && (
                <footer className="mt-3 text-xs md:text-sm font-semibold text-primary-700">— {block.cite}</footer>
              )}
            </blockquote>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={idx} className="space-y-3">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-foreground-700 leading-relaxed">
                  <i className="ri-check-line text-primary-600 mt-1 shrink-0"></i>
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={idx} className="text-sm md:text-base text-foreground-700 leading-[1.85]">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}