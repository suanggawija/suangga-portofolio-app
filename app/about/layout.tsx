import type { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Tentang Suangga Wijanatha",
  description: "Kenali lebih dekat Suangga Wijanatha",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Tentang Suangga Wijanatha",
    description: "Kenali lebih dekat Suangga Wijanatha",
    url: "suanggawijanatha.vercel.app/about",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Tentang Suangga Wijanatha",
    description: "Kenali lebih dekat Suangga Wijanatha",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
