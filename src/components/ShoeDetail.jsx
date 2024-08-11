import nike1 from "../assets/n1-min.png";
import { Select } from "./Select";
import { QTY, SIZES } from "../constant";
import { useState } from "react";
export function ShoeDetail(props) {
  const [form, setForm] = useState({qty: null, size: null})
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 dark:text-white">
      {/* Shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={props.shoe.src} className="animate-float" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        {/* Shoe text description */}
        <div className="text-5xl font-black md:text-9xl">
          {props.shoe.title}
        </div>
        <div className="font-medium md:text-xl">{props.shoe.description}</div>
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">
            {props.shoe.price}$
          </div>
          <Select
            value={form.qty}
            onChange={(qty) => setForm({ ...form, qty })}
            title={"QTY"}
            options={QTY}
          />
          <Select
            value={form.size}
            onChange={(size) => setForm({ ...form, size })}
            title={"SIZE"}
            options={SIZES}
          />
        </div>
        {/* Shoe buttons and links */}
        <div className="space-x-10">
          <button
            onClick={() => props.onClickAdd(props.shoe, form.qty, form.size)}
            className="btn-press-anim h-14 w-44 dark:bg-white dark:text-black bg-black text-white hover:bg-gray-900 active:bg-gray-700"
          >
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
