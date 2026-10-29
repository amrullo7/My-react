
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { useTranslation } from "react-i18next";
import logo from "../Layout/img/Frame 64 (1).png";

const Layout = () => {
  const { t, i18n } = useTranslation();

  const [body, setBody] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", body ? "dark" : "light");
  }, [body]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div
      style={{
        backgroundColor: body ? "#111827" : "white",
        color: body ? "white" : "black",
        minHeight: "100vh",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <nav className="flex flex-wrap justify-center items-center gap-8 lg:gap-[100px] pt-[20px] px-6">
        <img src={logo} alt="Logo" className="w-[150px] object-contain" />

        <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-[35px]">
          <Link to="/">{t("About Us")}</Link>
          <Link to="/about">{t("Services")}</Link>
          <Link to="/login">{t("Portfolio")}</Link>
          <Link to="/products">{t("Pages")}</Link>
          <Link to="/contacts">{t("Cart")}</Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setBody((prev) => !prev)}
            className="border rounded px-3 py-1"
          >
            {body ? t("lightMode") : t("darkMode")}
          </button>

          <select
            value={i18n.resolvedLanguage || "en"}
            onChange={(e) => changeLanguage(e.target.value)}
            className="border rounded p-1 text-black"
            aria-label="Choose language"
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="tg">Тоҷикӣ</option>
          </select>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
