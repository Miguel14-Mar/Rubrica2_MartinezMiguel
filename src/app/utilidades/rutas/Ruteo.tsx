import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { MenuMarca } from "../../componentes/menu/MenuMarca";
import { AdministrarMarca } from "../../componentes/menu/AdministrarMarca";
import { ListarMarca } from "../../componentes/menu/ListarMarca";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { MenuActualizar } from "../../componentes/menu/MenuActualizar";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/mencre" element={<MenuMarca />} />

      <Route path="/melist" element={<ListarMarca />} />

      <Route path="/menadmin" element={<AdministrarMarca />} />

      <Route path="/menactu/:codigo" element={<MenuActualizar />} />

      <Route path="/menacer" element={<Acerca />} />

      <Route path="/*" element={<NoEncontrado />} />

    </Routes>
  );
};

