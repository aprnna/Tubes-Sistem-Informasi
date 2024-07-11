"use client";
import { useEffect, useState } from "react";
import fetchApi from "@/utils/fetchApi";
import Table from "@/components/table";

export default function TablePesanan() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMenu() {
    setLoading(true);
    const {data} = await fetchApi("/pesanan", "GET");

    setMenu(data);
    setLoading(false);
  }

  useEffect(() => {
    getMenu();
  }, []);

  const columns = [
    {key: 'id', label: "Id Nota"},
    { key: "atasNama", label: "Atas Nama" },
    { key: "banyak_orang", label: "Banyak Orang" },
    { key: "created_at", label: "Dibuat" },
    { key: "status", label: "Status" },

  ];

  return (
    <>
        {loading ? (
            <div className="flex flex-col items-center h-auto p-10">
            <img alt="Loading..." className="max-w-14" src="/loading1.gif" />
            <p>Loading...</p>
            </div>
        ) : (
            <Table columns={columns} data={menu}/>
        )}
    </>
  );
}
