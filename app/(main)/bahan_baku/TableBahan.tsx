"use client";
import { useEffect, useState } from "react";
import fetchApi from "@/utils/fetchApi";
import Table from "@/components/table";
import { Loading } from "@/components/loading";

export default function TableBahan() {
  const [bahan, setBahan] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getBahan() {
    setLoading(true);
    const { data } = await fetchApi("/bahan", "GET");

    setBahan(data);
    setLoading(false);
  }

  const handleEdit = (id: number) => {
    console.log("Edit item with id:", id);
    // Tambahkan logika untuk mengedit item
  };

  const handleDelete = (id: number) => {
    console.log("Delete item with id:", id);
    // Tambahkan logika untuk menghapus item
  };

  useEffect(() => {
    getBahan();
  }, []);

  const columns = [
    { key: "nama", label: "Nama Bahan" },
    { key: "jumlah", label: "Jumlah" },
    { key: "satuan", label: "Satuan" },
    { key: "action", label: "Action" },
  ];

  return (
    <div className="w-full h-auto">
      {/* <h1 className="text-2xl font-bold">Menu</h1> */}
      {loading ? (
        <Loading />
      ) : (
        <Table
          columns={columns}
          data={bahan}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}
