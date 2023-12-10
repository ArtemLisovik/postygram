import { FormProvider, useForm } from "react-hook-form";
import { useOrderContext } from "../../context/OrderContext";
import { FirstSellStep, SecondSellStep } from "../Sell";

const sellPages = [<FirstSellStep />, <SecondSellStep />];

export const FormSell = () => {
    const { currentStepIndex } = useOrderContext();
    const methods = useForm({
        defaultValues: {
            waletNumber: "",
        },
    });
    return (
        <FormProvider {...methods}>{sellPages[currentStepIndex]}</FormProvider>
    );
};
