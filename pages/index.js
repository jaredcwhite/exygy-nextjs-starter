import Layout from '../layouts/application';
import Link from 'next/link';

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
    <ul>
      <li>
        <Link href="listings/[id]" as={`/listings/5`}>
          <a>Some Listing</a>
        </Link>
      </li>
    </ul>
  </Layout>
);

export default Index;
