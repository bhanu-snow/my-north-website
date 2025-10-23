import Layout from '../components/Layout';
export default function Page() { return <Layout><h1>Page Title</h1></Layout>; }
export async function getStaticProps({ locale }) {
  return { props: { messages: (await import(`../messages/${locale}.json`)).default } };
}