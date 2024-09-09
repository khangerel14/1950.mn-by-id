import { Map } from "@/images/Map";
import { ChancesButt } from "./ChancesButt";

export const Chances = () => {
  return (
    <div className="">
      <div className="relative">
        <Map />
        <div className="flex flex-col absolute z-20 top-24 w-full border-t-2 border-slate-800">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="font-bold text-4xl mt-20 text-white">Боломжууд</h1>
            <p className="text-lg text-slate-600">
              Та 1950 хэрэглэгчийн апплаппликэйшнийг ашиглан дараах боломжуудыг
              эдлээрэй.
            </p>
          </div>
          <ChancesButt />
        </div>
      </div>
    </div>
  );
};
