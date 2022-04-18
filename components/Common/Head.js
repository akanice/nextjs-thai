import Head from 'next/head';
// import { NextSeo } from 'next-seo';

const SEO = (props) => {
  let { setting } = props;
  return (
    <Head>
      <title>{props.title || setting?.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <meta property="og:title" content={props.title || setting?.title} key="title" />
      <meta charset="utf-8" />
      <link rel="canonical" href="" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:type" content="website" />
      <meta name="description" content="" />
      <meta property="og:title" content={setting?.title} />
      <meta property="og:description" content="" />
      <meta property="og:image" content={setting?.image} />
    </Head>
  );
};

export default SEO;
