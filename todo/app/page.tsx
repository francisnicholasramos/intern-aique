import Image from "next/image";
import Index from "./components/index";
// import Practice  from "./components/practice";
import './globals.css'

export default function Home() {

  let isFruit: boolean = true;
  let x: string = '1';
  let name: string;

  console.log(`Console result: `, typeof(x))
  return ( 
    <div>
      <Index />
      {/* <Practice /> */}
    </div>
  );
}
