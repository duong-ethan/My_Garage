import { useId } from "react";

// FOURNI : illustration SVG réactive. Les élèves n’ont pas à modifier les tracés.
// La carrosserie, les jantes, le toit et l’aileron dépendent uniquement des props.
export default function CarPreview({
  vehicle,
  color,
  wheelId = "standard",
  optionIds = [],
  compact = false,
}) {
  const uid = useId().replaceAll(":", "");
  const suv = vehicle.type === "suv";
  const coupe = vehicle.type === "coupe";
  const roof = suv ? 111 : coupe ? 143 : 133;
  const rear = suv ? 196 : coupe ? 232 : 211;
  const body = `M85 259 Q83 235 121 225 L${rear - 20} 207 Q${rear + 8} ${roof} ${rear + 60} ${roof} L398 ${roof} Q439 ${roof + 2} 488 203 L614 218 Q652 224 666 252 L669 285 Q662 297 637 297 L106 297 Q81 296 85 259 Z`;
  const wheelRadius = wheelId === "sport" ? 44 : 40;
  return (
    <svg
      className={`car-art ${compact ? "compact" : ""}`}
      viewBox="0 0 760 380"
      role="img"
      aria-label={`${vehicle.brand} ${vehicle.name}, ${color.label}, ${wheelId === "sport" ? "jantes sport" : "jantes standard"}${optionIds.includes("roof") ? ", toit panoramique" : ""}${optionIds.includes("spoiler") ? ", aileron" : ""}`}
    >
      <defs>
        <linearGradient id={`${uid}-paint`} x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor="white" stopOpacity=".48" />
          <stop offset=".46" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".45" />
        </linearGradient>
        <linearGradient id={`${uid}-glass`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#607786" />
          <stop offset="1" stopColor="#121b25" />
        </linearGradient>
        <radialGradient id={`${uid}-floor`}>
          <stop stopColor="#000" stopOpacity=".65" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="381" cy="323" rx="335" ry="32" fill={`url(#${uid}-floor)`} />
      <path d={body} fill={color.hex} className="paint" />
      <path
        d={body}
        fill={`url(#${uid}-paint)`}
        stroke="#ffffff44"
        strokeWidth="1.5"
      />
      <path
        d={`M${rear + 8} 202 Q${rear + 34} ${roof + 13} ${rear + 65} ${roof + 13} L391 ${roof + 13} Q418 ${roof + 15} 461 202 Z`}
        fill={`url(#${uid}-glass)`}
        stroke="#0a131f"
        strokeWidth="6"
      />
      <path
        d={`M354 ${roof + 12} L360 205`}
        stroke={color.hex}
        strokeWidth="10"
      />
      {optionIds.includes("roof") && (
        <path
          data-testid="roof"
          d={`M${rear + 66} ${roof + 3} L393 ${roof + 3}`}
          stroke="#09131d"
          strokeWidth="9"
          strokeLinecap="round"
        />
      )}
      <path
        d="M110 244 Q345 218 628 236"
        fill="none"
        stroke="#ffffff55"
        strokeWidth="2"
      />
      <path
        d="M277 214 L273 282 M474 212 L493 283"
        fill="none"
        stroke="#0005"
        strokeWidth="2"
      />
      <path
        d="M299 224 L323 224 M419 224 L443 224"
        stroke="#12202f"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M99 250 L124 250"
        stroke="#ff627a"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M609 237 L649 247"
        stroke="#e4faff"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path d="M629 270 L657 270" stroke="#111a22" strokeWidth="9" />
      <path d="M114 294 L633 294" stroke="#10171e" strokeWidth="8" />
      {optionIds.includes("spoiler") && (
        <g data-testid="spoiler" fill="#131d27">
          <path d="M122 219 L113 195 L145 195 L147 216 Z" />
          <rect x="88" y="186" width="95" height="9" rx="4" />
        </g>
      )}
      {[209, 548].map((x) => (
        <g key={x} transform={`translate(${x},286)`}>
          <circle r="52" fill="#0c1016" />
          <circle r="47" fill="#171d25" stroke="#38414d" strokeWidth="2" />
          <circle
            r={wheelRadius}
            fill={wheelId === "sport" ? "#b7c4d0" : "#768998"}
          />
          <circle r={wheelRadius - 5} fill="#212c37" />
          {Array.from({ length: wheelId === "sport" ? 8 : 5 }, (_, i) => (
            <path
              key={i}
              transform={`rotate(${i * (wheelId === "sport" ? 45 : 72)})`}
              d={`M-5 -8 L-7 -${wheelRadius - 3} L3 -${wheelRadius - 4} L7 -8 Z`}
              fill="#ced7de"
            />
          ))}
          <circle r="10" fill="#718290" />
          <circle r="4" fill="#e5eaf0" />
        </g>
      ))}
    </svg>
  );
}
