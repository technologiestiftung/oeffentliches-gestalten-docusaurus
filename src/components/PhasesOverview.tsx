import clsx from "clsx";
import React, { FC } from "react";
import { PhaseItem } from "./PhaseItem";
import { PhaseVisual, PhaseVisualProps } from "./PhaseVisual";
import { translate } from "@docusaurus/Translate";

interface PhasesContentType {
  title: string;
  subtitle: string;
  href: string;
  area?: "Problembereich" | "Lösungsbereich";
}

const PHASES: PhasesContentType[] = [
  {
    title: translate({ message: "Vorbereiten", id: "phases.1.title" }),
    subtitle: translate({
      message: "Unternehmung beginnen",
      id: "phases.1.subtitle",
    }),
    href: translate({
      message: "/buch/vorbereiten/",
      id: "phases.1.link",
    }),
  },
  {
    title: translate({ message: "Erkunden", id: "phases.2.title" }),
    subtitle: translate({
      message: "Untersuchungsfokus setzen",
      id: "phases.2.subtitle",
    }),
    href: translate({
      message: "/buch/erkunden/",
      id: "phases.2.link",
    }),
    area: "Problembereich",
  },
  {
    title: translate({ message: "Erkennen", id: "phases.3.title" }),
    subtitle: translate({
      message: "Potenzialfelder identifizieren",
      id: "phases.3.subtitle",
    }),
    href: translate({
      message: "/buch/erkennen/",
      id: "phases.3.link",
    }),
    area: "Problembereich",
  },
  {
    title: translate({ message: "Entwerfen", id: "phases.4.title" }),
    subtitle: translate({
      message: "Lösungsansatz definieren",
      id: "phases.4.subtitle",
    }),
    href: translate({
      message: "/buch/entwerfen/",
      id: "phases.4.link",
    }),
    area: "Lösungsbereich",
  },
  {
    title: translate({ message: "Erproben", id: "phases.5.title" }),
    subtitle: translate({
      message: "Nutzen validieren",
      id: "phases.5.subtitle",
    }),
    href: translate({
      message: "/buch/erproben/",
      id: "phases.5.link",
    }),
    area: "Lösungsbereich",
  },
  {
    title: translate({ message: "Navigieren", id: "phases.6.title" }),
    subtitle: translate({
      message: "Innovationen begleiten",
      id: "phases.5.subtitle",
    }),
    href: translate({
      message: "/buch/navigieren/",
      id: "phases.5.link",
    }),
  },
];

interface AreaIndicatorProps {
  color: "magenta" | "blue";
  label: string;
  firstPhaseIndex: number;
  finalPhaseIndex: number;
}

/**
 * Vertical line with vertical label that indicates the current area that the chapter belongs to.
 * @returns ReactNode
 */
const AreaIndicator: FC<AreaIndicatorProps> = ({
  color,
  label,
  firstPhaseIndex,
  finalPhaseIndex,
}) => {
  const COLOR_CLASSES = {
    border: color === "magenta" ? "border-magenta-500" : "border-blue-500",
    text: color === "magenta" ? "text-magenta-500" : "text-blue-500",
  };
  return (
    <div
      className={clsx("col-start-2", "border-l-2", COLOR_CLASSES.border)}
      style={{
        gridRowStart: firstPhaseIndex,
        gridRow: `${firstPhaseIndex} / ${finalPhaseIndex + 1}`,
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <p
          className={clsx(
            "antialiased font-extrabold text-sm md:text-base",
            COLOR_CLASSES.text,
            "rotate-180"
          )}
          style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

const getStepShape = (
  phaseArea: PhasesContentType["area"]
): PhaseVisualProps["shape"] => {
  switch (phaseArea) {
    case "Problembereich":
      return "square";
    case "Lösungsbereich":
      return "square";
    default:
      return "circle";
  }
};

const getStepBgColor = (
  phaseArea: PhasesContentType["area"]
): PhaseVisualProps["bgColorClass"] => {
  switch (phaseArea) {
    case "Problembereich":
      return "bg-magenta-500";
    case "Lösungsbereich":
      return "bg-blue-500";
    default:
      return "bg-grey-500";
  }
};

export const PhasesOverview: FC<{ className?: string }> = ({
  className: additionalClassNames = "",
}) => {
  return (
    <div
      className={clsx(
        "grid gap-1 lg:gap-3 grid-cols-[1fr,40px] grid-rows-5",
        "mb-10",
        "not-prose",
        additionalClassNames
      )}
    >
      {PHASES.map((phase, idx) => {
        const PHASE_NUMBER = idx + 1;

        return (
          <PhaseItem
            key={phase.title}
            surtitle={`Phase ${PHASE_NUMBER}`}
            title={phase.title}
            subtitle={phase.subtitle}
            visual={
              <PhaseVisual
                shape={getStepShape(phase.area)}
                phaseIndex={PHASE_NUMBER}
                bgColorClass={getStepBgColor(phase.area)}
              />
            }
            href={phase.href}
            className="col-start-1"
          />
        );
      })}
      <AreaIndicator
        color="magenta"
        label={`${translate({
          message: "Problembereich",
          id: "phases.spaces.problem",
        })}`}
        firstPhaseIndex={2}
        finalPhaseIndex={3}
      />
      <AreaIndicator
        color="blue"
        label={`${translate({
          message: "Lösungsbereich",
          id: "phases.spaces.solution",
        })}`}
        firstPhaseIndex={4}
        finalPhaseIndex={5}
      />
    </div>
  );
};
