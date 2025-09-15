import "./css/style.css";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  const lang = pathname.startsWith("/ru") ? "ru" : "en";

  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={`${inter.variable} font-inter tracking-tight text-gray-900 antialiased`}
        style={{ isolation: "isolate" }}
      >
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
