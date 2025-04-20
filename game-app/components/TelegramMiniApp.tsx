import '@telegram-apps/telegram-ui/dist/styles.css';

import { AppRoot, Placeholder } from '@telegram-apps/telegram-ui';

export default function TelegramMiniApp() {
  return (
    <AppRoot>
        <Placeholder
            header="Title"
            description="Description"
        >
            <img
                alt="Telegram sticker"
                src="https://xelene.me/telegram.gif"
                style={{ display: 'block', width: '144px', height: '144px' }}
            />
        </Placeholder>
  </AppRoot>
  );
}
