import { CiTrash } from "react-icons/ci";
import { Select } from "./Select";
import { QTY, SIZES } from "../constant";

export function CartItem(props) {
  console.log(props)
  return (
    <div className="cursor-pointer  p-2 bg-gray-50 dark:bg-transparent hover:bg-[#DAFFA2] space-y-2 dark:hover:bg-night-50">
      <div className=" space-x-2 flex">
        {/* Image */}
        <img className="h-24 " src={props.item.product.src} />

        <div className="space-y-2">
          {/* Title and description */}
          <div className="font-bold dark:text-white">{props.item.product.title}</div>
          <div className="text-sm text-gray-400">{props.item.product.description}</div>
        </div>
        {/* Price */}
        <div className="font-bold dark:text-white">{props.item.product.price}$</div>
      </div>

      <div className="flex justify-between">
        <div className="flex space-x-6 pl-32">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              value={props.item.size}
              title=""
              options={SIZES}
              className="w-16 p-1 pl-2"
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              value={props.item.qty}
              title=""
              options={QTY}
              className="w-16 p-1 pl-2"
            />
          </div>
        </div>
        <button onClick={() => props.onClickTrash(props.item.product.id)}>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}
