import React from "react";
import { Layout, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/images/logo.png";

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const { t } = useTranslation("header");

  const menu = (
    <Menu
      items={[
        { key: "1", label: t("menu.profile") },
        { key: "2", label: t("menu.settings") },
        { key: "3", label: t("menu.logout") },
      ]}
    />
  );

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px", 
        color: "#ffffff", // Texto del Header desde el token
      }}
    >
      {/* Logotipo y Título */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "40px",
            marginRight: "10px",
          }}
        />
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>{t("title")}</div>
      </div>

      {/* Menú de Usuario */}
      <Dropdown overlay={menu}>
        <Button type="text" style={{ color: "#ffffff" }}>
          {t("greeting")} <DownOutlined />
        </Button>
      </Dropdown>
    </Header>
  );
};

export default HeaderComponent;
