// Navigation Bar
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-gray-200 p-3 border-t text-sm">
      <Link href="/">
        <button className={pathname === '/' ? 'font-bold' : ''}>Home</button>
      </Link>
      <Link href="/about">
        <button className={pathname === '/about' ? 'font-bold' : ''}>Info</button>
      </Link>
      <Link href="/profile">
        <button className={pathname === '/profile' ? 'font-bold' : ''}>Profile</button>
      </Link>
    </nav>
  );
}
