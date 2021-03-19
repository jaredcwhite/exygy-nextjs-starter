import Head from "next/head"

export default function ListingRedirect(props: any) {
  return (
    <Head>
      <meta httpEquiv="refresh" content={`0; url=${props.to}`} />
    </Head>
  );
}

export async function getServerSideProps(context: any) {
  const listingIds = [{id: "100", slug: "first"}, {id: "200", slug: "second"}] // from API
  const slug = listingIds.find(item => item.id == context.params.id)?.slug

  return { props: { to: "/static-listings/" + context.params.id + "/" + slug } } 
}
