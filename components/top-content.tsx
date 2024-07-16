"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import fetchApi from "@/utils/fetchApi";

const TopContent = (): JSX.Element => {
  const pathname = usePathname();
  const [data, setData] = useState({ nama: "", role: "" });
  const [loading, setLoading] = useState(true);

  const pathTitles: { [key: string]: string } = {
    "/": "Home",
    "/menu": "Manajemen Menu",
    "/pesanan": "Pesanan",
    "/pesanan/add": "Menu",
    "/pesanan/ongoing": "Pesanan Diproses",
  };

  async function getUser() {
    const { data } = await fetchApi("/auth/current-user", "GET");

    setData(data);
    setLoading(false);

    return data;
  }
  useEffect(() => {
    getUser();
  }, []);
  const currentTitle = pathTitles[pathname] || "Menu";

  return (
    <div className="flex bg-amber-950 text-red-100 justify-between items-center py-2 px-8 ">
      <div className="flex gap-5 items-center">
        <button className="bg-orange-900 p-2 rounded-lg hover:bg-orange-600 transition-all duration-300">
          <img alt="" src="../arrow-left.svg" />
        </button>
        <h1 className="text-lg">{currentTitle}</h1>
      </div>
      <div className="flex gap-4 items-center">
        <img alt="profile.png" className="max-h-12" src="../profile.png" />
        <div className="text-lg">
          <p className="text-red-300 font-bold">
            {loading ? "Role" : data?.role}
          </p>
          <p>{loading ? "Nama" : data?.nama}</p>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
