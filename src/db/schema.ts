import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
  serial,
  date,
  real,
  boolean
} from "drizzle-orm/pg-core";


export const event = pgTable("event", {
  id: serial('id').primaryKey().notNull(),
  imageUrl: text('image_url'),
  name: varchar ('name', {length: 60}).notNull(),
  value: real('value'),
  quantityOfTickets: integer('quantity_of_tickets').notNull(),
  ministres: text('ministres').notNull(),
  datetime: date('datetime').defaultNow(),
  desc: text('desc'),
  created_at:timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const user = pgTable("user", {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 60 }).notNull(),
  email: varchar('email', { length: 60 }).notNull().unique(),
  password: varchar('password', { length: 60 }).notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
});


export const subscribers = pgTable("subscribers", {
  id: serial('id').primaryKey().notNull(),
  eventId: integer('event_id').references(() => event.id),
  userId: integer('user_id').references(() => user.id),
  paid: boolean('paid'),
  ticketsQuantity: integer('tickets_quantity').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
});
