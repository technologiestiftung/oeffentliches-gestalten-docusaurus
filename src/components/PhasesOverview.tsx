import clsx from "clsx";
import React, { FC } from "react";
import { PhaseItem } from "./PhaseItem";
import { PhaseVisual, PhaseVisualProps } from "./PhaseVisual";

interface PhasesContentType {
  title: string;
  subtitle: string;
  area?: "Problembereich" | "Lösungsbereich";
}

const PHASES: PhasesContentType[] = [
  {
    title: "Vorbereiten",
    subtitle: "Unternehmung beginnen",
  },
  {
    title: "Erkunden",
    subtitle: "Untersuchungsfokus setzen",
    area: "Problembereich",
  },
  {
    title: "Erkennen",
    subtitle: "Potenzialfelder identifizieren",
    area: "Problembereich",
  },
  {
    title: "Entwerfen",
    subtitle: "Lösungsansatz definieren",
    area: "Lösungsbereich",
  },
  {
    title: "Erproben",
    subtitle: "Nutzen validieren",
    area: "Lösungsbereich",
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
        "grid gap-5 lg:gap-8 grid-cols-[1fr,40px] grid-rows-5",
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
            className="col-start-1"
          />
        );
      })}
      <AreaIndicator
        color="magenta"
        label="Problembereich"
        firstPhaseIndex={2}
        finalPhaseIndex={3}
      />
      <AreaIndicator
        color="blue"
        label="Lösungsbereich"
        firstPhaseIndex={4}
        finalPhaseIndex={5}
      />
    </div>
  );
};
