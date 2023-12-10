import { FormProvider, useForm } from "react-hook-form";
import { useOrderContext } from "../../context/OrderContext";
import { FirstBuyStep, SecondBuyStep, ThirdBuyStep } from "../Buy";

const buyPages = [<FirstBuyStep />, <SecondBuyStep />, <ThirdBuyStep />];

export const FormBuy = () => {
    const { currentStepIndex } = useOrderContext();
    const methods = useForm({
        defaultValues: {
            cardNumber: "",
        },
    });
    return (
        <FormProvider {...methods}>{buyPages[currentStepIndex]}</FormProvider>
    );
};
