import { t } from "i18next";
import { useOrderContext } from "../../context/OrderContext";
import { Button, Input } from "components/ui";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ButtonAnim } from "ui/Button/ButtonAnim";

export const FirstBuyStep = () => {
    const navigate = useNavigate()
    const {
        formState: { isValid },
    } = useFormContext();
    const { handleNext } = useOrderContext();

    const cardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const number = event;
    };

    return (
        <div className="w-full flex flex-col text-center ">
            <h1 className="mb-4">{t('main.pages.orderPage.buy.firstStep.title')}</h1>
            <p className="mb-4">
            {t('main.pages.orderPage.buy.firstStep.paragraph1')}
            </p>
            <Input
                variant="second"
                label={t('main.pages.orderPage.buy.firstStep.cardNumber') as string}
                placeholder="XXXX XXXX XXXX XXXX"
                name="cardNumber"
                // onChange={cardNumberChange}
            />
            <div className="w-full mb-6">
                <ButtonAnim
                    disabled={!isValid}
                    isLoading={isValid}
                    text={t('main.pages.orderPage.buy.firstStep.buttonAccept')}
                    onClick={handleNext}
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
            {/* <Button
                onClick={handleNext}
                disabled={!isValid}
                text="Продолжить"
            /> */}

            <div className="w-full flex justify-center">
                <Button variant="third" text={t('main.pages.orderPage.buy.firstStep.buttonCancel')} onClick={() => navigate('/')} />
            </div>
        </div>
    );
};
