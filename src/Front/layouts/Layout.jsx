import React, { useMemo } from "react";

import { useRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const router = useRouter();

  const header = useMemo(() => {
    if (["/", "/collection"].includes(router.pathname)) {
      return <Header />;
    }
    return <></>;
  }, [router.pathname]);

  return (
    <>
      {header}
      {children}
      <Footer />
    </>
  );
}
