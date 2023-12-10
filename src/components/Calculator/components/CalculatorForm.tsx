import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import cx from "classnames";
import { Button, Input, Logo, Selector } from "components/ui";
import React from "react";
import { SelectOptions } from "../types/CalculatorTypes";
import { useNavigate } from "react-router";
import { v4 } from "uuid";
import { useGetCryptoRankQuery } from "../api/calculatorApi";
import { Crypto } from "../api/calculatorApi";
import ChangeArrow from "./ChangeArrow";
import btc from "assets/img/crypto/bitcoin.png";
import eth from "assets/img/crypto/eth.png";
import usdt from "assets/img/crypto/usdt.png";
import { ButtonAnim } from 'ui/Button/ButtonAnim'
import { t } from "i18next";

const cryptoIcons: { BTC: string; ETH: string; USDT: string } = {
    BTC: btc,
    ETH: eth,
    USDT: usdt,
};

type CalculatorFormValues = {
    send: string;
    get: string;
    net: string;
};

export const CalculatorForm = () => {
    const [mode, setMode] = React.useState<"money" | "crypto">("money");
    const [send, setSend] = React.useState<SelectOptions | undefined>();
    const [usdtNet, setUsdtNet] = React.useState<any | undefined>();
    const [ethNet, setEthNet] = React.useState<any | undefined>();
    const [get, setGet] = React.useState<SelectOptions | undefined>();
    const [swapButtonPosition, setSwapButtonPosition] =
        React.useState<boolean>(false);
    const [couseOption, setCouseOption] = React.useState<SelectOptions[]>([
        { label: "UAH", value: 40, type: "money" },
    ]);
    const [usdtNetOption, setUsdtNetOption] = React.useState<any[]>([
        { label: "TRC20", value: "TRC20", type: "net" },
        { label: "ERC20", value: "ERC20", type: "net" },
        { label: "BSC", value: "BSC", type: "net" },
        { label: "MATIC", value: "MATIC", type: "net" },
    ]);
    const [ethNetOption, setEthNetOption] = React.useState<any[]>([
        { label: "ERC20", value: "netOne", type: "net" },
        { label: "Arbitrum Nova", value: "Arbitrum Nova", type: "net" },
        { label: "BTC", value: "netThree", type: "net" },
    ]);
    const [cryptoOption, setCryptoOption] = React.useState<SelectOptions[]>([]);
    const [isLoading, setIsLoading] = React.useState({
        send: false,
        get: false,
        button: false,
    });
    const methods = useForm<CalculatorFormValues>({
        mode: "onChange",
        defaultValues: {
            send: "",
            get: "",
        },
    });
    const navigate = useNavigate();
    const { data: cryptos } = useGetCryptoRankQuery("");

    React.useEffect(() => {
        const getCurrentCrypto = () => {
            const options: SelectOptions[] = [];
            cryptos?.data.map((crypto: Crypto) => {
                const option: SelectOptions = {
                    label: crypto.symbol,
                    value: crypto.values.USD.price,
                    type: "crypto",
                    icon: cryptoIcons[
                        crypto.symbol as keyof typeof cryptoIcons
                    ],
                };
                options.push(option);
            });

            setCryptoOption(options);
            setGet(options[options.length - 1]);
        };

        getCurrentCrypto();
        setSend(couseOption[0]);
        setUsdtNet(usdtNetOption[0]);
        setEthNet(ethNetOption[0]);
    }, [cryptos]);

    const onChangeSend: React.ChangeEventHandler<HTMLInputElement> = async ({
        target: { value },
    }) => {
        methods.setValue("send", value);
        setIsLoading((prev) => ({
            ...prev,
            get: true,
            button: true,
        }));
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (mode === "money") {
            const currentUsd =
                Number(methods.watch().send) / couseOption[0].value;
            const reward = (currentUsd / get?.value!) * 0.97;
            methods.setValue("get", reward.toString(), {
                shouldValidate: true,
            });
        } else {
            const currentCrypto = Number(methods.watch().send);
            const reward = couseOption[0].value * currentCrypto * 0.97;
            methods.setValue("get", reward.toString(), {
                shouldValidate: true,
            });
        }
        setIsLoading((prev) => ({
            ...prev,
            get: false,
            button: false,
        }));
    };

    const changeMoney = async (value: SelectOptions) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (mode === "money") {
            if (value.label === send?.label) return;
        }
        if (mode === "crypto") {
            if (value.label === get?.label) return;
        }
    };

    const changeCrypto = async (value: SelectOptions) => {
        if (mode === "money") {
            if (value.label === get?.label) return;
        }
        if (mode === "crypto") {
            if (value.label === send?.label) return;
        }

        if (mode === "money" && get?.type === value.type) {
            setIsLoading((prev) => ({
                ...prev,
                get: true,
                button: true,
            }));
        }
        if (mode === "crypto" && send?.type === value.type) {
            setIsLoading((prev) => ({
                ...prev,
                send: true,
                button: true,
            }));
        }

        await new Promise((resolve) => setTimeout(resolve, 500));

        if (mode == "money") {
            setGet(value);
        } else if (mode === "crypto") {
            setSend(value);
        }
        methods.setValue("send", "");
        methods.setValue("get", "");

        if (mode === "money" && get?.type === value.type) {
            setIsLoading((prev) => ({
                ...prev,
                get: false,
                button: false,
            }));
        }
        if (mode === "crypto" && send?.type === value.type) {
            setIsLoading((prev) => ({
                ...prev,
                send: false,
                button: false,
            }));
        }

        // setIsLoading((prev) => ({
        //     ...prev,
        //     get: false,
        //     button: false,
        // }));
    };

    const changeNet = async (value: any) => {
        if (mode === "money") {
            if (get?.label === "USDT") {
                if (usdtNet === value) return;
                setUsdtNet(value);
            }
            if (get?.label === "ETH") {
                if (ethNet === value) return;
                setEthNet(value);
            }
        }

        if (mode === "crypto") {
            if (send?.label === "USDT") {
                if (usdtNet === value) return;
                setUsdtNet(value);
            }
            if (send?.label === "ETH") {
                if (ethNet === value) return;
                setEthNet(value);
            }
        }
    };

    // const handleSend = async (value: SelectOptions) => {
    //     if (value.label === send?.label) return;

    //     if (get?.label === value.label) {
    //         setIsLoading((prev) => ({
    //             ...prev,
    //             get: true,
    //             button: true,
    //         }));
    //         await new Promise((resolve) => setTimeout(resolve, 500));
    //         methods.setValue("send", "");
    //         methods.setValue("get", "");
    //         setGet(send);
    //         setSend(value);
    //         setIsLoading((prev) => ({
    //             ...prev,
    //             get: false,
    //             button: false,
    //         }));
    //     } else {
    //         setIsLoading((prev) => ({
    //             ...prev,
    //             get: true,
    //             button: true,
    //         }));
    //         await new Promise((resolve) => setTimeout(resolve, 500));
    //         methods.setValue("send", "");
    //         methods.setValue("get", "");
    //         setSend(value);
    //         setIsLoading((prev) => ({
    //             ...prev,
    //             get: false,
    //             button: false,
    //         }));
    //     }
    // };
    // const handleGet = async (value: SelectOptions) => {
    //     if (value.label === get?.label) return;

    //     if (send?.label === value.label) {
    //         setIsLoading((prev) => ({
    //             ...prev,
    //             send: true,
    //             button: true,
    //         }));
    //         await new Promise((resolve) => setTimeout(resolve, 500));
    //         methods.setValue("send", "");
    //         methods.setValue("get", "");
    //         setSend(get);
    //         setGet(value);
    //         setIsLoading((prev) => ({
    //             ...prev,
    //             send: false,
    //             button: false,
    //         }));
    //     } else {
    //         setIsLoading((prev) => ({
    //             ...prev,
    //             send: true,
    //             button: true,
    //         }));
    //         await new Promise((resolve) => setTimeout(resolve, 500));
    //         methods.setValue("send", "");
    //         methods.setValue("get", "");
    //         setGet(value);
    //         setIsLoading((prev) => ({
    //             ...prev,
    //             send: false,
    //             button: false,
    //         }));
    //     }

    //     setIsLoading((prev) => ({
    //         ...prev,
    //         send: true,
    //         button: true,
    //     }));
    //     await new Promise((resolve) => setTimeout(resolve, 500));
    //     setGet(value);
    //     setIsLoading((prev) => ({
    //         ...prev,
    //         send: false,
    //         button: false,
    //     }));
    // };

    const handleSubmit: SubmitHandler<CalculatorFormValues> = (data) => {
        let net = "";
        if (mode === "money") {
            if (get?.label === "USDT") {
                net = usdtNet.label;
            }
            if (get?.label === "ETH") {
                net = ethNet.label;
            }
            if (get?.label === "BTC") {
                net = "";
            }
        }
        if (mode === "crypto") {
            if (send?.label === "USDT") {
                net = usdtNet.label;
            }
            if (send?.label === "ETH") {
                net = ethNet.label;
            }
            if (send?.label === "BTC") {
                net = "";
            }
        }

        navigate(`order/${v4()}`, {
            // replace: true,
            state: {
                send,
                get,
                data,
                net,
            },
        });
        methods.reset();
    };

    const handleMode = async () => {
        setSwapButtonPosition((prev) => !prev);
        setIsLoading(() => ({
            send: true,
            get: true,
            button: true,
        }));
        await new Promise((resolve) => setTimeout(resolve, 500));
        setMode(mode === "money" ? "crypto" : "money");

        const tempSelector = send;
        const tempInput = methods.watch().send;

        setSend(get);
        setGet(tempSelector);
        methods.setValue("send", "");
        methods.setValue("get", "");

        // methods.setValue("send", methods.watch().get);
        // if (mode === "money") {
        // } else {
        //     const currentUsd = Number(tempInput) / couseOption[0].value;
        //     const ourPercentage = currentUsd / (36 * 0.03);
        //     const price = String(ourPercentage - currentUsd / 36);
        //     methods.setValue("get", price, {
        //         shouldValidate: true,
        //     });
        // }

        setIsLoading(() => ({
            send: false,
            get: false,
            button: false,
        }));
    };

    const swapButtonStyles = cx(
        { "rotate-180": swapButtonPosition },
        { "rotate-0": !swapButtonPosition },
        "changeArrow duration-700"
    );

    return (
        <FormProvider {...methods}>
            <form
                className="space-y-3"
                onSubmit={methods.handleSubmit(handleSubmit)}
            >
                <div
                    className={`flex justify-between max-md:flex-col w-full ${
                        mode ? "order-1" : "order-2"
                    }`}
                >
                    <div
                        className={`relative md:w-[40%] space-y-4 flex flex-col justify-between  ${
                            isLoading.send ? "opacity-30" : ""
                        }`}
                    >
                        <h3 className="text-white mb-8">{t('main.pages.home.calculator.send')}</h3>
                        <div className="flex-auto space-y-4">
                            <Selector
                                options={
                                    mode === "money"
                                        ? couseOption
                                        : cryptoOption
                                }
                                value={send}
                                onChange={
                                    mode === "money"
                                        ? changeMoney
                                        : changeCrypto
                                }
                            />
                            {mode === "crypto" && send?.label !== "BTC" ? (
                                <Selector
                                    options={
                                        send?.label === "USDT"
                                            ? usdtNetOption
                                            : ethNetOption
                                    }
                                    value={
                                        send?.label === "USDT"
                                            ? usdtNet
                                            : ethNet
                                    }
                                    onChange={changeNet}
                                />
                            ) : null}
                        </div>
                        <Input
                            name="send"
                            type="number"
                            onChange={onChangeSend}
                            className={"py-1 px-3 rounded-lg"}
                        />
                        {isLoading.send && <LoadingInput />}
                    </div>

                    <ChangeArrow
                        onClick={handleMode}
                        className={swapButtonStyles}
                    />

                    <div
                        className={`relative md:w-[40%] space-y-4 flex flex-col justify-between
                        ${mode ? "order-2" : "order-1"}
                        ${isLoading.get ? "opacity-30" : ""}`}
                    >
                        <h3 className="text-white mb-8">{t('main.pages.home.calculator.recieve')}</h3>
                        <div className="flex-auto space-y-4">
                            <Selector
                                options={
                                    mode === "money"
                                        ? cryptoOption
                                        : couseOption
                                }
                                value={get}
                                onChange={
                                    mode === "money"
                                        ? changeCrypto
                                        : changeMoney
                                }
                            />
                            {mode === "money" && get?.label !== "BTC" ? (
                                <Selector
                                    options={
                                        get?.label === "USDT"
                                            ? usdtNetOption
                                            : ethNetOption
                                    }
                                    value={
                                        get?.label === "USDT" ? usdtNet : ethNet
                                    }
                                    onChange={changeNet}
                                />
                            ) : null}
                        </div>
                        <Input
                            name="get"
                            type="number"
                            onChange={() => {}}
                            disabled={true}
                            className={"py-1 px-3 rounded-lg"}
                        />
                        {isLoading.get && <LoadingInput />}
                    </div>
                </div>

                <div className="w-full">
         
                    <ButtonAnim isLoading={methods.formState.isValid} text={t('main.pages.home.calculator.button')}/>
                    {/* <div className=" mt-4 h-[60px] w-full">
                        <div
                            className={`h-[60px] w-full shadow-[#06D6A0] flex justify-center align-middle
                        ${
                            !methods.formState.isValid
                                ? " forwards delay-500"
                                : "animate-revealButton forwards"
                        }`}
                        >
                            <button
                                // disabled={!methods.formState.isValid}
                                className={`relative h-[60px] text-white bg-[#06D6A0] duration-500 
                              
                                    after:absolute after:h-10 after:w-10
               
                                    after:bg-red-400 after:rounded-full
                                    // after:animate-pulsex

                                    ${
                                    !methods.formState.isValid
                                        ? " w-[60px] rounded-full `"
                                        : " w-full rounded-[32px] delay-500"
                                } `}
                            >
                                <p className={`duration-300 ${!methods.formState.isValid ? 'opacity-0 ' : 'opacity-100 delay-[600ms]'}`}>hghgsadasfdf</p>
                            </button>
                        </div>
                    </div> */}
                </div>
            </form>
        </FormProvider>
    );
};

const LoadingInput = () => {
    return (
        <div className="!mt-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Logo />
        </div>
    );
};
