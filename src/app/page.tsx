import Carousel from "./components/Carousel";
import Logo from "./components/Logo";
import MakeOrder from "./components/MakeOrder";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-max flex-row items-center justify-around ">
      <div className="flex flex-col justify-center items-center lg:items-start w-1/2 min-h-screen sm:pl-20 ">
        <div className="inline-block mb-20 lg:mb-40">
        <Logo/>
          <h1 className="font-lilita-one text-3xl lg:text-7xl">Mojarra frita o asada</h1>
          <p className="font-lilita-one lg:text-3xl">Solo lo mejor, solo mojarras</p>
        </div>
        <div>
          <MakeOrder/>
        </div>
      </div>
      <div className="flex-col items-center w-1/2 min-h-screen justify-center hidden sm:flex ">
        <Carousel/>
      </div>
      

    </main>
  );
}
