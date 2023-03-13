import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";

import { Inter, Lexend_Deca } from "next/font/google";

const lexend = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${lexend.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
