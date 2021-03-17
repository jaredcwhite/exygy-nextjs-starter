import Link from "next/link"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()

  return (
    <header>
      <nav>
        <Link href="/">
          <a style={{fontSize: "1.5rem", fontWeight: "900"}}>Next.js Demo</a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            Langs: &nbsp;
            <Link href={router.asPath} locale={false}>
              <a>English</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href={`/zh${router.asPath}`} locale={false}>
              <a>Chinese</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
