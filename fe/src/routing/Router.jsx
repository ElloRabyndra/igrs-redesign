import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import ColorPalettePreview from "../components/dev/ColorPalettePreview";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/color-palette" element={<ColorPalettePreview />} />
    </Routes>
  );
};

export default Router;
