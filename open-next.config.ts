import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  // Serve cached responses before running the full Next router. Safe here
  // because the app does not use PPR.
  enableCacheInterception: true,

  // Every route here is prerendered (Static/SSG) with no ISR or revalidation, so
  // the prerendered output can be served straight from the Workers static assets
  // binding. Without this the Worker re-rendered each page on every request
  // (x-nextjs-cache: MISS always, ~260ms CPU median), which made concurrent
  // request bursts exhaust the isolate and return 503s.
  incrementalCache: staticAssetsIncrementalCache,
});
