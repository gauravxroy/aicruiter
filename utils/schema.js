import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
export const aicruiter = pgTable("interviewData", {
  if: serial("id").primaryKey(),
  jsonMockRes: text("jsonRes").notNull(),
  jobPositon: varchar("jobPosition").notNull(),
  experience: varchar("experience").notNull(),
  jobDescription: varchar("jobDescription").notNull(),
  createBy: varchar("createdBy").notNull(),
  createAt: varchar("createdAt").notNull(),
});
