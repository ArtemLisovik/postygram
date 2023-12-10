import { Button } from "components/ui";
import { useFormContext } from "react-hook-form";
import { redirect, useLocation } from "react-router-dom";
import { useOrderContext } from "../../context/OrderContext";
import { sendMessageTelegram } from "../../helpers/sendMessageTelegram";
import { useRef } from "react";
import { ButtonAnim } from "ui/Button/ButtonAnim";
import { t } from "i18next";

export const SecondSellStep = () => {
    const ahrefRef = useRef<HTMLAnchorElement | null>(null);
    const location = useLocation(); 
    console.log(location);
    const { watch } = useFormContext();
    // const { handleNext } = useOrderContext();

    const orderID = location.pathname.split("/")[2];
    const walet: string = watch().waletNumber;

    let message = `<b>====================</b>\n\n`;
    message += `<b>Номер Ордера: ${orderID}</b>\n\n`;
    message += `<b>Номер кошелька: ${walet}</b>\n\n`;
    message += `<b>Отправляет: ${location.state.data.send} UAH</b>\n\n`;
    message += `<b>Получает: ${location.state.data.get} ${location.state.get.label}</b>\n\n`;
    message += `<b>====================</b>\n\n`;

    const sendOreder = async () => {
        sendMessageTelegram(message);
        await new Promise((resolve) => setTimeout(resolve, 500));
        ahrefRef.current?.click();
    };

    return (
        <div className="w-full flex flex-col gap-4 text-center">
            <h1>{t('main.pages.orderPage.sell.secondStep.title')}</h1>
            <p>{t('main.pages.orderPage.sell.secondStep.paragraph1')}.</p>
            <div className=" p-6 rounded">
                <div className="mb-2 pb-2 text-left">
                    <p className="">
                        <span className=" text-sm text-gray-500 mr-2">
                        {t('main.pages.orderPage.sell.secondStep.id')}
                        </span>
                        <span>{orderID}</span>
                    </p>
                    <p>
                        <span className=" text-sm text-gray-500 mr-2">
                        {t('main.pages.orderPage.sell.secondStep.wallet')}
                        </span>
                        <span>{walet}</span>
                    </p>
                </div>
                <div className="my-4 border-b border-dashed border-gray-600"></div>
                <div className="mb-2 pb-2 text-left grid gap-4">
                    <p className="flex justify-between">
                        <span className=" text-sm text-gray-500 mr-2">
                        {t('main.pages.orderPage.sell.secondStep.send')}
                        </span>
                        <span className=" font-bold">{`${location.state.data.send} ${location.state.send.label}`}</span>
                    </p>
                    <p className="flex justify-between">
                        <span className=" text-sm text-gray-500 mr-2">
                        {t('main.pages.orderPage.sell.secondStep.recieve')}
                        </span>
                        <span className=" text-lg text-green-500 font-bold">{`${Number(
                            location.state.data.get
                        ).toFixed(2)} ${location.state.get.label}`}</span>
                    </p>
                </div>
            </div>
            {/* <div className="w-full">
                <ButtonAnim
                    isLoading={true}
                    text="Продолжить"
                    onClick={sendOreder}
                />
            </div> */}
            <div className="w-full flex justify-center">
                <Button  text="Continue" onClick={sendOreder} />
            </div>
            {/* <Button text="Оплатить" onClick={sendOreder} /> */}
            <a
                ref={ahrefRef}
                className="hidden"
                href="https://t.me/dimuccci"
            ></a>
        </div>
    );
};
