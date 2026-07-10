import { principles } from "../../data/about";
import PrincipleCard from "./PrincipleCard";

export default function PrincipleGrid() {
  return (
    <div
      className="
        grid
        gap-6
        grid-cols-1
md:grid-cols-2
      "
    >
      {principles.map((principle) => (
        <PrincipleCard
          key={principle.title}
          principle={principle}
        />
      ))}
    </div>
  );
}