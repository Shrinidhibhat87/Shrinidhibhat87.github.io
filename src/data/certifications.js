// ============================================================
// Certifications Data
// ============================================================
// To add a new certification once earned, add an object below.
// Fields:
//   name     - Full certification name
//   issuer   - Issuing organisation
//   year     - Year achieved (string)
//   status   - "achieved" | "in-progress"  (in-progress items are hidden from the site)
//   badgeColor - Tailwind bg color class for the badge accent (optional)
//   credentialUrl - (optional) link to the public credential; renders a "View credential" link
// ============================================================

export const certifications = [
  {
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    year: "2025",
    status: "achieved",
    credentialUrl: "https://credentials.databricks.com/4757366d-0a70-4db5-a95c-2b62c625d5f5",
  },
  // Add future certifications below when earned:
  // {
  //   name: "Databricks Certified Machine Learning Associate",
  //   issuer: "Databricks",
  //   year: "",
  //   status: "in-progress",  // Set to "achieved" and add year when done
  // },
];
