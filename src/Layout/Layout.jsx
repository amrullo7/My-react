
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const [body, setBody] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const { t, i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("theme", body ? "dark" : "light");
  }, [body]);

  return (
    <div
      style={{
        backgroundColor: body ? "#111827" : "white",
        color: body ? "white" : "black",
        minHeight: "100vh",
      }}
    >
      <div>
        <nav className="flex justify-center items-center gap-[180px] pt-[20px] w-[100%]">
          <div className="flex items-center gap-[35px]">
            <Link className="text-[16px]" to="/">
              {t("about")}
            </Link>

            <Link className="text-[16px]" to="/about">
              {t("catalogs")}
            </Link>

            <Link className="text-[16px]" to="/login">
              {t("login")}
            </Link>

            <Link className="text-[16px]" to="/products">
              {t("catalog")}
            </Link>

            <Link className="text-[16px]" to="/contacts">
              {t("contacts")}
            </Link>

            <button
              onClick={() => setBody((prev) => !prev)}
              className="border rounded px-3 py-1"
            >
              {body ? t("darkMode") : t("lightMode")}
            </button>

            <select
              value={i18n.resolvedLanguage}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="border rounded p-1 text-black"
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="tg">Тоҷикӣ</option>
            </select>
          </div>
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
