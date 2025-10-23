import Layout from '../../components/Layout';
export default function Event({ event }) { return <Layout>{event?.name || 'Event'}</Layout>; }
export async function getStaticPaths() { return { paths: [], fallback: false }; }
export async function getStaticProps({ params, locale }) {
  return { props: { event: {}, messages: (await import(`../../messages/${locale}.json`)).default } };
}