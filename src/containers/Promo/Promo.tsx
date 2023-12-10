import { useEffect } from "react";
import { H2, H3, LinkButton } from "ui";

import "./Promo.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { textAnimation } from "config/animation";
import { Calculator } from "components";

export const Promo = () => {
  const { t } = useTranslation();

  const isIPhone = /iPhone/i.test(navigator.userAgent);

  useEffect(() => {
    if (isIPhone) {
      document.querySelector(".calculator")?.classList.add("ios");
    }
  }, []);

  return (
    <section className="promo" id="calculator">
      <div className="promo__container container">
        <div className="promo__title">
          <H2>{t("main.pages.home.promo.title")}</H2>
          <H3>{t("main.pages.home.promo.text")}</H3>
          <LinkButton to="">{t("main.pages.home.promo.button")}</LinkButton>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
          variants={textAnimation}
          className="promo__calculator calculator"
        >
          {/* <div 
                     className="calculator__wrapper">
                    </div> */}
          <Calculator />
        </motion.div>
      </div>
    </section>
  );
};
