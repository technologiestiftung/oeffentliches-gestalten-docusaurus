import clsx from "clsx";
import React, { FC } from "react";
import { StepItem } from "./StepItem";
import { StepVisual } from "./StepVisual";

export const StepsOverview: FC = () => {
  return (
    <div className={clsx("grid gap-y-5 lg:gap-y-8 grid-cols-1", "mb-10")}>
      <StepItem
        surtitle="Phase 1"
        title="Vorbereiten"
        subtitle="Unternehmung beginnen"
        visual={<StepVisual shape="circle" stepIndex={1} />}
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
      />
      <StepItem
        surtitle="Phase 4"
        title="Entwerfen"
        subtitle="Lösungsansatz definieren"
        visual={
          <StepVisual shape="square" stepIndex={4} bgColorClass="bg-blue-500" />
        }
      />
      <StepItem
        surtitle="Phase 5"
        title="Erproben"
        subtitle="Nutzen validieren"
        visual={
          <StepVisual shape="square" stepIndex={5} bgColorClass="bg-blue-500" />
        }
      />
    </div>
  );
};
