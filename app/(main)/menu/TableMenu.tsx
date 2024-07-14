"use client";
import { useEffect, useState } from "react";
import fetchApi from "@/utils/fetchApi";
import Table from "@/components/table";

export default function TableMenu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  

  async function getMenu() {
    setLoading(true);
    const {data} = await fetchApi("/menu", "GET");

    setMenu(data);
    setLoading(false);
  }

  const handleEdit = (id:number) => {
    console.log("Edit item with id:", id);
    // Tambahkan logika untuk mengedit item
  };

  const handleDelete = (id:number) => {
    console.log("Delete item with id:", id);
    // Tambahkan logika untuk menghapus item
  };

  useEffect(() => {
    getMenu();
  }, []);

  const columns = [
    { key: "nama", label: "Nama Makanan" },
    { key: "harga", label: "Harga" },
    { key: "kategori", label: "Kategori" },
    { key: "tersedia", label: "Tersedia" },
    { key: "action", label: "Action" },
  ];

  return (
    <div className="w-full h-auto">
      {/* <h1 className="text-2xl font-bold">Menu</h1> */}
      {loading ? (
        <div className="flex flex-col items-center h-auto p-10">
          <img alt="Loading..." className="max-w-14" src="/loading1.gif" />
          <p>Loading...</p>
        </div>
      ) : (
        <Table columns={columns} data={menu} onDelete={handleDelete} onEdit={handleEdit}/>
      )}
    </div>
  );
}
