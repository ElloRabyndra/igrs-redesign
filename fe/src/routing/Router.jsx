import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Games from "../pages/Games";
import ColorPalettePreview from "../components/dev/ColorPalettePreview";
import NotFound from "../pages/NotFound";
import OnDevelopment from "../pages/OnDevelopment";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/daftar-game" element={<Games />} />
      <Route path="/informasi-rating" element={<OnDevelopment />} />
      <Route path="/konsultasi-adiksi" element={<OnDevelopment />} />
      <Route path="/color-palette" element={<ColorPalettePreview />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
