import { Metadata } from "next";

export const baseMetadata: Metadata = {
    title: "Suangga Wijanatha",
    description: "Suangga Wijanatha Portfolio Website.",
    icons: {
      icon: "/icons/Logo.svg",
      shortcut: "/icons/Logo.svg",
      apple: "/icons/Logo.svg",
    },
    keywords: [
      "Suangga",
      "Suangga Wijanatha",
      "SuanggaWijanatha",
      "Wijanatha",
      "Wija",
      "I Putu Gede Suangga Wijanatha",
      "Portofolio",
      "Machine Learning",
      "Data Analyst",
      "Web Developer",
      "UI/UX",
      "Grafix Designer",
      "Front End",
      "Back End",
      "Indonesia",
    ],
    authors: [
      {
        name: "I Putu Gede Suangga Wijanatha",
        url: "https://suanggawijanatha.vercel.app/",
      },
    ],
    creator: "Suangga Wijanatha",
    generator: "Next.js",
    applicationName: "Suangga Portfolio",
    category: "portfolio",
  
    openGraph: {
      title: "Suangga Wijanatha",
      description:
        "Portofolio website developer, data analyst, ui/ux designer, grafix designer, machine learning developer.",
      url: "https://suanggawijanatha.vercel.app/",
      siteName: "Suangga Wijanatha",
      images: [
        {
          url: "/images/portofolio/suangga.png",
          width: 1200,
          height: 630,
          alt: "Suangga Wijanatha Portfolio",
        },
      ],
      locale: "id_ID",
      type: "website",
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Suangga Wijanatha",
      description: "Portofolio developer dan machine learning enthusiast.",
      images: ["/images/portofolio/suangga.png"],
      creator: "@Su_Wija",
    },
  };