import { CountryGroup, Editor } from "../types/editors";

export function groupEditorsCountries(
  editors: Editor[],
  target = "BRICS",
): CountryGroup[] {
  const countryMap = new Map<string, number>();

  editors.forEach((editor) => {
    const count = countryMap.get(editor.country) || 0;
    countryMap.set(editor.country, count + 1);
  });

  return Array.from(countryMap.entries())
    .map(([name, quantity]) => ({ name, quantity }))
    .sort((a, b) => {
      const indexA = target.indexOf(a.name[0]);
      const indexB = target.indexOf(b.name[0]);

      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }

      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;

      return 0;
    });
}
