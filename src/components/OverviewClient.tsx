"use client";

import { CalendarDays, Flame, ListChecks, TrendingUp } from "lucide-react";
import { ACTIVITIES } from "@/data/activities";
import {
  computeStreak,
  getHistoryEntries,
  getTodayCompleted,
  totalCompletions,
  uniqueDaysActive,
} from "@/lib/storage";
import { useAppData } from "@/hooks/useAppData";

const activityMap = Object.fromEntries(
  ACTIVITIES.map((a) => [a.id, a.label]),
);

export function OverviewClient() {
  const { data, hydrated } = useAppData();

  if (!hydrated || !data) {
    return (
      <div className="page">
        <p className="page-lead">Loading your stats…</p>
      </div>
    );
  }

  const todayDone = getTodayCompleted(data).length;
  const streak = computeStreak(data);
  const total = totalCompletions(data);
  const daysActive = uniqueDaysActive(data);
  const history = getHistoryEntries(data);

  const stats = [
    {
      label: "Done today",
      value: todayDone,
      icon: ListChecks,
    },
    {
      label: "Current streak",
      value: streak,
      suffix: streak === 1 ? " day" : " days",
      icon: Flame,
    },
    {
      label: "All-time check-offs",
      value: total,
      icon: TrendingUp,
    },
    {
      label: "Active days",
      value: daysActive,
      icon: CalendarDays,
    },
  ];

  return (
    <div className="page">
      <section className="page-hero">
        <h1 className="page-title">Overview</h1>
        <p className="page-lead">
          Completion stats and history from your browser storage.
        </p>
      </section>

      <div className="stats-grid">
        {stats.map(({ label, value, suffix, icon: Icon }) => (
          <article key={label} className="stat-card">
            <Icon className="stat-card-icon" size={22} aria-hidden />
            <p className="stat-card-value">
              {value}
              {suffix ?? ""}
            </p>
            <p className="stat-card-label">{label}</p>
          </article>
        ))}
      </div>

      <section className="history-section">
        <h2 className="section-title">History</h2>
        {history.length === 0 ? (
          <p className="empty-state">
            No completed activities yet. Check off ideas on the Today page to
            build your history.
          </p>
        ) : (
          <ul className="history-list">
            {history.map(({ date, completedIds }) => (
              <li key={date} className="history-item">
                <div className="history-item-head">
                  <time dateTime={date}>{formatDate(date)}</time>
                  <span className="history-count">
                    {completedIds.length} completed
                  </span>
                </div>
                <ul className="history-tags">
                  {completedIds.map((id) => (
                    <li key={id} className="history-tag">
                      {activityMap[id] ?? `Activity ${id}`}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
