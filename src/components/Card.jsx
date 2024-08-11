export function Card(props) {
    return (
      <div onClick={() => props.onClick(props.item)} className={`${props.item.className} max-w-xl cursor-pointer transform transition hover:scale-105`}>
        <div className="p-8">
          <div className="text-2xl font-bold">{props.item.title}</div>
          <div className="mt-10 font-semibold underline underline-offset-4">SHOP NOW +</div>
        </div>
        <img className="absolute top-5 left-[40%] h-40 w-56" src={props.item.src} />
      </div>
    );
}