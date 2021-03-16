import enT from "../src/locales/general.json"
import zhT from "../src/locales/zh.json"

import zhTx from "../src/locales/zh_extras.json"

export const translations = {
  general: enT,
  zh: zhT
} as Record<string, any>

export const overrideTranslations = {
  zh: zhTx
} as Record<string, any>
