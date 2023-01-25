import clsx from "clsx";
import React, { FC } from "react";

type CreditsPersonType = string | { name: string; url: string };

interface CreditsSectionType {
  title: string;
  people: CreditsPersonType[];
}

export interface CreditsProps {
  credits: {
    concept: CreditsSectionType;
    authors: CreditsSectionType;
    editing: CreditsSectionType;
    illustration: CreditsSectionType;
  };
}

const CreditsSection: FC<CreditsSectionType> = ({ title, people }) => {
  return (
    <div className={clsx("pr-6", "col-span-6 md:col-span-3 lg:col-span-2")}>
      <h4 className="mb-2 text-grey-500">{title}</h4>
      <ul className="list-none p-0">
        {people.map((person) => {
          return (
            <li className="text-sm">
              {typeof person === "string" && `${person}`}
              {typeof person === "object" && (
                <>
                  {person.name}
                  <br />
                  <a
                    href={`https://${person.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-grey-500 italic transition-colors"
                  >
                    {person.url}
                  </a>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Credits: FC<CreditsProps> = ({ credits }) => {
  return (
    <>
      {Object.entries(credits).map(([key, { title, people }]) => {
        return <CreditsSection key={key} title={title} people={people} />;
      })}
    </>
  );
};
