import style from "./ButtonAnim.module.scss";

type Props = {
    text: string;
    isLoading?: boolean;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const ButtonAnim = ({ text, isLoading, ...rest }: Props) => {
    return (
        <button
            className={`${style["button"]} ${
                isLoading ? style["button__open"] : style["button__close"]
            }`}
            {...rest}
        >
            <p className={style["button__text"]}>{text}</p>
        </button>
    );
};
