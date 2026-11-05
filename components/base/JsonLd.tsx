interface JsonLdProps {
  /** A single schema object or an array of schema objects to embed. */
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Injects a JSON-LD structured-data block into the document.
 * Renders as a native <script type="application/ld+json"> element so search
 * engines can read the schema straight from the page.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}