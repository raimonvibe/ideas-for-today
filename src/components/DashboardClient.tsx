"use client";

import { useMemo, useState } from "react";
import {
  ACTIVITIES,
  filterActivities,
  type ActivityCategory,
} from "@/data/activities";
import { getTodayCompleted } from "@/lib/storage";
import { useAppData } from "@/hooks/useAppData";
import { ActivityCard } from "./ActivityCard";
import { ActivityFilters } from "./ActivityFilters";

export function DashboardClient() {
  const { data, hydrated, toggle } = useAppData();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ActivityCategory | "all">("all");

  const completed = data ? getTodayCompleted(data) : [];
  const doneCount = completed.length;
  const total = ACTIVITIES.length;

  const filtered = useMemo(
    () => filterActivities(ACTIVITIES, query, category),
    [query, category],
  );

  const filteredDoneCount = filtered.filter((a) =>
    completed.includes(a.id),
  ).length;

  return (
    <div className="page">
      <section className="page-hero">
        <h1 className="page-title">Today&apos;s ideas</h1>
        <p className="page-lead">
          Tap a card when you&apos;ve done it. Your progress stays on this
          device.
        </p>
        {hydrated && (
          <p className="progress-pill" aria-live="polite">
            <span className="progress-pill-strong">{doneCount}</span>
            <span> of {total} done today</span>
            {filtered.length < total && (
              <span className="text-[var(--text-muted)]">
                {" "}
                · {filteredDoneCount} done in view
              </span>
            )}
          </p>
        )}
      </section>

      <div className="activity-filters-sticky">
        <ActivityFilters
          query={query}
          category={category}
          onQueryChange={setQuery}
          onCategoryChange={setCategory}
          resultCount={filtered.length}
          totalCount={total}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="empty-state mt-4">
          No activities match your search. Try another keyword or category.
        </p>
      ) : (
        <div
          className="grid grid-cols-1 gap-6 p-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          role="group"
          aria-label="Activity suggestions"
        >
          {filtered.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              checked={completed.includes(activity.id)}
              onToggle={() => toggle(activity.id)}
              disabled={!hydrated}
            />
          ))}
        </div>
      )}
    </div>
  );
}
