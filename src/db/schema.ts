import { boolean, integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const categoriesTable = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull(),
  description: text().notNull(),
  image: text().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const productsTable = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text().notNull(),
  
  description: text().notNull(),
  categoryId: uuid("category_id").references(() => categoriesTable.id),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const productVariantsTable = pgTable("product_variants", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("product_id").references(() => productsTable.id),
  name: text().notNull(),
  description: text().notNull(),
  priceInCents: integer().notNull(),
  stock: integer().notNull(),
  size: text().notNull(),
  color: text().notNull(),
  images: text("images").array().notNull(),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
