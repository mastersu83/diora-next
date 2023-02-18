import React from "react";
import classes from "./AdminLogin.module.scss";
import { AdminForm } from "@/commons/AdminForm";

const Page = () => {
  return (
    <div className={classes.admin}>
      <p className={classes.admin__title}>Войти в панель администратора</p>
      <AdminForm />
    </div>
  );
};

export default Page;
