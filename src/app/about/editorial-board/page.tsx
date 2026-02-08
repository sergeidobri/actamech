import BoardDistinctPersonCard from "@/components/ui/BoardDisctinctPersonCard";
import { CO_EDITORS } from "@/lib/constants/global";
import { groupEditorsCountries } from "@/lib/utils/editors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Board",
};

export default function EditorialBoardPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-y-8">
      <div className="flex flex-col gap-8 w-fit lg:pr-16">
        <div className="flex flex-col gap-4 left_navigation-sticky">
          <h2 className="font-semibold lg:pb-2 border-b-1 border-b-accent">
            Editorial board by country/region:
          </h2>
          <ul className="flex flex-col gap-2">
            {groupEditorsCountries(CO_EDITORS).map((group) => (
              <li key={group.name}>
                {group.name} ({group.quantity})
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-16 lg:border-l-border-primary lg:border-l-1 lg:pl-16">
        <div>
          <h2 className="text-2xl pb-2 border-b-2 w-1/2">Editor-In-Chief</h2>
          <div className="mt-8 grid grid-cols-3 gap-8">
            <BoardDistinctPersonCard
              {...{
                fullName: "Yury Razoumny",
                country: "Russia",
                affiliation: "RUDN University",
                color: "accent",
              }}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl pb-2 border-b-2 w-1/2">Associate Editors</h2>
          <div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {CO_EDITORS.map((e) => (
                <BoardDistinctPersonCard
                  {...e}
                  color="accent"
                  key={e.fullName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
