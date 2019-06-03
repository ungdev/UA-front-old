import React from 'react';
import Head from 'next/head';

const logo = 'static/assets/ua2019.nologo.png';

const Meta = props => {
  const title = props.title
    ? `${props.title} | ${process.env.REACT_APP_WEBSITE_SUBPAGE_NAME}`
    : process.env.REACT_APP_WEBSITE_NAME;
  const description = props.description
    ? props.description
    : process.env.REACT_APP_WEBSITE_DESCRIPTION;
  const canonical = props.url
    ? process.env.REACT_APP_CANONICAL_URL + props.url
    : process.env.REACT_APP_CANONICAL_URL;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={logo} />

      <link rel="canonical" href={canonical} />
    </Head>
  );
};

export default Meta;
