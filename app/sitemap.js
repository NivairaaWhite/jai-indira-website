import { site } from "../data/site";
import { getActiveMachines } from "../data/machines";

export default function sitemap() {
  const base = site.url;
  const staticRoutes = ["", "/machinery", "/applications", "/about", "/resources", "/contact", "/privacy", "/terms"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
    })
  );
  const machineRoutes = getActiveMachines().map((m) => ({
    url: `${base}/machinery/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticRoutes, ...machineRoutes];
}
