import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SocialShare from '../components/SocialShare';
import { getData } from '../lib/data';

export default function About({ about }) {
  const { locale } = useRouter();
  return (
    <Layout>
      <div className="prose max-w-none hindi">
        <h1>About IUML</h1>
        <p>{locale === 'hi' ? about.content_hi : about.content_en}</p>
        <SocialShare url="https://iuml-website.vercel.app/about" title="About IUML" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const data = await getData();
  return {
    props: {
      about: data.about,
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}