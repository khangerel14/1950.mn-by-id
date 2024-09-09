import blackbor from "../../public/Black_bordered_star.svg";

export const BlackBor = () => {
  return (
    <div>
      <img
        src={blackbor.src}
        alt=""
        height={34}
        width={34}
        className="z-20 absolute bg-cover right-3"
      />
    </div>
  );
};
