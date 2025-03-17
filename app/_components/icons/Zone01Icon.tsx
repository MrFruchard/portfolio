import { ComponentPropsWithoutRef } from "react";

export const Zone01Icon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 60 25"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      {/* Le "0" */}
      <g>
        {/* Première ligne */}
        <circle cx="5" cy="5" r="2.5" fill="currentColor" />
        <circle cx="10" cy="5" r="2.5" fill="currentColor" />
        <circle cx="15" cy="5" r="2.5" fill="currentColor" />

        {/* Deuxième ligne */}
        <circle cx="5" cy="10" r="2.5" fill="currentColor" />
        <circle cx="15" cy="10" r="2.5" fill="currentColor" />

        {/* Troisième ligne */}
        <circle cx="5" cy="15" r="2.5" fill="currentColor" />
        <circle cx="15" cy="15" r="2.5" fill="currentColor" />

        {/* Quatrième ligne */}
        <circle cx="5" cy="20" r="2.5" fill="currentColor" />
        <circle cx="10" cy="20" r="2.5" fill="currentColor" />
        <circle cx="15" cy="20" r="2.5" fill="currentColor" />
      </g>

      {/* Le "1" avec effet de fondu */}
      <g>
        <circle cx="25" cy="5" r="2.5" fill="currentColor" opacity="1" />
        <circle cx="25" cy="10" r="2.5" fill="currentColor" opacity="0.8" />
        <circle cx="25" cy="15" r="2.5" fill="currentColor" opacity="0.6" />
        <circle cx="25" cy="20" r="2.5" fill="currentColor" opacity="0.4" />
      </g>
    </svg>
  );
};
