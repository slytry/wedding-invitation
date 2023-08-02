import { Client } from "@notionhq/client";
// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { String } from "runtypes";
export const notion = new Client({
	auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export const ID = String.withBrand("ID");

export const parsedDatabaseId = ID.check(databaseId);
