import { t } from "i18next";
import { useOrderContext } from "../../context/OrderContext";
import { Button, Input } from "components/ui";
import { useFormContext } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonAnim } from "ui/Button/ButtonAnim";

export const FirstSellStep = () => {
    const navigate = useNavigate()
    const {
        formState: { isValid },
    } = useFormContext();
    const { handleNext } = useOrderContext();

    return (
        <div className="w-full flex flex-col text-center">
            <h1 className="mb-4">{t('main.pages.orderPage.sell.firstStep.title')}</h1>
            <p className="mb-0.5">
                {t('main.pages.orderPage.sell.firstStep.paragraph1')}
                {/* <br />
                Убедитесь в правильности введенного адреса. */}
            </p>
            <p className="mb-4">
                {t('main.pages.orderPage.sell.firstStep.paragraph2')}
                {/* <br />
                Убедитесь в правильности введенного адреса. */}
            </p>
            <div className="w-full">
                <Input
                    variant="second"
                    label={t('main.pages.orderPage.sell.firstStep.wallet') as string}
                    placeholder="TWL1ipZjiABJGK68MS7m9uzszTZ4iH2p2D"
                    name="waletNumber"
                />
            </div>
            {/* <div className="mt-4 h-[60px] w-full">
                <div
                    className={`h-[60px] w-full scale-0 shadow-[#06D6A0]
                        ${
                            !isValid
                                ? "animate-exitButton forwards delay-500"
                                : "animate-revealButton forwards"
                        }`}
                >
                    <button
                        onClick={handleNext}
                        // disabled={!methods.formState.isValid}
                        className={`h-[60px] text-white bg-[#06D6A0] duration-500 ${
                            !isValid
                                ? " w-[60px] rounded-full "
                                : " w-full rounded-[32px] delay-500"
                        } `}
                    >
                        {!isValid ? "" : "Продолжить "}
                    </button>
                </div>
            </div> */}
            <div className="w-full mb-6">
                <ButtonAnim
                    isLoading={isValid}
                    text={t('main.pages.orderPage.sell.firstStep.buttonAccept')}
                    onClick={handleNext}
                />
            </div>
            <div className="w-full flex justify-center">
                <Button variant="third" text={t('main.pages.orderPage.sell.firstStep.buttonCancel')} onClick={() => navigate('/')} />
            </div>
        </div>
    );
};
