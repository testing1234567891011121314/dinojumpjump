'use client';


import '@telegram-apps/telegram-ui/dist/styles.css';
import { AppRoot, Card, Title, Text } from '@telegram-apps/telegram-ui';
import T_RexRunnerGame from './DinoJumpJump';
import NavBar from './NavBar';


export default function TelegramMiniApp() {
    return (
      <AppRoot>
        <div className="min-h-screen pb-16 p-4 flex flex-col justify-between">
          <section className="text-center">
            <Title level="2">T-Rex Runner</Title>
            <Card className="mt-4">
              <T_RexRunnerGame />
              <Text>Play the offline Dino game</Text>
            </Card>
          </section>
  
          <NavBar />
        </div>
      </AppRoot>
    );
}


// export default function TelegramMiniApp() {
//     return (
//         <AppRoot>
//             <Placeholder
//                 header="T-Rex Runner"
//                 description="Play the offline T-Rex game"
//             >
//                 <T_RexRunnerGame />
//             </Placeholder>
//         </AppRoot>
//     );
// }


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
