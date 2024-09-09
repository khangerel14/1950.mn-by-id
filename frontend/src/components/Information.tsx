import { Submitted } from "@/components";

export const Information = () => {
  return (
    <div className="flex flex-col gap-14 w-96 h-fit mx-auto pt-44 text-white">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Нэр</label>
        <input
          type="text"
          className="border w-full h-10 outline-none p-2 px-3 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Имэйл</label>
        <input
          type="email"
          name="email"
          className="border w-full h-10 outline-none p-2 px-3 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="information">Мэдээлэл</label>
        <textarea className="border w-full h-24 outline-none p-2 px-3 rounded-lg"></textarea>
      </div>
      <Submitted />
    </div>
  );
};
