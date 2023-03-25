import getWeekQuoteLogCount from './getLatestWeekQuoteLogCount';
import { IncomingWebhook } from '@slack/webhook';

if (!process.env.SLACK_HEUG_TEST)
  throw new Error('SLACK_HEUG_TEST is not defined');

const webhook = new IncomingWebhook(process.env.SLACK_HEUG_TEST);

async function main() {
  const count = await getWeekQuoteLogCount();

  try {
    const WebhookResult = await webhook.send({
      blocks: [
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: `이번주 모임에 ${count}건이 등록되었습니다. 3페이지만 읽어도 발췌할 내용이 많습니다. 화이팅입니다`,
          },
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                text: '작성하기',
                emoji: true,
              },
              url: 'https://www.notion.so/modusign/FE-06c9d5cd1303473993c998dfbbee9c19?pvs=4',
              style: 'primary',
            },
          ],
        },
      ],
    });

    console.log(WebhookResult);
  } catch (e: unknown) {
    console.log((e as Error).message);
  }
}

main();
