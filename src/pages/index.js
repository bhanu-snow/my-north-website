import Layout from '../components/Layout';
import SocialShare from '../components/SocialShare';
import { getServerData } from '../lib/server-data';

export default function Home({ mission, vision }) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-8 space-y-8" data-testid="main-content">
        <h1 className="text-4xl font-bold text-primary debug" data-testid="title">
          Welcome to IUML
        </h1>
        <section className="bg-gray-100 p-6 rounded-lg debug" data-testid="mission-section">
          <h2 className="text-3xl font-semibold text-primary mb-4 debug" data-testid="mission-heading">
            Mission
          </h2>
          <div className="space-y-4">
            <div className="debug">
              <h3 className="text-xl font-medium text-gray-800 mb-2" data-testid="en-heading">English</h3>
              <p className="text-gray-700 leading-relaxed" data-testid="en-content">{mission.content_en}</p>
            </div>
            <div className="debug">
              <h3 className="text-xl font-medium text-gray-800 mb-2" data-testid="hi-heading">Hindi</h3>
              <p className="text-gray-700 leading-relaxed font-hindi" data-testid="hi-content">{mission.content_hi}</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 p-6 rounded-lg debug" data-testid="vision-section">
          <h2 className="text-3xl font-semibold text-primary mb-4 debug" data-testid="vision-heading">
            Vision
          </h2>
          <div className="space-y-4">
            <div className="debug">
              <h3 className="text-xl font-medium text-gray-800 mb-2" data-testid="en-heading">English</h3>
              <p className="text-gray-700 leading-relaxed" data-testid="en-content">{vision.content_en}</p>
            </div>
            <div className="debug">
              <h3 className="text-xl font-medium text-gray-800 mb-2" data-testid="hi-heading">Hindi</h3>
              <p className="text-gray-700 leading-relaxed font-hindi" data-testid="hi-content">{vision.content_hi}</p>
            </div>
          </div>
        </section>
        <div className="text-center debug" data-testid="social-share">
          <SocialShare
            url="https://my-north-website.vercel.app"
            title="Welcome to IUML"
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getServerData();
  return {
    props: {
      mission: data.mission,
      vision: data.vision
    }
  };
}

