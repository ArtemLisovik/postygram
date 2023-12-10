import cx from "classnames";
import "./ChangeArrow.styles.scss";

interface Props {
  onClick: () => void;
  className?: string;
}

export const ChangeArrow = ({ onClick, className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      className={cx("justify-self-center self-center", className)}
      onClick={onClick}
    >
      <defs>
        <filter
          id="alpha"
          filterUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feColorMatrix
            type="matrix"
            in="SourceGraphic"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
        </filter>
        <mask id="mask0">
          <g filter="url(#alpha)">
            <rect
              x="0"
              y="0"
              width="24"
              height="24"
              style={{
                fill: "#fff",
                fillOpacity: "0.960784",
                stroke: "none",
              }}
            />
          </g>
        </mask>
        <clipPath id="clip1">
          <rect x="0" y="0" width="24" height="24" />
        </clipPath>
        <g id="surface5" clip-path="url(#clip1)">
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fillOpacity: "1",
            }}
            d="M -0.046875 11.953125 C -0.046875 11.890625 -0.046875 11.828125 -0.046875 11.765625 C 0.890625 11.765625 1.828125 11.765625 2.765625 11.765625 C 3.3125 8.953125 4.75 6.71875 7.078125 5.0625 C 8.851562 4.132812 10.742188 3.679688 12.75 3.703125 C 13.609375 3.75 14.46875 3.8125 15.328125 3.890625 C 15.328125 4.140625 15.328125 4.390625 15.328125 4.640625 C 12.703125 4.570312 10.5625 5.539062 8.90625 7.546875 C 8.003906 8.777344 7.597656 10.152344 7.6875 11.671875 C 8.730469 11.734375 9.777344 11.796875 10.828125 11.859375 C 8.980469 13.863281 7.136719 15.863281 5.296875 17.859375 C 3.492188 15.90625 1.710938 13.9375 -0.046875 11.953125 Z M -0.046875 11.953125 "
          />
        </g>
        <mask id="mask1">
          <g filter="url(#alpha)">
            <rect
              x="0"
              y="0"
              width="24"
              height="24"
              style={{
                fillOpacity: "0.960784",
                stroke: "none",
              }}
            />
          </g>
        </mask>
        <clipPath id="clip2">
          <rect x="0" y="0" width="24" height="24" />
        </clipPath>
        <g id="surface8" clip-path="url(#clip2)">
          <path
            style={{
              stroke: "none",
              fillRule: "evenodd",
              fillOpacity: "1",
            }}
            d="M 23.953125 11.953125 C 23.953125 12.015625 23.953125 12.078125 23.953125 12.140625 C 23.015625 12.140625 22.078125 12.140625 21.140625 12.140625 C 20.59375 14.953125 19.15625 17.1875 16.828125 18.84375 C 15.054688 19.773438 13.164062 20.226562 11.15625 20.203125 C 10.296875 20.15625 9.4375 20.09375 8.578125 20.015625 C 8.578125 19.765625 8.578125 19.515625 8.578125 19.265625 C 11.925781 19.289062 14.347656 17.820312 15.84375 14.859375 C 16.183594 13.984375 16.324219 13.078125 16.265625 12.140625 C 15.203125 12.171875 14.140625 12.140625 13.078125 12.046875 C 14.925781 10.042969 16.769531 8.042969 18.609375 6.046875 C 20.414062 8 22.195312 9.96875 23.953125 11.953125 Z M 23.953125 11.953125 "
          />
        </g>
      </defs>
      <g id="surface1">
        <use xlinkHref="#surface5" mask="url(#mask0)" />
        <use xlinkHref="#surface8" mask="url(#mask1)" />
      </g>
    </svg>
  );
};
export default ChangeArrow;
