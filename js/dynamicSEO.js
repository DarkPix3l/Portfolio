// dynamicSEO.js
function updateDynamicSEO(project) {
  if (!project) return;

  // --- Page Title ---
  document.title = `${project.title} – Greta Macrì Portfolio`;

  // --- Meta Description ---
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", project.summary || project.description);

  // --- Open Graph (for link previews) ---
  const ogTags = [
    { property: "og:title", content: project.title },
    { property: "og:description", content: project.summary || project.description },
    { property: "og:image", content: project.mainImage?.src },
    { property: "og:url", content: window.location.href },
    { property: "og:type", content: "website" },
  ];

  ogTags.forEach(tag => {
    let el = document.querySelector(`meta[property='${tag.property}']`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("property", tag.property);
      document.head.appendChild(el);
    }
    el.setAttribute("content", tag.content || "");
  });

  // --- Structured Data (JSON-LD) ---
  const ldScriptId = "structuredData";
  let ldScript = document.getElementById(ldScriptId);
  if (!ldScript) {
    ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.id = ldScriptId;
    document.head.appendChild(ldScript);
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.summary || project.description,
    "url": window.location.href,
    "author": {
      "@type": "Person",
      "name": "Greta Macrì"
    },
    "image": project.mainImage?.src || ""
  };

  ldScript.textContent = JSON.stringify(structuredData, null, 2);
}
