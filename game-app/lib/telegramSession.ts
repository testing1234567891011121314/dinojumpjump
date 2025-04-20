// Check if user already has app open
let activeUserId: number | null = null;
let timeout: NodeJS.Timeout | null = null;

export function canStartSession(userId: number): boolean {
  if (activeUserId === null || activeUserId === userId) {
    activeUserId = userId;

    // Reset session timeout (e.g., 5 mins)
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      activeUserId = null;
    }, 5 * 60 * 1000);

    return true;
  }
  return false;
}

export function endSession(userId: number): void {
  if (userId === activeUserId) {
    activeUserId = null;
  }
}

export function getActiveUser(): number | null {
  return activeUserId;
}
