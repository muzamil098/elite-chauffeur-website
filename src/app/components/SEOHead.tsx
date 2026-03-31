import { useEffect } from "react";

type SEOHeadProps = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  schema?: object;
};

export function SEOHead({ title, description, keywords, canonical, schema }: SEOHeadProps) {
  useEffect(() => {
    // Set page title
    document.title = `${title} | EliteChauffeur`;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Set keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // Set canonical URL if provided
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", canonical);
    }

    // Set Open Graph tags
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ];

    ogTags.forEach(({ property, content }) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute("content", content);
    });

    // Set Schema.org structured data if provided
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonical, schema]);

  return null;
}
