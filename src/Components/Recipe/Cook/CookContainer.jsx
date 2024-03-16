import Cook from "./Cook";
// import CurrentlyCook from "./CurrentlyCook";


export default function CookContainer() {
  return (
    <div className="col-span-1 mt-16">
        <div className="border border-[#28282833] py-8  rounded-xl">
        <Cook/>
        {/* <CurrentlyCook/> */}
        </div>
    </div>
  )
}
