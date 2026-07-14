import { principles } from "../../data/about";
import PrincipleCard from "./PrincipleCard";

export default function PrincipleGrid() {
  return (
    <div
      className="
grid
grid-cols-1
md:grid-cols-2
gap-6
"
    >
      {principles.map((principle, index) => (
  <div
    key={principle.title}
    className={
      index === 0 || index === 3
        ? "md:col-span-2"
        : ""
    }
  >
    <PrincipleCard principle={principle} />
  </div>
))      }
    </div>
  );
}