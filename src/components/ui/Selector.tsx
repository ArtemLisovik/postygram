import React from "react";
import cx from "classnames";
import { CalculatorOptions } from "components/Calculator/types/CalculatorTypes";
import Arrow from "assets/svg/Arrow";

type Props = {} & CalculatorOptions;

export const Selector = ({ value, onChange, options }: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const selectorRef = React.useRef<HTMLDivElement | null>(null);
    const [arrowButtonPosition, setArrowButtonPosition] =
        React.useState<boolean>(false);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                selectorRef.current &&
                !selectorRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleIsOpen = () => setIsOpen((prev) => !prev);

    const arrowButtonStyles = cx(
        { "rotate-180": !arrowButtonPosition },
        { "rotate-0": arrowButtonPosition },
        "duration-500"
    );

    return (
        <div
            ref={selectorRef}
            className="relative"
            onClick={() => setArrowButtonPosition((prev) => !prev)}
        >
            <div
                className="py-1 px-3 h-[36px] text-white text-lg border border-solid border-slate-200 rounded-lg flex justify-between items-center cursor-pointer"
                onClick={handleIsOpen}
            >
                <div className="flex flex-row items-center w-[100%]">
                    {value?.label}
                    {value?.type === "crypto" && (
                        <img
                            src={value?.icon}
                            className="h-[20px] w-[20px] ml-[8px]"
                            alt={value?.label}
                        />
                    )}
                </div>
                <Arrow className={arrowButtonStyles} />
            </div>
            {isOpen && (
                <ul
                    className={cx(
                        "absolute top-[42px] text-lg left-0 w-full z-10 bg-[#fbfbfd] border border-solid border-t-0 border-slate-100 rounded-b-md shadow overflow-hidden"
                    )}
                >
                    {React.Children.toArray(
                        options?.map((option) => (
                            <li
                                className="p-2 h-[42px] text-lg flex justify-start items-center hover:bg-gray-300 cursor-pointer"
                                onClick={() => {
                                    onChange(option);
                                    handleIsOpen();
                                }}
                            >
                                {option?.label}
                                {value?.type === "crypto" && (
                                    <img
                                        src={option.icon}
                                        className="h-[20px] w-[20px] ml-[8px]"
                                        alt={option.label}
                                    />
                                )}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
};
