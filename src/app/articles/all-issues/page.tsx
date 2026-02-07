import IssueCard from "@/components/pages/issues/IssueCard";

export default function AllIssuesPage() {
  return (
    <div className="flex flex-col sm:flex-row gap-y-16">
      <div className="flex flex-col gap-8 sm:pr-8 sm:left_navigation-sticky min-w-1/5">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold pb-2 border-b-1 border-b-accent">
            All issues:
          </h2>
          <ul className="flex flex-col gap-2">
            <li>2025 - Volume 1</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-8 sm:border-l-border-primary sm:border-l-1 sm:pl-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold pb-2 border-b-2 w-fit">
            2025 — Volume 1
          </h2>
          <div className="flex flex-col gap-8">
            <IssueCard
              {...{
                id: 1,
                issueName: "Volume 1",
                info: "In progress",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
