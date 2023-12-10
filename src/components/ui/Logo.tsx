type Props = {
    variant?: "big" | "small";
};

const styles = {
    big: "relative text-[10px] leading-[12px] uppercase p-4 flex justify-center items-center flex-col before:absolute before:h-[60px] before:w-[60px] before:border-4 before:border-white before:border-t-blue-500 before:rounded-full before:animate-logo",
    small: "overflow-hidden leading-none relative text-md uppercase p-4 flex justify-center items-center flex-col text-[6px] before:absolute before:h-[35px] before:w-[35px] before:border-4 before:border-white before:border-t-blue-500 before:rounded-full before:animate-logo",
};

export const Logo = ({ variant = "big" }: Props) => {
    return (
        <div className={`${styles[variant]}`}>
            <div className="text-blue-500">Ellipse</div>
            <div className="text-black">Crypto</div>
        </div>
    );
};
