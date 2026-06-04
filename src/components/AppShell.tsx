import { Header } from "./Header";

export function AppShell({
  activePath,
  children,
}: {
  activePath: string;
  children: React.ReactNode;
}) {
  return (
    <div className="app-shell">
      <Header activePath={activePath} />
      <main>{children}</main>
    </div>
  );
}
