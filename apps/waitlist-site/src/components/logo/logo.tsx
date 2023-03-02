/* eslint-disable-next-line */
export interface LogoProps {
  width?: string;
  height?: string;
  type?: "full" | "logo";
}

export function Logo(props: LogoProps) {
  const { width, height } = props;
  return (
    <div className="flex select-none justify-center items-center">
      <svg
        width={width}
        height={height}
        className="text-brand-600"
        viewBox="0 0 193 199"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="55.459"
          width="137.016"
          height="135.385"
          rx="17.4125"
          fillRule="evenodd"
        />
        <rect
          x="24.4673"
          y="45.6721"
          width="137.016"
          height="135.385"
          rx="17.4125"
          fill="white"
        />
        <rect
          y="63.6147"
          width="137.016"
          height="135.385"
          rx="17.4125"
          fillRule="evenodd"
        />
      </svg>
      <p className="ml-1.5 -mt-0.5 text-2xl font-bold text-gray-700">Portify</p>
    </div>
  );
}

const defaultLogoProps = {
  width: "30",
  height: "30",
};

Logo.defaultProps = defaultLogoProps;

export default Logo;
