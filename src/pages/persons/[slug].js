import Layout from '../../components/Layout';
export default function Person({ person }) { return <Layout>{person?.name || 'Person'}</Layout>; }
export async function getStaticPaths() { return { paths: [], fallback: false }; }
export async function getStaticProps({ params, locale }) {
  return { props: { person: {}, messages: (await import(`../../messages/${locale}.json`)).default } };
}