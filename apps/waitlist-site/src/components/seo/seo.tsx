import Head from 'next/head';

/* eslint-disable-next-line */
export interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export function Seo(props: SeoProps) {
  const { title, description, keywords } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Head>
  );
}

export default Seo;
