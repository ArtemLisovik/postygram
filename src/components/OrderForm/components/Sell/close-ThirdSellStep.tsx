import React from "react";
import { useOrderContext } from "../../context/OrderContext";
import { Button } from "components/ui";
import { useFormContext } from "react-hook-form";
import { useLocation } from "react-router-dom";

export const ThirdSellStep = () => {
    const location = useLocation();
    const {
        formState: { isValid },
    } = useFormContext();
    const { handleNext } = useOrderContext();
    const walet = React.useRef<null | HTMLParagraphElement>(null);

    return (
        <div className="w-full flex flex-col gap-4 text-center">
            <h1>
                Отправте
                <span className="pl-2">{`${location.state.data.send} ${location.state.send.label}`}</span>{" "}
                на указаную карту
            </h1>
            <div className="bg-gray-300 p-6 rounded flex flex-col items-center gap-4">
                <p>Номер Карты:</p>
                <div className="w-full flex justify-between">
                    <p ref={walet}>0000 0000 0000 0000</p>
                    <div
                        onClick={() =>
                            navigator.clipboard.writeText(
                                walet.current?.innerHTML!
                            )
                        }
                        className=" cursor-pointer hover:scale-105 duration-300"
                    >
                        Copie
                    </div>
                </div>
            </div>
            <a href="https://t.me/ellipse_crypto_news">
                <Button text="Оплатил" />
            </a>
        </div>
    );
};
