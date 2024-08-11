
import { Card } from "./Card";

export function NewArrivalsSection(props) {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="dark:text-white bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>
      <div className="mt-10 gap-x-6 grid grid-cols-1 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
        {props.items.map((item) => (
          <Card key={item.id} item={item} onClick={props.onClickCard} />
        ))}
      </div>
    </div>
  );
}
