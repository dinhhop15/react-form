import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LayoutAdmin = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/product");
    }
  }, [navigate, token]);

  return (
    <>
      <p>Sidebar</p>
      <Outlet />
    </>
  );
};

export default LayoutAdmin;
