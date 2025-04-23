"use client";

import React, { useMemo } from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";
import { JSX } from "react/jsx-runtime";

const DynamicIconCloud = () => {
  const [mounted, setMounted] = React.useState(false);
  const [renderedIcons, setRenderedIcons] = React.useState<JSX.Element[]>([]);

  // Utilisez useMemo pour éviter que slugs ne change à chaque rendu
  const slugs = useMemo(
    () => [
      "typescript",
      "tailwindcss",
      "javascript",
      "react",
      "go",
      "html5",
      "css3",
      "nextdotjs",
      "graphql",
      "vercel",
      "docker",
      "git",
      "github",
      "visualstudiocode",
      "gitea",
      "jetbrains",
    ],
    []
  ); // tableau de dépendances vide signifie que ce tableau sera calculé une seule fois

  React.useEffect(() => {
    setMounted(true);

    const loadIcons = async () => {
      const icons = await fetchSimpleIcons({ slugs });
      if (icons && icons.simpleIcons) {
        const iconElements = Object.values(icons.simpleIcons).map((icon) =>
          renderSimpleIcon({
            icon,
            size: 80,
            aProps: {
              href: undefined,
              target: undefined,
              rel: undefined,
              onClick: (e: React.MouseEvent) => e.preventDefault(),
            },
          })
        );
        setRenderedIcons(iconElements);
      }
    };

    loadIcons();
  }, [slugs]);

  // Style pour centrer le Cloud
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "300px", // Fixed height for better visual appeal
    padding: "1rem",
    marginBottom: "2rem",
  };

  // Options du Cloud
  const cloudOptions = {
    initial: [0.1, -0.1],
    maxSpeed: 0.05,
    minSpeed: 0.02,
    direction: 135,
    keep: true,
    outlineMethod: "none",
    outlineColour: "transparent",
  };

  if (!mounted) {
    return (
      <div style={containerStyle} className="animate-pulse">
        Chargement...
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <Cloud options={cloudOptions}>
        {renderedIcons.length > 0 ? (
          renderedIcons
        ) : (
          <span>Chargement des icônes...</span>
        )}
      </Cloud>
    </div>
  );
};

export { DynamicIconCloud };
