import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/login/Login";

export const AppRouter = () => {

  return (
    <>
      <Routes>
        <Route index element={<Login />} />

        <Route path="/*" element={<Navigate to={""} />} />
      </Routes>
    </>
  )
}