export type SelectOptions = {
    label: string;
    value: number;
    type: "money" | "crypto";
    icon?: string;
};

export type CalculatorOptions = {
    value: SelectOptions | undefined | any;
    onChange: (value: SelectOptions) => void;
    options: SelectOptions[];
};
