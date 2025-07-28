import { Routes, Route } from "react-router";
import { HomePage } from "./page/home";
import { BrowserRouter } from "react-router-dom";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
