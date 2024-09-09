import { Car, BackWheel, FrontWheel } from "@/images";

export const CarCom = () => {
  return (
    <div className="mb-80">
      <div className="absolute z-10">
        <div className="relative w-full z-20">
          <Car />
        </div>
        <div className="flex items-center gap-14">
          <div className="z-20 absolute h-[107px] w-[107px] bottom-12 left-[355px]">
            <BackWheel />
          </div>
          <div className="z-20 absolute h-[107px] w-[107px] bottom-12 left-[757px]">
            <FrontWheel />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="border-slate-800 border top-52 relative"></div>
        <div className="road flex justify-center items-center top-72"></div>
      </div>
    </div>
  );
};
