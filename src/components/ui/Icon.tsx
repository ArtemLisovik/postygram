import sprite from "../../assets/svg/_sprite.svg";

type Props = {
    name: "arrow";
    size?: number;
    color?: string;
};

export const Icon = ({ name, size = 20, color = "black" }: Props) => {
    return (
        <svg height={size} width={size} color={color}>
            <use href={`${sprite}#${name}`} />
        </svg>
    );
};
