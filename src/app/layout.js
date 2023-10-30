import "animate.css";
import "./globals.css";
import { Poppins } from "next/font/google";
import NavbarComponent from "@/components/Navbar/Navbar";
import FooterComponent from "@/components/Footer/Footer";

const inter = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "GYM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col justify-between min-h-screen`}
      >
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
