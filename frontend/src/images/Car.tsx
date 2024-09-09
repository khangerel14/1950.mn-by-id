import ca from "../../public/car.png";

export const Car = () => {
  return (
    <div className="car relative">
      <img src={ca.src} height={130} width={1200} className="relative z-20" />
    </div>
  );
};
