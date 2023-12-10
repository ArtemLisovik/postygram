import { Button } from "components/ui";
import { useFormContext } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useOrderContext } from "../../context/OrderContext";
import { ButtonAnim } from "ui/Button/ButtonAnim";
import { t } from "i18next";

export const SecondBuyStep = () => {
    const location = useLocation();
    const { watch } = useFormContext();
    const { handleNext } = useOrderContext();

    const orderID = location.pathname.split("/")[2];
    const card: string = watch().cardNumber;
    const editCard = `${card.substring(0, 4)} **** **** ${card.substring(
        card.length - 4,
        card.length
    )}`;
    return (
        <div className="w-full flex flex-col gap-4 text-center">
            <h1>{t('main.pages.orderPage.buy.secondStep.title')}</h1>
            <p>{t('main.pages.orderPage.buy.secondStep.paragraph1')}</p>
            <div className=" p-6 rounded">
                <div className="mb-2 pb-2 text-left">
                    <p className="">
                        <span className=" text-sm text-gray-500 mr-2">
                        {t('main.pages.orderPage.buy.secondStep.id')}
                        </span>
                        <span>{orderID}</span>
                    </p>
                    <p>
                        <span className=" text-sm text-gray-500 mr-2">
                        {t('main.pages.orderPage.buy.secondStep.wallet')}
                        </span>
                        <span>{editCard}</span>
                    </p>
                </div>
                <div className="my-4 border-b border-dashed border-gray-600"></div>
                <div className="mb-2 pb-2 text-left grid gap-4">
                    <p className="flex justify-between">
                        <span className=" text-sm text-gray-500 mr-2">
                        {t('main.pages.orderPage.buy.secondStep.send')}
                        </span>
                        <span className=" font-bold">{`${location.state.data.send} ${location.state.send.label}`}</span>
                    </p>
                    <p className="flex justify-between">
                        <span className=" text-sm text-gray-500 mr-2">
                        {t('main.pages.orderPage.buy.secondStep.recieve')}
                        </span>
                        <span className=" text-lg text-green-500 font-bold">{`${Number(
                            location.state.data.get
                        ).toFixed(2)} ${location.state.get.label}`}</span>
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <Button  text={t('main.pages.orderPage.buy.secondStep.button')} onClick={handleNext} />
            </div>
            {/* <div className="w-full">
                <ButtonAnim
                    isLoading={true}
                    text="Оплатить"
                    onClick={handleNext}
                />
            </div> */}
            {/* <Button onClick={handleNext} text="Оплатить" /> */}
        </div>
    );
};
