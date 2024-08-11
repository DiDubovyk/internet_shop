import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

export function Select(props) {
  return (
    <div className="relative dark:text-black">
      <select
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value || ""}
        className={twMerge(
          `w-24 appearance-none border  border-gray-300 p-4 ${props.className}`
        )}
      >
        <option value="" disabled hidden>
          {props.title}
        </option>
        {props.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
