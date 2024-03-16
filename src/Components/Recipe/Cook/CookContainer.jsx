import Cook from "./Cook";
import CurrentlyCook from "./CurrentlyCook";


export default function CookContainer() {
  return (
    <div className="col-span-1 mt-16">
        <Cook/>
        <CurrentlyCook/>
    </div>
  )
}
