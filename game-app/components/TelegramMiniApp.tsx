import '@telegram-apps/telegram-ui/dist/styles.css';
import { AppRoot, Placeholder } from '@telegram-apps/telegram-ui';
import T_RexRunnerGame from './DinoJumpJump';

export default function TelegramMiniApp() {
    return (
        <AppRoot>
            <Placeholder
                header="T-Rex Runner"
                description="Play the offline T-Rex game"
            >
                <T_RexRunnerGame />
            </Placeholder>
        </AppRoot>
    );
}


// Stub for testing
// export default function TelegramMiniApp() {
//     return (
//         <AppRoot>
//             <Placeholder
//                 header="Title"
//                 description="Description"
//             >
//                 <img
//                     alt="Telegram sticker"
//                     src="https://xelene.me/telegram.gif"
//                     style={{ display: 'block', width: '144px', height: '144px' }}
//                 />
//             </Placeholder>
//         </AppRoot>
//     );
// }
