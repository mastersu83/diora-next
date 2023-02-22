import React from "react";
import classes from "./AdminPanel.module.scss";
import { AdminPanelForm } from "@/commons/AdminPanelForm";
import { Button } from "@/commons/Button";

const AdminPanel = () => {
  const onLogOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className={classes.root}>
      <div className={classes.logOut__btn}>
        <Button text="Выйти" logOut onClick={onLogOut} />
      </div>
      <AdminPanelForm />
      {/*{localStorage.getItem("token") || isAuth ? (*/}
      {/*  <AdminPanelForm />*/}
      {/*) : (*/}
      {/*  <Navigate to="/" />*/}
      {/*)}*/}
    </div>
  );
};

export default AdminPanel;
