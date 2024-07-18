"use client";
import { useEffect, useState } from "react";
import fetchApi from "@/utils/fetchApi";
import Table from "@/components/table";
import { Loading } from "@/components/loading";
import { toast } from "react-toastify";
import Modal from "@/components/modal2";
import FormBahan from "./formBahan";
import { useDisclosure } from "@nextui-org/modal";
export default function TableBahan({ querySearch }: any) {
  const [bahan, setBahan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [editData, setEditData] = useState({});
  const [searchData, setSearchData] = useState([]);
  const modal = useDisclosure();

  async function getBahan() {
    setLoading(true);
    const { data } = await fetchApi("/bahan", "GET");

    setBahan(data);
    setLoading(false);
  }

  const handleEdit = async (id: number) => {
    console.log("Edit item with id:", id);
    const data = bahan.find((item: any) => item.id === id);

    if (data) setEditData(data);
    modal.onOpen();
  };

  const handleEditSubmit = async (e: any) => {
    e.preventDefault();
    setLoadingUpdate(true);
    const formData = new FormData(e.target);
    const dataUpdate = {
      nama: formData.get("nama"),
      jumlah: formData.get("jumlah"),
      satuan: formData.get("satuan"),
    };
    const response = await fetchApi(`/bahan/${editData.id}`, "PUT", dataUpdate);

    if (response.status == 200) toast.success("Berhasil mengedit bahan baku");
    else toast.error("Gagal mengedit bahan baku");
    setLoadingUpdate(false);
    window.location.reload();
  };

  const handleDelete = async (id: number) => {
    console.log("Delete item with id:", id);
    // Tambahkan logika untuk menghapus item
    const response = await toast.promise(fetchApi(`/bahan/${id}`, "DELETE"), {
      pending: "Delete Bahan Baku...",
      success: "Berhasil menghapus bahan baku",
      error: "Gagal menghapus bahan baku",
    });

    window.location.reload();
  };

  useEffect(() => {
    getBahan();
  }, []);

  useEffect(() => {
    const filteredData = bahan.filter((item: any) =>
      item.nama.toLowerCase().includes(querySearch.toLowerCase())
    );

    setSearchData(filteredData);
  }, [querySearch]);

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
        <>
          <Table
            columns={columns}
            data={querySearch == "" ? bahan : searchData}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
          <Modal
            btnActionTitle="Edit Bahan Baku"
            isOpen={modal.isOpen}
            loading={loadingUpdate}
            submit={handleEditSubmit}
            title="Edit Bahan Baku"
            onOpenChange={modal.onOpenChange}
            sizeModal="xl"
          >
            <FormBahan initialData={editData} />
          </Modal>
        </>
      )}
    </div>
  );
}
