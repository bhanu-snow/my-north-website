import Layout from '../components/Layout';
  import { getServerData } from '../lib/server-data';

  export default function About({ about }) {
    return (
      <Layout>
        <div className="prose max-w-none hindi">
          <h1>About</h1>
          <section>
            <h3>English</h3>
            <p>{about.content_en}</p>
            <h3>Hindi</h3>
            <p>{about.content_hi}</p>
          </section>
        </div>
      </Layout>
    );
  }

  export async function getStaticProps() {
    const data = await getServerData();
    return {
      props: {
        about: data.about
      }
    };
  }