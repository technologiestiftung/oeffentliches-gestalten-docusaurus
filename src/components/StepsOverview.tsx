import clsx from "clsx";
import React, { FC } from "react";
import { StepItem } from "./StepItem";
import { StepVisual, StepVisualProps } from "./StepVisual";

interface StepsContentType {
  title: string;
  subtitle: string;
  area?: "Problembereich" | "Lösungsbereich";
}

const STEPS: StepsContentType[] = [
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
  firstStepIndex: number;
  finalStepIndex: number;
}

/**
 * Vertical line with vertical label that indicates the current area that the chapter belongs to.
 * @returns ReactNode
 */
const AreaIndicator: FC<AreaIndicatorProps> = ({
  color,
  label,
  firstStepIndex,
  finalStepIndex,
}) => {
  const COLOR_CLASSES = {
    border: color === "magenta" ? "border-magenta-500" : "border-blue-500",
    text: color === "magenta" ? "text-magenta-500" : "text-blue-500",
  };
  return (
    <div
      className={clsx("col-start-2", "border-l-2", COLOR_CLASSES.border)}
      style={{
        gridRowStart: firstStepIndex,
        gridRow: `${firstStepIndex} / ${finalStepIndex + 1}`,
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
  stepArea: StepsContentType["area"]
): StepVisualProps["shape"] => {
  switch (stepArea) {
    case "Problembereich":
      return "square";
    case "Lösungsbereich":
      return "square";
    default:
      return "circle";
  }
};

const getStepBgColor = (
  stepArea: StepsContentType["area"]
): StepVisualProps["bgColorClass"] => {
  switch (stepArea) {
    case "Problembereich":
      return "bg-magenta-500";
    case "Lösungsbereich":
      return "bg-blue-500";
    default:
      return "bg-grey-500";
  }
};

export const StepsOverview: FC = () => {
  return (
    <div
      className={clsx(
        "grid gap-5 lg:gap-8 grid-cols-[1fr,40px] grid-rows-5",
        "mb-10",
        "not-prose"
      )}
    >
      {STEPS.map((step, idx) => {
        const STEP_NUMBER = idx + 1;

        return (
          <StepItem
            key={step.title}
            surtitle={`Phase ${STEP_NUMBER}`}
            title={step.title}
            subtitle={step.subtitle}
            visual={
              <StepVisual
                shape={getStepShape(step.area)}
                stepIndex={STEP_NUMBER}
                bgColorClass={getStepBgColor(step.area)}
              />
            }
            className="col-start-1"
          />
        );
      })}
      <AreaIndicator
        color="magenta"
        label="Problembereich"
        firstStepIndex={2}
        finalStepIndex={3}
      />
      <AreaIndicator
        color="blue"
        label="Lösungsbereich"
        firstStepIndex={4}
        finalStepIndex={5}
      />
    </div>
  );
};
