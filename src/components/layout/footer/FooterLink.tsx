import MainLink from "@/components/ui/MainLink";
import { Link } from "@/lib/types/navigation";

export default function FooterLink(params: Link) {
  let newClassName = "text-sm";
  if (params.className) {
    newClassName = `${newClassName} ${params.className}`;
  }
  return <MainLink {...params} className={newClassName} />;
}
