import React from "../../public/wheel.png";

export const FrontWheel = () => {
  return (
    <div>
      <img
        src={React.src}
        alt="wheel"
        height={120}
        width={120}
        className="wheel absolute z-10 inset-0 bottom-2"
      />
    </div>
  );
};
