
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import { Blog } from "sections"

export const BlogPage = () => {

  const {t} = useTranslation()

  return (
    <>
    <Helmet>
        <title>Ellipse Crypto useful information</title>
      </Helmet>
    <PrimaryLayout>
    <Blog/>
    </PrimaryLayout>
    </>
  )
}
