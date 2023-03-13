import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";

import { Inter, Lexend_Deca } from "next/font/google";

const lexend = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${lexend.variable}  `}>
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
