import React, { FC } from "react";
import { Link } from "./Link";
import EditIcon from "@site/static/img/icons/edit.svg";

interface StageType {
  title: string;
  description: string;
  methods: { title: string; href: string }[];
}

interface StagesTocType {
  stages: StageType[];
}

export const StagesToc: FC<StagesTocType> = ({ stages }) => {
  return (
    <div className="grid grid-cols-1 gap-y-12">
      {stages.map((stage, idx) => {
        return (
          <>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-7 lg:gap-x-10 gap-y-2"
              key={stage.title}
            >
              <div className="md:col-span-2 w-full flex flex-nowrap gap-x-2 items-center">
                <div className="shrink-0 text-grey-300 italic">
                  Etappe {idx + 1}:
                </div>
                <hr className="h-px bg-grey-100 w-full !my-0 !border-0 shrink translate-y-0.5" />
              </div>
              <div>
                <h3 className="!text-lg !leading-tight !my-0">{stage.title}</h3>
                <p className="!mt-2 !mb-0">{stage.description}</p>
              </div>
              <ul className="!my-0 !pl-0">
                {stage.methods.map((method) => {
                  return (
                    <li key={method.title} className="list-none !pl-0">
                      <Link
                        href={method.href}
                        icon={<EditIcon className="translate-y-0.5" />}
                        className="!no-underline !items-start"
                      >
                        {method.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        );
      })}
    </div>
  );
};
