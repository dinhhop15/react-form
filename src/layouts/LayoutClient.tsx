import { Outlet } from "react-router-dom";

import { Footer } from "../components/Footer";
import Header from "../components/Hedead";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}
