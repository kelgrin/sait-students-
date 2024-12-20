import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ backgroundColor: '#131313' }}>
        <header>
        <Link href="/">
          <img className="logo" src="/logo.png" />
          </Link>
        </header>

        {children}

        <footer>
          <p>© Dota 2. Все права защищены.</p>
          <p>
            Если у вас есть какие-либо вопросы, пожалуйста, свяжитесь с нами по адресу{" "}
            <a href="mailto:ZovGoidaRussiaNumberOne@yandex.ru">ZovGoidaRussiaNumberOne@yandex.ru</a>
          </p>
          <div className="socialIcons">
            <a href="#"><img src="/icon1.svg" alt="icon" /></a>
            <a href="#"><img src="/icon2.svg" alt="icon" /></a>
            <a href="#"><img src="/icon3.svg" alt="icon" /></a>
            <a href="#"><img src="/icon4.svg" alt="icon" /></a>
            <a href="#"><img src="/icon5.svg" alt="icon" /></a>
          </div>
        </footer>
      </body>
    </html>
  );
}