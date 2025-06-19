import type { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Kontak Suangga Wijanatha",
  description: "Kontak Suangga Wijanatha",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Kontak Suangga Wijanatha",
    description: "Kontak Suangga Wijanatha",
    url: "suanggawijanatha.vercel.app/about",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Kontak Suangga Wijanatha",
    description: "Kontak Suangga Wijanatha",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
