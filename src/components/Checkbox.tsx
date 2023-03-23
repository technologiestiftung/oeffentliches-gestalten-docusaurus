import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface CheckboxProps {
  id: string;
  group?: string;
  label: string | ReactNode;
  className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  group,
  label,
  className: additionalClassname = "",
}) => {
  return (
    <div className={clsx("flex gap-x-3 items-start", additionalClassname)}>
      <input
        type="checkbox"
        name={group}
        id={id}
        className={clsx(
          "w-4 h-4",
          "text-magenta-500 rounded-none border-2 border-magenta-500",
          "focus:ring-4 focus:ring-offset-0 focus:ring-magenta-200 active:ring-4 active:ring-offset-0 active:ring-magenta-200",
          "translate-y-1"
        )}
      />
      <label htmlFor={id} className="leading-snug">
        {label}
      </label>
    </div>
  );
};
