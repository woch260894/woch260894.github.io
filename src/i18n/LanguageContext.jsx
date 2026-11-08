import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  CONTACT_TOPICS,
  ELEVATOR_LINKS,
  EMAIL,
  INSIGHTS,
  JC_URL,
  NAV_LINKS,
  PHONE,
  PHONE_HREF,
  PROFILE_IMG,
  PROJECTS,
  STAR_CASES,
  STATS,
  TIMELINE,
  TRIALS,
  TYPEWRITER_PHRASES,
  UI,
} from '../data/content'
import { en } from '../data/en'

const LanguageContext = createContext(null)

const zh = {
  navLinks: NAV_LINKS,
  elevatorLinks: ELEVATOR_LINKS,
  phrases: TYPEWRITER_PHRASES,
  stats: STATS,
  timeline: TIMELINE,
  projects: PROJECTS,
  starCases: STAR_CASES,
  insights: INSIGHTS,
  topics: CONTACT_TOPICS,
  trials: TRIALS,
  ui: UI,
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => (localStorage.getItem('site-lang') === 'en' ? 'en' : 'zh'))

  useEffect(() => {
    localStorage.setItem('site-lang', lang)
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN'
    document.title = (lang === 'en' ? en : zh).ui.pageTitle
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      copy: lang === 'en' ? en : zh,
      email: EMAIL,
      phone: PHONE,
      phoneHref: PHONE_HREF,
      jcUrl: JC_URL,
      profile: PROFILE_IMG,
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLocale() {
  return useContext(LanguageContext)
}
