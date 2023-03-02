import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";

import { Inter, Lexend_Deca } from "next/font/google";
import PageLayout from "../layout/page-layout/page-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lexend = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${lexend.variable}  `}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </div>
  );
};

export default api.withTRPC(MyApp);
