import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SocialShare from '../components/SocialShare';
import { getData } from '../lib/data';

export default function Home({ mission, vision }) {
  const { locale } = useRouter();
  return (
    <Layout>
      <div className="prose max-w-none hindi">
        <h1>Welcome to IUML</h1>
        <section>
          <h2>Mission</h2>
          <p>{locale === 'hi' ? mission.content_hi : mission.content_en}</p>
        </section>
        <section>
          <h2>Vision</h2>
          <p>{locale === 'hi' ? vision.content_hi : vision.content_en}</p>
        </section>
        <SocialShare url="https://iuml-website.vercel.app" title="IUML Home" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const data = await getData();
  return {
    props: {
      mission: data.mission,
      vision: data.vision,
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}