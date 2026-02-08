"use client"
import Head from 'next/head';
import { NextSeo, NextSeoProps } from 'next-seo';

interface MetaTagsProps extends NextSeoProps {
  structuredData?: object;
}

const MetaTags: React.FC<MetaTagsProps> = ({ structuredData, ...seoProps }) => {
  return (
    <>
      <NextSeo {...seoProps} />
      {structuredData && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </Head>
      )}
    </>
  );
};

export default MetaTags;