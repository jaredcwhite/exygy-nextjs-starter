import "../styles/index.css"
//import App from "next/app"
import { useEffect, useState } from "react"
import { AppSubmissionContext } from "../lib/AppSubmissionContext"

import type { AppProps /*, AppContext */ } from 'next/app'
import { addTranslation } from "../lib/translator"

import { translations, overrideTranslations } from "../src/translations"

function MyApp({ Component, router, pageProps }: AppProps) {
  const [foobar] = useState({a: 1, b: 2})
//  const router = useRouter()

  const locale = router.locale

  addTranslation(translations.general)
  if (locale && locale != "en" && translations[locale]) {
    addTranslation(translations[locale])
    if (overrideTranslations[locale]) {
      addTranslation(overrideTranslations[locale])
    }
  }

  useEffect(() => {
    if (!document.body.dataset.customScriptsLoaded) {
      router.events.on("routeChangeComplete", () => {
        console.info("route change !!!")
      })

      const bodyTopTagTmpl = document.createElement("template")
      bodyTopTagTmpl.innerHTML = "<p>-</p>"
      if (bodyTopTagTmpl.innerHTML !== "") {
        document.body.prepend(bodyTopTagTmpl.content.cloneNode(true))
      }

      document.body.dataset.customScriptsLoaded = "true"
    }
  })

  return (
    <AppSubmissionContext.Provider
      value={{
        foobar: foobar
      }}
    >
      <Component {...pageProps} />
    </AppSubmissionContext.Provider>
  )
}

export default MyApp
