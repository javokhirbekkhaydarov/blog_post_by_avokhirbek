import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-msono",
  weight: "100 900",
});
const nunito = localFont({
  src: "./fonts/Nunito-Medium.ttf",
  variable: "--font-nunito",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blog website for fine real estate llc",
  description:
    "Fine Home Company was primarily founded and established in 2004, to become one of the best and well distinguished Real Estate companies in United Arabs Emirates, specifically in Abu Dhabi Emirate",
  openGraph: {
    title: "Blog website",
    description:
      "Fine Home Company was primarily founded and established in 2004, to become one of the best and well distinguished Real Estate companies in United Arabs Emirates, specifically in Abu Dhabi Emirate",
    images: [
      {
        url: "https://lh3.googleusercontent.com/p/AF1QipNgRTxbaTI8_GHY09CTiyRIj42XcZhCRIKSW2Ed=s680-w680-h510",
        alt: "A preview of the video call platform",
        width: 1200,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
