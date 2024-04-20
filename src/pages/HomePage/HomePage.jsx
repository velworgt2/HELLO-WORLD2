
import { NavMenu } from "../../components/NavMenu/NavMenu";
import {Paneles} from "./Paneles.jsx";
import   './style_home/panel_carrusel.css'
import '../HomePage/style_home/paneles.css'
import FadeCarousel from "./slide";


export const HomePage = () => {

  return (
    <>
      <NavMenu />
      <main>

      </main>

        <FadeCarousel/>
        <Paneles/>

    </>
  );
};
