"use client";

import { useCallback, useEffect, useState } from "react";
import {
  loadData,
  saveData,
  toggleActivity,
  type AppData,
} from "@/lib/storage";

export function useAppData() {
  const [data, setData] = useState<AppData | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setData(loadData());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated && data) saveData(data);
  }, [data, hydrated]);

  const toggle = useCallback((activityId: string) => {
    setData((prev) => (prev ? toggleActivity(prev, activityId) : prev));
  }, []);

  return { data, hydrated, toggle };
}
