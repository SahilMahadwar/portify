import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";

import { Inter } from "next/font/google";
import PageLayout from "../layout/page-layout/page-layout";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${inter.variable}  `}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </div>
  );
};

export default api.withTRPC(MyApp);
