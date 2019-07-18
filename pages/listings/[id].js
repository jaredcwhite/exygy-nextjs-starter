import { useRouter } from 'next/router';
import Layout from '../../layouts/application.js';

export default function Listing() {
  const router = useRouter();

  return (
    <Layout>
      <h1 className="title">Listing Id: {router.query.id}</h1>
      <p>This is the listing content.</p>
    </Layout>
  );
}