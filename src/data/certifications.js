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
// ============================================================

export const certifications = [
  {
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    year: "2025",
    status: "achieved",
  },
  // Add future certifications below when earned:
  // {
  //   name: "Databricks Certified Machine Learning Associate",
  //   issuer: "Databricks",
  //   year: "",
  //   status: "in-progress",  // Set to "achieved" and add year when done
  // },
];
