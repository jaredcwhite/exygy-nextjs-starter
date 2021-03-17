import "../styles/index.css"
import { useEffect, useMemo, useState } from "react"
import { AppSubmissionContext, MyObj } from "../lib/AppSubmissionContext"
import type { AppProps  } from 'next/app'
import { addTranslation } from "../lib/translator"
import { translations, overrideTranslations } from "../src/translations"

function MyApp({ Component, router, pageProps }: AppProps) {
  const { locale } = router
  const [foobar] = useState({a: 1, b: 2})
  const myObj = useMemo(() => new MyObj(foobar), [foobar])

  useMemo(() => {
    addTranslation(translations.general, true)
    if (locale && locale != "en" && translations[locale]) {
      addTranslation(translations[locale])
      if (overrideTranslations[locale]) {
        addTranslation(overrideTranslations[locale])
      }
    }
  }, [locale])

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
        foobar: foobar,
        myObj: myObj
      }}
    >
      <Component {...pageProps} />
    </AppSubmissionContext.Provider>
  )
}

export default MyApp
