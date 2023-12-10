
import { Promo, Simplicity } from "containers"
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Reviews } from "containers/Reviews/components/Reviews"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import { LowPrice, Section1Layout } from "sections"
import { Security } from "sections/Security/Security"
import { Speed } from "sections/Speed/Speed"

export const MainPage = () => {
  const {t} = useTranslation()
  return (
    <>
    <Helmet>
        <title>Ellipse Crypto Exchange</title>
      </Helmet>
    <PrimaryLayout>
      <Promo/>
      <Simplicity/>
      <Security/>
      <Speed/>
      <LowPrice/>
      <Reviews/>
    </PrimaryLayout>
    </>
  )
}
