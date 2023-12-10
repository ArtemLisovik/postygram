
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import { TeamSection } from "sections"


export const TeamPage = () => {
  const {t} = useTranslation()
  return (
    <>
    <Helmet>
        <title>Ellipse Crypto Team</title>
      </Helmet>
    <PrimaryLayout>
    <TeamSection/>
    </PrimaryLayout>
    </>
  )
}
