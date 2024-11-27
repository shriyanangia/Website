import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { DarkModeProvider } from "./_context/DarkModeContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / My Website",
    default: "Welcome / My Website",
  },
  description: "Shriya Nangia' Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body
          className={`${josefin.className} antialiased bg-primary-50
          dark:bg-primary-950 text-primary-900 dark:text-primary-100 min-h-screen flex flex-col relative`}
        >
          <Header />
          <div className="flex-1 px-8 py-12 grid">
            <main className="max-w-7xl mx-auto w-full">{children}</main>
          </div>
        </body>
      </DarkModeProvider>
    </html>
  );
}
