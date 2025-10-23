import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SocialShare from '../components/SocialShare';
import { getServerData } from '../lib/server-data';

export default function Home({ mission, vision }) {
  const { locale } = useRouter();
  const t = useTranslations('common');

  return (
    <Layout>
      <div className="prose max-w-none hindi">
        <h1>{t('home.title')}</h1>

        <section>
          <h2>{t('home.mission')}</h2>
          <p>{locale === 'hi' ? mission.content_hi : mission.content_en}</p>
        </section>

        <section>
          <h2>{t('home.vision')}</h2>
          <p>{locale === 'hi' ? vision.content_hi : vision.content_en}</p>
        </section>

        <SocialShare
          url="https://my-north-website.vercel.app"
          title={t('home.title')}
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale = 'en' }) {
  const data = await getServerData();
  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    props: {
      locale,
      messages,
      mission: data.mission,
      vision: data.vision
    }
  };
}
