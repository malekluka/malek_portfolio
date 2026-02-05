import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Malek Khaled · Full-Stack Developer"
        description="An online portfolio featuring a showcase of my projects and expertise as a Full-Stack Developer specializing in React, Next.js, Node.js, and PostgreSQL. Building modern, scalable web applications with clean code and intuitive design."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
