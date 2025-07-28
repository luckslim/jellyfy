import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./page/login";
import { HomePage } from "./page/home";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
