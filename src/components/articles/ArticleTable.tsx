import { ITable } from "@/lib/types/articles";
import { MathJax } from "@/components/mathjax/MathJax";

interface ArticleTableProps {
  table: ITable;
}

export default function ArticleTable({ table }: ArticleTableProps) {
  return (
    <div className="pt-6 pb-3">
      <div
        id={`table-${table.number}`}
        className="pb-3 border-b-1 border-b-border-primary"
      >
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <tbody>
              {table.data.rows.map((row, i) => (
                <tr key={`row-${i}`}>
                  {row.cells.map((cell, j) => (
                    <td
                      key={`row-${i} cell-${j} ${cell.data}`}
                      className={`${cell.style?.bold ? "font-bold" : ""} ${
                        cell.style?.italic ? "italic" : ""
                      }
                  border border-border-primary
                  px-1 py-2
                  `}
                    >
                      <MathJax html={cell.data}></MathJax>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <span className="mt-8 block text-lg text-center">
          Table {table.number}. {table.title}
        </span>
      </div>
    </div>
  );
}
