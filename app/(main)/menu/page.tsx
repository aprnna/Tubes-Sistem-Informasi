"use client";
import { useEffect, useState } from "react";
import { title } from "@/components/primitives";
import Sidebar from "@/components/sidebar";
import fetchApi from "@/utils/fetchApi";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/table";
import { Button } from "@nextui-org/button";

export default function AboutPage() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMenu() {
    setLoading(true);
    const {data} = await fetchApi("/menu","GET");

    setMenu(data);
    setLoading(false);
  }

  useEffect(() => {
    getMenu();
  },[]);

  const columns = [
    {
      key: "nama",
      label: "NAME",
    },
    {
      key: "harga",
      label: "Harga",
    },
    {
      key: "deskripsi",
      label: "DESKRIPSI",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  return (
    <div className="w-full h-screen bg-slate-50 flex">
      <Sidebar />
      {/* <div className="bg-slate-200 w-auto">
        <>
        </>
      </div> */}
      <div className="w-full p-10">
        <h1 className={title()}>Menu</h1>
        {loading ? ( // Tampilkan komponen loading saat status loading true
          <div className="flex flex-col items-center h-auto p-10">
            <img alt="Loading..." className="max-w-14" src="/loading1.gif" />
            <p>Loading...</p>
          </div>
        ) : (
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={menu}>
            {(item:any) => {
              
              if(item.status == 1){
                item.status = "Available";
              }else{
                item.status = "Not Available";
              }

              return (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
              )
            }}
          </TableBody>
        </Table>)}
      </div>
    </div>
  );
}
