import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
   dbCredentials: {
    url: "postgresql://aicruiter_owner:83EwpmOFfIJR@ep-patient-feather-a5go5bma.us-east-2.aws.neon.tech/aicruiter?sslmode=require",
  },
});
