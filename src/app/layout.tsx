import "swiper/css/bundle";
import "../style/sass/style.scss";
import AOSInitializer from "@/components/common/AOSInitializer";
import { Noto_Sans } from "next/font/google";
import ScrollToTop from "@/components/common/ScrollToTop";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--text-font",
  display: "swap",
});

export const metadata = {
  title: "Torkfolio – Your Ultimate Personal Portfolio and Resume Template",
  description:
    "Torkfolio is a professional and modern HTML template designed for personal portfolios, resumes, and creative professionals. Showcase your experiences, projects, and achievements with a sleek, SEO-optimized layout that ensures maximum visibility.",
  applicationName:
    "Torkfolio – Your Ultimate Personal Portfolio and Resume Template",
  authors: [{ name: "thetork" }],
  keywords: [
    "Torkfolio",
    "personal portfolio",
    "resume template",
    "HTML portfolio template",
    "portfolio for designers",
    "SEO friendly portfolio",
  ],
  openGraph: {
    title: "Torkfolio – Your Ultimate Personal Portfolio and Resume Template",
    siteName: "Torkfolio",
    url: "https://thetork.com/demos/html/torkfolio/",
    description:
      "Welcome to Torkfolio Showcase your talents with a sleek, modern HTML template designed for creative professionals. Create an impressive, SEO-friendly portfolio effortlessly!",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        alt: "Torkfolio OG Image",
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
    <html lang="en" className={notoSans.className}>
      <body
        cz-shortcut-listen="true"
        data-bs-theme="dark"
        className={`${notoSans.variable}`}
      >
        <AOSInitializer>{children}</AOSInitializer>
        <ScrollToTop />
      </body>
    </html>
  );
}
