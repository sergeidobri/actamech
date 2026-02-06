import SectionTitle from "@/components/ui/SectionTitle";
import { ISSN } from "@/lib/constants/global";

export default function JournalInsights() {
  return (
    <>
      <SectionTitle title="Journal Insights" />

      <div className="container mx-auto mt-8 grid grid-cols-3 text-secondary">
        <div className="px-4 py-6 border-r-1">
          <h1 className="text-xl text-center rounded-base font-bold">ISSN</h1>
          <p className="text-center font-semibold text-accent border-b-2 border-b-border-secondary pb-2">
            {ISSN}
          </p>
        </div>
        <div className="px-4 py-6 border-r-1 border-r-border-primary">
          <h1 className="text-xl text-center rounded-base font-bold">
            Publication frequency
          </h1>
          <p className="text-center font-semibold text-accent border-b-2 border-b-border-secondary pb-2">
            4 times a year
          </p>
        </div>
        <div className="px-4 py-6">
          <h1 className="text-xl text-center rounded-base font-bold">
            Language
          </h1>
          <p className="text-center font-semibold text-accent border-b-2 border-b-border-secondary pb-2">
            English
          </p>
        </div>
      </div>
    </>
  );
}
