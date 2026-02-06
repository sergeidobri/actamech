import IssueCard from "@/components/pages/issues/IssueCard";

export default function AllIssuesPage() {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-row divide-secondary">
        <div className="flex flex-col gap-8 pr-8 left_navigation-sticky min-w-1/5">
          <div>
            <h2 className="font-semibold pb-2 border-b-1 border-b-accent">
              All issues:
            </h2>
            <ul className="flex flex-col gap-2 mt-4">
              <li>2025 - Volume 1</li>
            </ul>
          </div>
        </div>
        <div className="pl-8 flex-1 flex flex-col gap-16 border-l-border-primary border-l-1">
          <div>
            <h2 className="text-xl font-semibold pb-2 border-b-2 w-1/2">
              2025 — Volume 1
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-8">
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
    </div>
  );
}
