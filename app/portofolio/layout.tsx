import type { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Portofolio Suangga Wijanatha",
  description: "Portofolio Suangga Wijanatha",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Portofolio Suangga Wijanatha",
    description: "Portofolio Suangga Wijanatha",
    url: "suanggawijanatha.vercel.app/about",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Portofolio Suangga Wijanatha",
    description: "Portofolio Suangga Wijanatha",
  },
};

export default function PortofolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
