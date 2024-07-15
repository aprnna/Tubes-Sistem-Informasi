"use client";
import { useEffect, useState, useRef } from "react";
import fetchApi from "@/utils/fetchApi";
import Table from "@/components/table";
import Modal from "@/components/modal";
import ImageUpload from "./imageUpload";

interface Menu {
  id: number;
  kategori: string;
  nama: string;
  harga: number;
  foto: string;
  deskripsi: string;
}

export default function TableMenu() {
  const [menu, setMenu] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [namaMenu, setNamaMenu] = useState('');
  const [hargaJual, setHargaJual] = useState(0);


  const [isAdding, setIsAdding] = useState(false);
  const [addKategori, setAddKategori] = useState('');
  const [inputKategori, setKategoriInput] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  

  async function getMenu() {
    setLoading(true);
    const {data} = await fetchApi("/menu", "GET");

    setMenu(data);
    setLoading(false);
  }

  const getCategories = async () => {
    const categories = menu.map((item:any) => item.kategori);
    const uniqueCategories = [...new Set(categories)];

    setCategories(uniqueCategories);
  }

  const handleAddClick = () => {
      setIsAdding(true);
  };

  useEffect(() => {
    if (isAdding && inputRef.current) {
        inputRef.current.focus();
    }
  }, [isAdding]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddKategori(e.target.value);
  };

  const handleAddCategorySubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && addKategori.trim() !== '') {
        setCategories([...categories, addKategori.trim()]);
        setAddKategori('');
        setIsAdding(false);
    }
  };

  const handleCategoryClick = (category: string) => {
    setKategoriInput(category);
  };

  const handleCancelAddMenu = () => {
    setShowMenuModal(false);
    setKategoriInput('');
  }

  const handleEdit = (id:number) => {
    console.log("Edit item with id:", id);
    setShowMenuModal(true);
    const menuToEdit = menu.find((item:any) => item.id === id);

    if (menuToEdit) {
      setKategoriInput(menuToEdit.kategori);
      setNamaMenu(menuToEdit.nama);
      setHargaJual(menuToEdit.harga);
    } else {
      console.error('Menu not found');
    }

    getCategories();
  };

  const handleDelete = (id:number) => {
    console.log("Delete item with id:", id);
    setShowDeleteModal(true);
    const menuToEdit = menu.find((item:any) => item.id === id);

    setNamaMenu(menuToEdit!.nama);

  };

  useEffect(() => {
    getMenu();
  }, []);

  const handleFileDrop = (file: File) => {
    setSelectedFile(file);
  }

  const handleNamaManu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamaMenu(e.target.value);
  }

  const handleHargaJual = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHargaJual(Number(e.target.value));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
        nama: formData.get('nama'),
        harga: formData.get('harga'),
        deskripsi: "",
        kategori: inputKategori as string,
        tersedia: true,
        foto: selectedFile as File
    };

    console.log(data);

    const { data: dataMenu } = await fetchApi("/menu", "POST", data);

    if (dataMenu.status == 400) return alert("GAGAL TAMBAH MENU");

    return alert("BERHASIL TAMBAH MENU");

    // return alert("BERHASIL REGISTER");
  }

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
        <>
          <Table columns={columns} data={menu} onDelete={handleDelete} onEdit={handleEdit}/>
          {showMenuModal && (
                <Modal key={showMenuModal ? 'show' : 'hide'} closeModal={() => handleCancelAddMenu()} showModal={showMenuModal}>
                <div className="min-w-[756px]">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mb-4">Tambah Menu</h2>
                        <div className="w-full border-t-2 border-dashed border-gray-400 my-4" />
                        <div className="flex gap-4">
                            <div className="flex flex-col w-1/2 text-base font-normal gap-3">
                                <div className="flex flex-col gap-1">
                                    <div className="flex justify-between">
                                        <label className="font-medium" htmlFor="namaMenu">Nama Menu</label>
                                        <span className="text-slate-500">Required</span>
                                    </div>
                                    <input
                                        required 
                                        className="border border-slate-200 outline-none p-2 px-6 rounded-lg placeholder-slate-300" 
                                        id="namaMenu" 
                                        name="nama" 
                                        placeholder="Nama Menu"
                                        type="text"
                                        value={namaMenu}
                                        onChange={handleNamaManu}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex justify-between">
                                        <label className="font-medium" htmlFor="hargaJual">Harga Jual</label>
                                        <span className="text-slate-500">Required</span>
                                    </div>
                                    <input
                                        required
                                        className="border border-slate-200 outline-none p-2 px-6 rounded-lg placeholder-slate-300" 
                                        id="hargaJual" 
                                        min={0} 
                                        name="harga" 
                                        placeholder="Harga Jual"
                                        type="number"
                                        value={hargaJual}
                                        onChange={handleHargaJual}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex justify-between">
                                        <label className="font-medium" htmlFor="kategori">Kategori</label>
                                        <span className="text-slate-500">Required</span>
                                    </div>
                                    <div className="flex border-slate-200 bg-slate-100 border rounded-lg">
                                        <input
                                            disabled 
                                            className="outline-none p-2 px-6 w-full placeholder-slate-300" 
                                            id="kategori" 
                                            name="kategori" 
                                            placeholder="Kategori"
                                            type="text"
                                            value={inputKategori}
                                        />
                                        <svg className="mr-4 h-full" height="38" viewBox="0 0 35 38" width="35" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5 23.6766L25 16.1766L23.1467 14.3234L17.5 19.9701L11.8533 14.3234L10 16.1766L17.5 23.6766Z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-col p-2 border-slate-200 border rounded-lg max-h-40 overflow-auto">
                                    {isAdding ? (
                                        <input
                                            ref={inputRef}
                                            className="p-2 w-full"
                                            placeholder="Masukkan nama kategori"
                                            type="text"
                                            value={addKategori}
                                            onChange={handleInputChange}
                                            onKeyDown={handleAddCategorySubmit}
                                        />
                                    ) : (
                                        <button className="flex gap-3 hover:bg-red-50 w-full py-1 rounded-lg" onClick={handleAddClick}>
                                            <svg className="text-slate-900" height="25" viewBox="0 0 26 25" width="26" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.1667 5V11.6667H5.5V13.3333H12.1667V20H13.8333V13.3333H20.5V11.6667H13.8333V5H12.1667Z"/>
                                            </svg>
                                            <h2>Tambah Kategori</h2>
                                        </button>
                                    )}
                                    <div>
                                        {categories.map((category, index) => (
                                            <button key={index} className="mt-2 flex gap-3 hover:bg-red-50 w-full py-1 rounded-lg" type="button" onClick={() => handleCategoryClick(category)}>
                                                <svg fill="none" height="26" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.4512 9.12781C16.1494 8.82605 15.7744 8.67664 15.3994 8.67664H7C6.17383 8.67664 5.5 9.35046 5.5 10.1766V16.1766C5.5 17.0028 6.17383 17.6766 7 17.6766H15.3994C15.7744 17.6766 16.1494 17.5272 16.4512 17.2255L20.5 13.1766L16.4512 9.12781ZM16.75 13.9266C16.3369 13.9266 16 13.5897 16 13.1766C16 12.7635 16.3369 12.4266 16.75 12.4266C17.1631 12.4266 17.5 12.7635 17.5 13.1766C17.5 13.5897 17.1631 13.9266 16.75 13.9266Z" fill="#252525"/>
                                                </svg>
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <ImageUpload onFileDrop={handleFileDrop} />
                        </div>
                        <div className="border-t-2 border-dashed border-gray-400 my-4" />
                        <div className="flex justify-end font-normal gap-3 h-auto">
                            <button 
                                className="bg-amber-950 text-base text-slate-50 py-3 px-8 rounded-xl hover:bg-amber-900 transition-all duration-300"
                                onClick={()=> handleCancelAddMenu()}
                            >
                                Cancel
                            </button>
                            <button 
                                className="bg-amber-950 text-base text-slate-50 py-3 px-6 rounded-xl hover:bg-amber-900 transition-all duration-300"
                                type="submit"
                            >
                                Simpan dan Tambah Foto
                            </button>
                        </div>
                    </form>
                </div>
                </Modal>
            )}

            {showDeleteModal && (
              <Modal key={showDeleteModal ? 'show' : 'hide'} closeModal={() => setShowDeleteModal(false)} showModal={showDeleteModal}>
                <h2 className="text-2xl font-bold mb-4">Alert</h2>
                <div className="w-full border-t-2 border-dashed border-gray-400 my-4" />
                <p>Anda yakin akan menghapus menu {namaMenu}.</p>
                <div className="flex gap-3">
                  <button 
                    className="bg-amber-950 text-slate-50 py-3 px-8 w-full rounded-lg mt-8 hover:bg-amber-900 transition-all duration-300"
                    onClick={()=> setShowDeleteModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="bg-amber-950 text-slate-50 py-3 px-8 w-full rounded-lg mt-8 hover:bg-amber-900 transition-all duration-300"
                    onClick={()=> setShowDeleteModal(false)}
                  >
                    Hapus
                  </button>
                </div>
              </Modal>
          )}
        </>
      )}
    </div>
  );
}
