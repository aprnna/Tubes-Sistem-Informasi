"use client";
import { useEffect, useState } from "react";
import { title } from "@/components/primitives";
import fetchApi from "@/utils/fetchApi";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/table";

export default function AboutPage() {
  const [menu, setMenu] = useState([]);

  async function getMenu() {
    const {data} = await fetchApi("/menu","GET");

    console.log(data);

    return setMenu(data);
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
    <div>
      <h1 className={title()}>Menu</h1>
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
    </Table>
    </div>
  );
}
