import "../styles/globals.scss";
import Header from "@/components/Header/Header";

import styles from "./page.module.css";
import BG from "@/assets/IndigoDesigns_BabyGirl_pp+(7)1.jpg";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <>
          <Image className={styles.bg} src={BG} alt="" />
          <div className={styles.layout}>
            <Header />
            <Menu />
            <div className={styles.main}>{children}</div>
            <Footer />
          </div>
        </>
      </body>
    </html>
  );
}
