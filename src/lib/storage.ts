export const STORAGE_KEY = "ideas-for-today";

export type DayRecord = {
  date: string;
  completedIds: string[];
};

export type AppData = {
  /** YYYY-MM-DD -> completed activity ids for that day */
  history: Record<string, string[]>;
};

export function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function emptyData(): AppData {
  return { history: {} };
}

export function loadData(): AppData {
  if (typeof window === "undefined") return emptyData();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyData();
    const parsed = JSON.parse(raw) as AppData;
    if (!parsed?.history || typeof parsed.history !== "object") {
      return emptyData();
    }
    return parsed;
  } catch {
    return emptyData();
  }
}

export function saveData(data: AppData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getTodayCompleted(data: AppData): string[] {
  return data.history[todayKey()] ?? [];
}

export function setTodayCompleted(data: AppData, ids: string[]): AppData {
  const key = todayKey();
  const next = { ...data, history: { ...data.history, [key]: ids } };
  if (ids.length === 0) {
    const { [key]: _, ...rest } = next.history;
    return { history: rest };
  }
  return next;
}

export function toggleActivity(data: AppData, activityId: string): AppData {
  const today = getTodayCompleted(data);
  const has = today.includes(activityId);
  const next = has
    ? today.filter((id) => id !== activityId)
    : [...today, activityId];
  return setTodayCompleted(data, next);
}

export function getHistoryEntries(data: AppData): DayRecord[] {
  return Object.entries(data.history)
    .map(([date, completedIds]) => ({ date, completedIds }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function computeStreak(data: AppData): number {
  let streak = 0;
  const cursor = new Date();

  for (;;) {
    const key = cursor.toISOString().slice(0, 10);
    const completed = data.history[key];
    if (!completed?.length) break;
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

export function totalCompletions(data: AppData): number {
  return Object.values(data.history).reduce((sum, ids) => sum + ids.length, 0);
}

export function uniqueDaysActive(data: AppData): number {
  return Object.values(data.history).filter((ids) => ids.length > 0).length;
}
