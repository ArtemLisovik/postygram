
import { About } from "sections/About/About"
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

export const AboutPage = () => {

  const {t} = useTranslation()

  return (
    <>
    <Helmet>
        <title>About Ellipse Crypto</title>
      </Helmet>
    <PrimaryLayout>
    <About/>
    </PrimaryLayout>
    </>
  )
}