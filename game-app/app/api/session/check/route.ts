// Check session
import { NextResponse } from 'next/server';
import { canStartSession } from '@/lib/telegramSession';

export async function POST(request: Request) {
  const body = await request.json();
  const userId = body.user_id;

  if (typeof userId !== 'number') {
    return NextResponse.json({ allowed: false, error: 'Invalid user_id' }, { status: 400 });
  }

  const allowed = canStartSession(userId);
  return NextResponse.json({ allowed });
}
