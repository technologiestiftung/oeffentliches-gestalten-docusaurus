import React, { FC } from "react";
import { PersonCard, PersonCardProps } from "./PersonCard";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

interface TeamMemberProps
  extends Pick<PersonCardProps, "name" | "description"> {
  imageFileName: string;
}

export const TeamMembers: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;

  // We know that we provide the custom field team.members:
  // @ts-ignore
  const teamMembers = customFields.team.members as TeamMemberProps[];

  // We know that we provide the custom field team.title:
  // @ts-ignore
  const sectionTitle = customFields.team.title as string;

  return (
    <>
      <h2 className="!mt-24 !mb-0">{sectionTitle}</h2>
      <div
        className={clsx(
          "!mt-7 md:!mt-12 pb-20",
          "grid grid-cols-1 gap-y-7 md:gap-y-16"
        )}
      >
        {teamMembers.map((teamMember) => {
          const imageUrl = useBaseUrl(`/img/${teamMember.imageFileName}`);

          return (
            <PersonCard
              name={teamMember.name}
              description={teamMember.description}
              imageUrl={`${imageUrl}`}
            />
          );
        })}
      </div>
    </>
  );
};
