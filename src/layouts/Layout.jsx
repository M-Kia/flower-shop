import React, { useMemo } from "react";

import { useRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";
import MiniHeader from "./MiniHeader";

export default function Layout({ children }) {
  const router = useRouter();

  const header = useMemo(() => {
    if (["/", "/collection"].includes(router.pathname)) {
      return <Header />;
    } else if (["/single-product"].includes(router.pathname)) {
      return <MiniHeader />;
    }
    return <></>;
  }, [router.pathname]);

  return (
    <div className="mx-5">
      {header}
      {children}
      <Footer />
    </div>
  );
}
