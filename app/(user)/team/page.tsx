import { MemberProps } from "@/types";
import { getAcademicYear } from "@/utils/functions";
import { getTeam } from "@/utils/user/team";
import { Metadata } from "next";
import { Suspense } from "react";
import MemberCard from "../_components/MemberCard";

export const metadata: Metadata = {
  title: "Team RnD | CCA RnD",
  description: "We are together from beging to end.",
};

function SeparateAll({ batch, members }: { batch: string; members: MemberProps[] }) {
  return (
    <div className="w-full flex flex-col gap-4 flex-1">
      <div className="w-full flex flex-col gap-1">
        <h1 className="uppercase text-3xl font-bold text-white text-center md:text-start">
          {batch}
        </h1>
        <div className="h-0.5 bg-white"></div>
      </div>
      <div className="flex gap-4 md:gap-10 flex-wrap">
        {members.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}

async function GetTeam() {
  const team = await getTeam();
  if (!team) {
    return (
      <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full">
        Sorry! Failed to Fetch Team
      </h1>
    );
  }
  const secondYear: MemberProps[] = team.filter((member) => getAcademicYear(member.year) === 2);
  const thirdYear: MemberProps[] = team.filter((member) => getAcademicYear(member.year) === 3);
  const finalYear: MemberProps[] = team.filter((member) => getAcademicYear(member.year) === 4);
  const alumniBatch: MemberProps[] = team
    .filter((member) => getAcademicYear(member.year) === 5)
    .map((member) => ({ ...member, position: "Alumni" }));

  return (
    <div className="w-full px-5 lg:px-20 flex flex-col gap-4 flex-1">
      <SeparateAll batch="Final Year" members={finalYear} />
      <SeparateAll batch="Pre-Final Year" members={thirdYear} />
      <SeparateAll batch="Second Year" members={secondYear} />
      <SeparateAll batch="Alumni" members={alumniBatch} />
    </div>
  );
}

export default async function Team() {
  return (
    <div className="relative my-20 flex flex-col items-center w-full">
      <Suspense
        fallback={
          <h1 className="text-2xl font-bold text-white h-full flex items-center justify-center w-full min-h-screen -mt-20">
            Loading...
          </h1>
        }
      >
        <GetTeam />
      </Suspense>
    </div>
  );
}
