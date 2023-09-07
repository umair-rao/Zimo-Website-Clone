import "@styles/homepage.css";
import { Lato } from "next/font/google";

const lato = Lato({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: "Zimo Group",
  description: "Bringing the world closer together.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="main"></div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
