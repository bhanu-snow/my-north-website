import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SocialShare from '../components/SocialShare';
import { getData } from '../lib/data';

export default function FAQs({ faqs }) {
  const { locale } = useRouter();
  return (
    <Layout>
      <div className="prose max-w-none hindi">
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq) => (
          <div key={faq.guid} className="mb-4">
            <h3>{locale === 'hi' ? faq.question_hi : faq.question_en}</h3>
            <p>{locale === 'hi' ? faq.answer_hi : faq.answer_en}</p>
          </div>
        ))}
        <SocialShare url="https://iuml-website.vercel.app/faqs" title="IUML FAQs" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const data = await getData();
  return {
    props: {
      faqs: data.faqs,
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}