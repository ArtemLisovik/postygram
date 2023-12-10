import { Button } from "components/ui";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { sendMessageTelegram } from "../../helpers/sendMessageTelegram";
import wallet1 from "../../assets/img/crypto/0x87ddb4c0f405294da9db7f80ac12d23d77d9c08a.png";
import wallet2 from "../../assets/img/crypto/1LZq8fAAiZudQ2Uj7339QC7KhMieoERxwZ.png";
import wallet3 from "../../assets/img/crypto/TA9pVV23rnm9hYcXsjKQvvm8n7Pv2UGPBQ.png";
import { ButtonAnim } from "ui/Button/ButtonAnim";
import { LinkButton } from "ui";
import { t } from "i18next";

const wallets: any = {
    BTC: {
        "": "1LZq8fAAiZudQ2Uj7339QC7KhMieoERxwZ",
    },
    USDT: {
        TRC20: "TA9pVV23rnm9hYcXsjKQvvm8n7Pv2UGPBQ",
        ERC20: "0x87ddb4c0f405294da9db7f80ac12d23d77d9c08a",
        BSC: "0x87ddb4c0f405294da9db7f80ac12d23d77d9c08a",
        MATIC: "0x87ddb4c0f405294da9db7f80ac12d23d77d9c08a",
    },
    ETH: {
        ERC20: "0x87ddb4c0f405294da9db7f80ac12d23d77d9c08a",
        "Arbitrum Nova": "0x87ddb4c0f405294da9db7f80ac12d23d77d9c08a",
        BTC: "0x87ddb4c0f405294da9db7f80ac12d23d77d9c08a",
    },
};

export const ThirdBuyStep = () => {
    const ahrefRef = useRef<HTMLAnchorElement | null>(null);
    const location = useLocation();
    const walet = React.useRef<null | HTMLParagraphElement>(null);

    const orderID = location.pathname.split("/")[2];
    let message = `<b>====================</b>\n\n`;
    message += `<b>Номер Ордера: ${orderID}</b>\n\n`;
    message += `<b>Номер кошелька: ${walet}</b>\n\n`;
    message += `<b>Отправляет: ${location.state.data.send} ${location.state.send.label}</b>\n\n`;
    message += `<b>Получает: ${location.state.data.get} UAH</b>\n\n`;
    message += `<b>====================</b>\n\n`;

    const sendOreder = async () => {
        sendMessageTelegram(message);
        await new Promise((resolve) => setTimeout(resolve, 500));
        ahrefRef.current?.click();
    };

    const showWallet = () => {
        switch (wallets[location.state.send.label][location.state.net]) {
            case "0x87ddb4c0f405294da9db7f80ac12d23d77d9c08a": {
                return wallet1;
            }
            case "1LZq8fAAiZudQ2Uj7339QC7KhMieoERxwZ": {
                return wallet2;
            }
            case "TA9pVV23rnm9hYcXsjKQvvm8n7Pv2UGPBQ": {
                return wallet3;
            }
        }
    };

    return (
        <div className="w-full flex flex-col gap-4 text-center">
            <h1>
            {t('main.pages.orderPage.buy.thirdStep.paragraph1')}
                <span className="pl-1 font-bold">{`${location.state.data.send} ${location.state.send.label}`}</span>{" "}
                {t('main.pages.orderPage.buy.thirdStep.paragraph2')}
            </h1>
            <div className="p-6 rounded flex flex-col items-center gap-4">
                <p> {t('main.pages.orderPage.buy.thirdStep.paragraph1')}</p>
                <img
                    className="h-24 w-24 rounded bg-white"
                    src={showWallet()}
                    alt="wallet"
                />
                <div className="w-full my-2 border-b border-gray-600 border-dashed"></div>
                <div className="w-full flex justify-between gap-[15px] items-center">
                    <p ref={walet} className="max-w-[300px] min-h-[30px] overflow-x-scroll">
                        {wallets[location.state.send.label][location.state.net]}
                    </p>
                    <LinkButton to="">Copy</LinkButton>
                    {/* <div
                        onClick={() =>
                            navigator.clipboard.writeText(
                                walet.current?.innerHTML!
                            )
                        }
                        className=" cursor-pointer hover:scale-105 duration-300"
                    >
                        Copy
                    </div> */}
                </div>
            </div>
            <div className="w-full flex justify-center">
                <Button variant="primary" text={t('main.pages.orderPage.buy.thirdStep.button')} onClick={sendOreder} />
            </div>
            {/* <div className="w-full">
                <ButtonAnim
                    isLoading={true}
                    text="Оплатил"
                    onClick={sendOreder}
                />
            </div> */}
            {/* <Button text="Оплатил" onClick={sendOreder} /> */}
            <a
                ref={ahrefRef}
                className="hidden"
                href="https://t.me/dimuccci"
            ></a>
        </div>
    );
};
