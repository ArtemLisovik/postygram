import React from "react";

type OrderContextType = {
    currentStepIndex: number;
    handlePrev: () => void;
    handleNext: () => void;
    handleGoTo: (index: number) => void;
};

type OrderProviderProps = {
    children: React.ReactElement;
};

const OrderContext = React.createContext({} as OrderContextType);

export const OrderProvider = ({ children }: OrderProviderProps) => {
    const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

    const handlePrev = () => setCurrentStepIndex((prev) => prev - 1);
    const handleNext = () => setCurrentStepIndex((prev) => prev + 1);
    const handleGoTo = (index: number) => setCurrentStepIndex(index);

    const value: OrderContextType = {
        currentStepIndex,
        handlePrev,
        handleNext,
        handleGoTo,
    };

    return (
        <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
    );
};

export const useOrderContext = () => React.useContext(OrderContext);
