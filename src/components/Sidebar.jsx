export function Sidebar(props) {
  return (
    <div>
      <div
        className={`dark:bg-night overflow-y-auto p-5 shadow-lg z-50 right-0 fixed h-full w-full md:w-[50%] lg:w-[35%]
         bg-white transition duration-700 transform top-0 
    ${props.isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={props.onClickClose}
          className="absolute dark:text-white right-4 top-4 p-2 text-black font-bold"
        >
          X
        </button>
        {props.children}
      </div>
          {props.isOpen && (<div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />)}
    </div>
  );
}
