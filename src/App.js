import { product } from "./Product";
import Description from "./Description";
import Image from "./Image";
import Price from "./Price";
import Name from "./Name";
import Card from "./Card";

export default function App() {
  const firstName = "";
  return (
    <>
      <Card />
      <div className="mt-4 text-xl font-bold">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </div>
    </>
  );
}
