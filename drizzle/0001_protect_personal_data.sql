ALTER TABLE "newsletter_subscribers" ADD COLUMN "email_hash" text NOT NULL;--> statement-breakpoint
DROP INDEX "newsletter_email_unique";--> statement-breakpoint
CREATE UNIQUE INDEX "newsletter_email_hash_unique" ON "newsletter_subscribers" USING btree ("email_hash");
