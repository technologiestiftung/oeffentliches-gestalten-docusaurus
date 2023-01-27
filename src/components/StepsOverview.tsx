import clsx from "clsx";
import React, { FC } from "react";
import { StepItem } from "./StepItem";
import { StepVisual } from "./StepVisual";

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

export const StepsOverview: FC = () => {
  return (
    <div
      className={clsx(
        "grid gap-5 lg:gap-8 grid-cols-[1fr,40px] grid-rows-5",
        "mb-10"
      )}
    >
      <StepItem
        surtitle="Phase 1"
        title="Vorbereiten"
        subtitle="Unternehmung beginnen"
        visual={<StepVisual shape="circle" stepIndex={1} />}
        className="col-start-1"
      />
      <StepItem
        surtitle="Phase 2"
        title="Erkunden"
        subtitle="Untersuchungsfokus setzen"
        visual={
          <StepVisual
            shape="square"
            stepIndex={2}
            bgColorClass="bg-magenta-500"
          />
        }
        className="col-start-1"
      />
      <StepItem
        surtitle="Phase 3"
        title="Erkennen"
        subtitle="Potenzialfelder identifizieren"
        visual={
          <StepVisual
            shape="square"
            stepIndex={3}
            bgColorClass="bg-magenta-500"
          />
        }
        className="col-start-1"
      />
      <StepItem
        surtitle="Phase 4"
        title="Entwerfen"
        subtitle="Lösungsansatz definieren"
        visual={
          <StepVisual shape="square" stepIndex={4} bgColorClass="bg-blue-500" />
        }
        className="col-start-1"
      />
      <StepItem
        surtitle="Phase 5"
        title="Erproben"
        subtitle="Nutzen validieren"
        visual={
          <StepVisual shape="square" stepIndex={5} bgColorClass="bg-blue-500" />
        }
        className="col-start-1"
      />
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
