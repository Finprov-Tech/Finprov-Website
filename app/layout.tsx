import type { Metadata } from "next";
import "@/styles.css";

export const metadata: Metadata = {
  title: "Finprov — Master Finance. Accelerate Your Global Career.",
  description:
    "Industry-validated finance programs with SAP, Tally & Power BI training. 100% placement assistance for freshers and working professionals.",
  authors: [{ name: "Finprov" }],
  icons: {
    icon: "/finprov-mark.jpeg",
    apple: "/finprov-mark.jpeg",
  },
  openGraph: {
    title: "Finprov — Master Finance. Accelerate Your Global Career.",
    description:
      "Industry-validated finance programs with SAP, Tally & Power BI training. 100% placement assistance for freshers and working professionals.",
    type: "website",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/591d0734-9d3c-4d05-8672-6e60656cf807/id-preview-48cf8af7--1bfe35fd-7cb4-4996-bb9b-5af1a81a71e4.lovable.app-1784207304675.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finprov — Master Finance. Accelerate Your Global Career.",
    description:
      "Industry-validated finance programs with SAP, Tally & Power BI training. 100% placement assistance for freshers and working professionals.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/591d0734-9d3c-4d05-8672-6e60656cf807/id-preview-48cf8af7--1bfe35fd-7cb4-4996-bb9b-5af1a81a71e4.lovable.app-1784207304675.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Caveat:wght@500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
