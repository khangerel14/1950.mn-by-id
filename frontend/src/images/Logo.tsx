import log from "../../public/Logo-1.svg";

export const Logo = () => {
  return (
    <div>
      <img src={log.src} alt="logo" height={85} width={85} />
    </div>
  );
};
