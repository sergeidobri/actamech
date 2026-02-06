import SectionTitle from "@/components/ui/SectionTitle";
import SubjectAreasCard from "@/components/ui/SubjectAreasCard";

const subjectAreas = [
  "Space Flight Mechanics",
  "Space Operations",
  "Small Satellite Missions",
  "Earth Observations",
  "Space Sensors & Actuators",
  "Deep Space Exploration",
  "Space Materials & Structures",
  "Space Power & Propulsion",
  "Space Policy, Law & Economics",
];

export default function SubjectAreas() {
  return (
    <>
      <SectionTitle title="Subject Areas" />
      <section className="container mx-auto mt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {subjectAreas.map((area, index) => (
            <SubjectAreasCard key={index}>
              <span className="text-center w-full font-semibold">{area}</span>
            </SubjectAreasCard>
          ))}
        </div>
      </section>
    </>
  );
}
