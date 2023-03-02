import { ReactElement } from "react";

import Navbar from "../../components/navbar/navbar";
import Seo from "../../components/seo/seo";

/* eslint-disable-next-line */
export interface PageLayoutProps {
  children?: ReactElement;
}

const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;

  return (
    <>
      <Seo title="eziSocial" description="manage your social media" />
      <Navbar />
      <main className="px-10">{children}</main>
    </>
  );
};

export default PageLayout;
