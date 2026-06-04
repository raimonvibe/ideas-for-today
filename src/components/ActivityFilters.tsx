"use client";

import { Search, X } from "lucide-react";
import {
  CATEGORY_FILTERS,
  type ActivityCategory,
} from "@/data/activities";

type Props = {
  query: string;
  category: ActivityCategory | "all";
  onQueryChange: (query: string) => void;
  onCategoryChange: (category: ActivityCategory | "all") => void;
  resultCount: number;
  totalCount: number;
};

export function ActivityFilters({
  query,
  category,
  onQueryChange,
  onCategoryChange,
  resultCount,
  totalCount,
}: Props) {
  const hasFilters = query.trim() !== "" || category !== "all";

  return (
    <div className="activity-filters">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-pink-400 dark:text-emerald-500"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search activities…"
          className="w-full rounded-2xl border border-pink-100 bg-white/80 py-3.5 pl-12 pr-12 text-base text-[var(--text)] shadow-md outline-none transition-shadow placeholder:text-[var(--text-muted)] focus:border-pink-300 focus:ring-2 focus:ring-pink-200 dark:border-emerald-900 dark:bg-emerald-950/60 dark:focus:border-emerald-600 dark:focus:ring-emerald-800"
          aria-label="Search activities"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:bg-pink-50 hover:text-[var(--text)] dark:hover:bg-emerald-900"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter by category"
      >
        {CATEGORY_FILTERS.map(({ id, label }) => {
          const active = category === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onCategoryChange(id)}
              aria-pressed={active}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active
                  ? "bg-gradient-to-br from-pink-400 to-rose-400 text-white shadow-md dark:from-emerald-600 dark:to-green-600"
                  : "border border-pink-100 bg-white/70 text-[var(--text-muted)] hover:border-pink-200 hover:text-[var(--text)] dark:border-emerald-900 dark:bg-emerald-950/50 dark:hover:border-emerald-700 dark:hover:text-[var(--text)]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-[var(--text-muted)]" aria-live="polite">
        {hasFilters ? (
          <>
            Showing <span className="font-semibold text-[var(--text)]">{resultCount}</span>{" "}
            of {totalCount} activities
          </>
        ) : (
          <>{totalCount} activities</>
        )}
      </p>
    </div>
  );
}
