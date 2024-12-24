"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export const Lists = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if (!userMemberships.data?.length) return null;
  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((member) => {
        const { id, name, imageUrl } = member.organization;
        return (
          <Item
            key={id}
            id={id}
            name={name || "name"}
            imageUrl={imageUrl || "/default-image.png"}
          />
        );
      })}
    </ul>
  );
};
