import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
  serial,
  json,
  date,
  real,
  numeric,
  boolean
} from "drizzle-orm/pg-core";


export const eventRegistration = pgTable("eventRegistration", {
  id: serial('id').primaryKey().notNull(),
  imageUrl: text('imageUrl').notNull(),
  name: varchar('name', { length: 60 }).notNull(),
  eventTime: text('eventTime').notNull(),
  registrationDate: timestamp('registrationDate'),
  ministres: json('ministres'),
  addInfos: text('AddInfos'),
  value: real('value'),
  quantityOfTickets: integer('quantityOfTickets'),
  createdAt: date('createdAt'),
  updatedAt: date('updatedAt')
});

export const peopleRegistration = pgTable("peopleRegistration", {
  id: serial('id').primaryKey().notNull(),
  token: text('token'),
  name: varchar('name', { length: 100 }).notNull(),
  loc: text('localization').notNull(),
  cellphone: numeric('cellphone'),
  ticketsPurchased: integer('quantityOfTickets'), // QUANTOS TICKETS ELA QUER
  paidStats: boolean('paidStats'), // SE A PESSOA PAGOU O EVENTO
  interestStats: boolean('interestStats'), // SE A PESSOA ESTÁ INTERESSADA NO EVENTO
  createdAt: date('createdAt'),
  updatedAt: date('updatedAt')
});

export const eventsInf = pgTable("eventsInf", {
  id: serial('id').primaryKey().notNull(), // VAI REFERENCIAR O ID DO EVENTO (EVENT REGIS.)
  peopleRegistered: integer('peopleRegistered'), // VAI REFERENCIAR QUANTIDADE TOTAL DE IDS INTERESSADOS DAQUELE EVENTO (QUANTIDADE DE ID'S DE peopleRegistration (interestStats))
  peoplePaid: integer('peoplePaid'), // VAI REFERENCIAR QUANTIDADE TOTAL DE IDS QUE PAGARAM DAQUELE EVENTO peopleRegistration (paidStats))
  peopleNotPaid: integer('peopleNotPaid'), // VAI REFERENCIAR QUANTIDADE TOTAL DE IDS QUE NÃO PAGARAM DAQUELE EVENTO (interestStats - paidStats )
});

export const subscribersInf = pgTable("subscribersInf", {
  id: serial('id').primaryKey().notNull(), // VAI REFERENCIAR CADA UM DOS ID'S DAS PESSOAS REGISTRADAS
  // essas informações devem vir juntamente do id da pessoa
  name: varchar('name', { length: 100 }).notNull(),
  cellphone: numeric('cellphone'),
  loc: text('localization').notNull(),
  paidStats: boolean('paidStats'),
  ticketsQuantity: integer('ticketsQuantity')
  //
});

export const autentication = pgTable("autentication", {
  id: serial('id').primaryKey().notNull(),
  userToken: text('userToken'),
  userId: text('userId'),
  email: varchar('email', { length: 100 }),
  password: varchar('password', { length: 50 }),
  createdAt: date('createdAt'),
  updatedAt: date('updatedAt')
});
