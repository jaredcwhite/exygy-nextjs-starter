import Head from "next/head"
import { useContext } from "react"
import Layout from "../layouts/application"
import { AppSubmissionContext } from "../lib/AppSubmissionContext"
import t from "../lib/translator"

export default function About() {
  const blah = useContext(AppSubmissionContext)

  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>

      <h1>About {t("testing.key")}?</h1>
      <p>An About page! a: { blah.foobar.a } b: { blah.foobar.b }</p>
      <p>{t("testing.anotherKey")}</p>
    </Layout>
  )
}
