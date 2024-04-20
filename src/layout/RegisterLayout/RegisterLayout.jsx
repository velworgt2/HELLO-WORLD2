import { Register } from "../../components/Register/Register";
import Logo from "../../../public/logo.svg";

export const RegisterLayout = () => {
  return (
    <section className="flex items-center h-screen w-full max-tablet:flex-col ">
      <div className="max-tablet:p-10 bg-[url('./public/image1.webp')] object-cover bg-cover h-screen filter w-full flex flex-col gap-3 items-center justify-center">
        <img src={Logo} alt="logo" className="w-32 h-32 rounded-md max-phone:w-20 max-phone:h-20" />
        <h3 className="text-6xl  max-phone:text-4xl font-bold text-white uppercase tracking-wider">
          Hello Word
        </h3>
        <p className="text-sm text-white capitalize font-normal">
          A forum for programmers who love technology.
        </p>
      </div>

      <Register />
    </section>
  );
};
