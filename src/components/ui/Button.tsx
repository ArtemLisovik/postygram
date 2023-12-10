import React from "react";

type Props = {
    variant?: "primary" | "second" | "third";
    text: string;
    isLoading?: boolean;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

const variants = {
    primary:
        "bg-[#06D6A0] text-[#191c29] rounded-[32px] hover:bg-[#05e6ab] active:bg-[#06D6A0] duration-200 font-bold",
    second: "bg-gray-300 text-black rounded-[32px] hover:bg-green-400 duration-200 font-bold",
    third: "bg-red-300 text-black rounded-[32px] hover:bg-red-400 duration-200 font-bold",
};

export const Button = ({
    variant = "primary",
    text,
    isLoading,
    ...rest
}: Props) => {
    return (    
            <button
                className={`${
                    variants[variant]
                } flex justify-center items-center font-normal w-[250px] h-[50px] text-white disabled:bg-gray-300 disabled:cursor-not-allowed ${
                    isLoading ? "bg-blue-700 cursor-not-allowed" : ""
                }`}
                {...rest}
            >
                {text}
            </button>
    );
};
