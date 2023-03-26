import { Client } from '@notionhq/client';
import isBetweenLatestWeek from './isBetweenLatestWeek';

// Initializing a client
const notionClient = new Client({
  auth: process.env.NOTION_BOOKS_RECORD,
});

async function getLatestWeekQuoteLogCount() {
  if (!process.env.BOOK_RECORD_DB_ID)
    throw new Error('BOOK_RECORD_DB_ID is not defined');

  const logDB = await notionClient.databases.query({
    database_id: process.env.BOOK_RECORD_DB_ID,
  });

  return logDB.results.filter((res) =>
    'created_time' in res ? isBetweenLatestWeek(res.created_time) : false
  ).length;
}

export default getLatestWeekQuoteLogCount;
