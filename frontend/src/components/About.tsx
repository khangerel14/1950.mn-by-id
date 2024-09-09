import { Apple, Playstore } from "@/images";

export const About = () => {
  return (
    <div className="flex flex-col items-start max-w-screen-xl px-10 mx-auto text-white bg-black py-40 h-[850px]">
      <svg
        viewBox="150 50 1500 600"
        className="flex justify-center w-full top-32 relative"
      >
        <text x="60%" y="100%" textAnchor="middle" fill="transparent">
          1950
        </text>
      </svg>
      <div className="flex flex-col justify-between mx-auto gap-32 absolute bg-transparent">
        <div>
          <h1 className="border border-red-600 px-3 py-1 rounded-3xl w-fit">
            Монголын анхдагч лавлах үйлчилгээ
          </h1>
        </div>
        <div className="flex flex-col gap-9">
          <h1 className="text-5xl font-medium">Яаралтай Такси дуудах бол?</h1>
          <p className="text-4xl">1950 Апп татаарай</p>
        </div>
        <div className="flex gap-8 items-center">
          <button className="flex gap-3 rounded-full px-5 p-3 border items-center shadow-xl bg-white text-black">
            <Apple />
            <div>
              <h1>Available on the</h1>
              <p className="text-gray-500 font-normal">App Store</p>
            </div>
          </button>
          <button className="flex gap-3 rounded-full px-8 p-3 border items-center shadow-xl bg-white text-black">
            <Playstore />
            <div>
              <h1>Get in on</h1>
              <p className="text-gray-500 font-normal">Google Play</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
