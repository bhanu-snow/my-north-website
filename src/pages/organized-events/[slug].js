import Layout from '../../components/Layout';
export default function OrganisedEvent({ org_event }) { return <Layout>{org_event?.name || 'Event'}</Layout>; }
export async function getStaticPaths() { return { paths: [], fallback: false }; }
export async function getStaticProps({ params, locale }) {
  return { props: { org_event: {}, messages: (await import(`../../messages/${locale}.json`)).default } };
}