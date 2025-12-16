import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Next.js Learning App",
    template: "%s | Next.js Learning App",
  },
  keywords: ['Next.js', 'React', 'JavaScript', 'Web Development', 'Blog', 'Meals', 'Posts', 'Next.js Basics', 'Next.js Tutorial', 'Next.js App', 'Next.js Framework', 'Next.js Learning'],
  description: "A simple Next.js app to learn the basics of Next.js framework.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main className=" w-11/12 mx-auto ">{children}</main>
        <footer className=" mx-auto text-center my-12">
          {" "}
          Copyright &copy; {new Date().getFullYear()}{" "}
        </footer>
      </body>
    </html>
  );
}
