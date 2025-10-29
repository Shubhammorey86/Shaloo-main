import React from 'react';

// ============ SCHEMA MARKUP COMPONENT ============
const SchemaMarkup = ({ type, data }) => {
  let schema = {};

  if (type === 'person') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Vaibhav Setiya",
      "birthDate": "1990-07-19",
      "birthPlace": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Shalimar Bagh",
          "addressRegion": "Delhi",
          "addressCountry": "India"
        }
      },
      "nationality": "Indian",
      "jobTitle": "Founder & Real Estate Expert",
      "description": "Founder of Treÿsta | Building Trust, Creating Wealth & Empowering Clients in Dubai Real Estate",
      "url": "https://www.vaibhavsetiya.com/",
      "sameAs": [
        "https://www.linkedin.com/in/vaibhav-setiyaa/",
        "https://www.instagram.com/vaibhav.treysta/",
        "https://youtube.com/@vaibhavtreysta"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Civil Engineering College",
        "location": "Sonepat, Haryana, India"
      },
      "parent": [
        {
          "@type": "Person",
          "name": "Girish Setiya",
          "jobTitle": "Engineer & Business Owner"
        },
        {
          "@type": "Person",
          "name": "Sushma Setiya",
          "jobTitle": "Ayurvedic Doctor"
        }
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Treÿsta",
        "url": "https://www.treysta.ae/",
        "sameAs": [
          "https://www.instagram.com/treysta.ae/"
        ]
      },
      "knowsAbout": [
        "Real Estate Investment",
        "Property Management",
        "Dubai Real Estate",
        "Portfolio Management",
        "Civil Engineering",
        "Construction Materials"
      ]
    };
  } else if (type === 'organization') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Treÿsta",
      "url": "https://www.treysta.ae/",
      "logo": "https://www.treysta.ae/logo.png",
      "founder": {
        "@type": "Person",
        "name": "Vaibhav Setiya",
        "url": "https://www.vaibhavsetiya.com/"
      },
      "foundingDate": "2021",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "UAE"
        }
      },
      "description": "Building Trust, Creating Wealth & Empowering Clients in Dubai Real Estate",
      "sameAs": [
        "https://www.instagram.com/treysta.ae/"
      ],
      "areaServed": "Dubai, UAE",
      "serviceType": "Real Estate Investment & Portfolio Management"
    };
  } else if (type === 'article') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.title,
      "description": data.excerpt,
      "datePublished": data.date,
      "dateModified": data.date,
      "author": {
        "@type": "Person",
        "name": "Vaibhav Setiya",
        "url": "https://www.vaibhavsetiya.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Treÿsta",
        "url": "https://www.treysta.ae/"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.vaibhavsetiya.com/blog/${data.slug}`
      },
      "articleSection": "Real Estate",
      "keywords": data.keywords
    };
  } else if (type === 'breadcrumb') {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": data.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
