'use client';

import dynamic from "next/dynamic";

const Providers = dynamic(
  () => import("./Providers").then((mod) => mod.Providers),
  { ssr: false }
);

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}