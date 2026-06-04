import { AppShell } from "@/components/AppShell";
import { OverviewClient } from "@/components/OverviewClient";

export default function OverviewPage() {
  return (
    <AppShell activePath="/overview">
      <OverviewClient />
    </AppShell>
  );
}
