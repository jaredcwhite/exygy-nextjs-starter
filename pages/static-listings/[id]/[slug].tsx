import Head from "next/head"
import { useRouter } from "next/router"
import Layout from "../../../layouts/application.js"
import t from "../../../lib/translator"
import { Listing } from "../../../components/Listings"

export default function StaticListing(props: any) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Static Listing {router.query.id}</title>
      </Head>

      <h1>Static Listing Id: {router.query.id}</h1>
      <p>This is the listing content. {props.data}</p>

      <p>{t("testing.key")}</p>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths(context: any) {
  const listingIds = [{id: "100", slug: "first"}, {id: "200", slug: "second"}] // from API

  return {
    paths: 
      context.locales.flatMap((locale: any) => (
        listingIds.map(id => ({ params: { id: id.id, slug: id.slug }, locale: locale }))
      )),
    fallback: false,
  }
}

export async function getStaticProps(context: any) {
  let listings: Listing[] = []
  listings.push({id: 100, name: "First Listing!"})
  listings.push({id: 200, name: "Second Listing"})

  return { props: { data: listings.find((listing) => listing.id == context.params.id)?.name || "Cannot be found." } }
}
