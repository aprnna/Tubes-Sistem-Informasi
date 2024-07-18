"use client";
import { useEffect, useState } from "react";
import fetchApi from "@/utils/fetchApi";
import Table from "@/components/table";
import { Loading } from "@/components/loading";
import { toast } from "react-toastify";
import Modal from "@/components/modal2";
import { useDisclosure } from "@nextui-org/modal";
export default function TableMenu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const modal = useDisclosure();
  const [idMenu, setIdMenu] = useState(0);

  async function getMenu() {
    setLoading(true);
    const { data } = await fetchApi("/menu", "GET");

    setMenu(data);
    setLoading(false);
  }

  const handleEdit = (id: number) => {
    console.log("Edit item with id:", id);
    // Tambahkan logika untuk mengedit item
  };

  const handleDelete = async (id: number) => {
    console.log("Delete item with id:", id);
    setIdMenu(id);
    modal.onOpen();
  };

  const handleDeleteSubmit = async (e: any) => {
    e.preventDefault();
    const response = await toast.promise(
      fetchApi(`/menu/${idMenu}`, "DELETE"),
      {
        pending: "Delete Menu...",
        success: "Berhasil menghapus Menu",
        error: "Gagal menghapus Menu",
      }
    );

    modal.onClose();
    window.location.reload();
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
        <Loading />
      ) : (
        <Table
          columns={columns}
          data={menu}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
      <Modal
        isOpen={modal.isOpen}
        onOpenChange={modal.onOpenChange}
        btnActionTitle="Delete"
        title="Delete Menu"
        submit={handleDeleteSubmit}
      >
        <h1>Are you sure want to delete this menu?</h1>
      </Modal>
    </div>
  );
}
