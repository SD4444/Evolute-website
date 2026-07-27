-- Contact form submissions.
-- Apply with:
--   npx wrangler d1 execute evolute-contact-submissions --remote --file migrations/0001_create_submissions.sql
CREATE TABLE IF NOT EXISTS submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  topic TEXT NOT NULL,
  message TEXT NOT NULL,
  submitted_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS submissions_submitted_at_idx ON submissions (submitted_at DESC);
