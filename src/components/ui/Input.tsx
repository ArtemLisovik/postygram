import { useController, useFormContext } from "react-hook-form";
import cx from "classnames";

type Props = {
    type?: "text" | "number";
    name: string;
    label?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    variant?: "first" | "second";
    className?: string;
};

const variants = {
    first: "!bg-white text-black w-full font-bold p-4 rounded-[32px] disabled:bg-slate-300 disabled:cursor-not-allowed",
    second: "!bg-white text-black w-full font-bold p-4 rounded-[32px] disabled:bg-slate-300 disabled:cursor-not-allowed border border-black",
};

export const Input = ({
    type = "text",
    name,
    label,
    placeholder,
    onChange,
    disabled,
    variant = "first",
    className,
}: Props) => {
    const { control } = useFormContext();
    const { field } = useController({
        name,
        control,
        rules: { required: true },
    });
    return (
        <>
            <div className="w-full">
                {label && (
                    <label className="block pb-2" htmlFor={name}>
                        {label}
                    </label>
                )}
                <input
                    disabled={disabled}
                    onChange={onChange ? onChange : field.onChange}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    value={field.value}
                    className={cx(
                        variants[variant],
                        "text-lg outline-none font-medium text-center",
                        disabled ? "text-green-500" : "text-[#191c29]",
                        className
                    )}
                    id={name}
                    type={type}
                    name={field.name}
                    placeholder={placeholder}
                />
                <div className="!mt-2 h-4 text-xs"></div>
            </div>
        </>
    );
};
