import './globals.css'; // if using Tailwind or global styles
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'DinoJumpJump',
  description: 'Telegram Mini App',
};


export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode; 
}) {
  return (
    <html lang="en">
      <body className="pb-16">
        {children}
        <NavBar />
      </body>
    </html>
  );
}
