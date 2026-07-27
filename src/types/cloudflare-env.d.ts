/**
 * Bindings this app expects on the Worker, on top of the ones
 * @opennextjs/cloudflare declares for itself.
 */
declare global {
  // Must stay an interface: this merges into the CloudflareEnv interface that
  // @opennextjs/cloudflare declares. A type alias would collide instead.
  // eslint-disable-next-line typescript-eslint/consistent-type-definitions
  interface CloudflareEnv {
    /** D1 database holding contact form submissions. See migrations/. */
    CONTACT_SUBMISSIONS?: D1Database;
    /** Address that submission notifications are sent to. */
    CONTACT_NOTIFY_TO?: string;
    /** Verified sender address for submission notifications. */
    CONTACT_NOTIFY_FROM?: string;
    /** Resend API key. Set as a secret; notifications are skipped when absent. */
    RESEND_API_KEY?: string;
  }
}

export {};
