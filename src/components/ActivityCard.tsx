"use client";

import type { Activity } from "@/data/activities";

type Props = {
  activity: Activity;
  checked: boolean;
  onToggle: () => void;
  disabled?: boolean;
};

export function ActivityCard({ activity, checked, onToggle, disabled }: Props) {
  const Icon = activity.icon;

  return (
    <label
      className={`group relative flex min-h-[11rem] cursor-pointer flex-col rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50 p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl sm:min-h-[12rem] sm:p-8 dark:border-emerald-900 dark:from-emerald-950 dark:to-green-950 ${
        disabled ? "pointer-events-none opacity-60" : ""
      } ${checked ? "ring-2 ring-pink-300 dark:ring-emerald-600" : ""}`}
    >
      <div className="flex items-start justify-between">
        <Icon
          className="h-10 w-10 text-pink-500 dark:text-emerald-400"
          strokeWidth={1.75}
          aria-hidden
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          disabled={disabled}
          className="h-7 w-7 accent-pink-500 dark:accent-emerald-400"
          aria-label={`Mark ${activity.label} as done`}
        />
      </div>
      <h3 className="mt-5 flex-1 text-xl font-semibold leading-snug text-[var(--text)] sm:mt-6 sm:text-2xl">
        {activity.label}
      </h3>
    </label>
  );
}
