import React, { FC } from "react";

interface CreditsItemType {
  title: string;
  people: string[] | { name: string; url: string }[];
}

export interface CreditsListProps {
  credits: {
    concept: CreditsItemType;
    authors: CreditsItemType;
    editing: CreditsItemType;
    illustration: CreditsItemType;
  };
}

const CreditsSection: FC<CreditsItemType> = ({ title, people }) => {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2 pr-6">
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

export const CreditsList: FC<CreditsListProps> = ({ credits }) => {
  return (
    <>
      {Object.entries(credits).map(([key, value]) => {
        return (
          <CreditsSection key={key} title={value.title} people={value.people} />
        );
      })}
    </>
  );
};
