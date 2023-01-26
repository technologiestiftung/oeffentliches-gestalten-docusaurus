import clsx from "clsx";
import React, { FC } from "react";

interface CheckboxProps {
  id: string;
  group?: string;
  label: string;
}

export const Checkbox: FC<CheckboxProps> = ({ id, group, label }) => {
  return (
    <div className="flex gap-x-2 items-center">
      <input
        type="checkbox"
        name={group}
        id={id}
        className={clsx(
          "w-4 h-4",
          "text-magenta-500 rounded-none border-2 border-magenta-500",
          "focus:ring-4 focus:ring-offset-0 focus:ring-magenta-200 active:ring-4 active:ring-offset-0 active:ring-magenta-200"
        )}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
