// End session
import { NextResponse } from 'next/server';
import { endSession } from '@/lib/telegramSession';

export async function POST(request: Request) {
  const body = await request.json();
  const userId = body.user_id;

  if (typeof userId === 'number') {
    endSession(userId);
  }

  return NextResponse.json({ success: true });
}
