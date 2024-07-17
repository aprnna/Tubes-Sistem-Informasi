import React from "react";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
export default function FormBahan() {
  const satuanList = [
    {
      key: "kg",
      label: "Kilogram",
    },
    {
      key: "gr",
      label: "Gram",
    },
    {
      key: "ons",
      label: "Ons",
    },
    {
      key: "lt",
      label: "Liter",
    },
    {
      key: "ml",
      label: "Mililiter",
    },
    {
      key: "pcs",
      label: "Pcs",
    },
  ];

  return (
    <>
      <Input
        label="Nama Bahan"
        labelPlacement="outside"
        name="nama"
        placeholder="Nama Bahan Baku"
        size="lg"
      />
      <div className="flex gap-5">
        <Input
          label="Jumlah"
          labelPlacement="outside"
          name="jumlah"
          placeholder="Jumlah"
          size="lg"
        />
        <Select
          className="max-w-xs"
          label="Satuan"
          labelPlacement="outside"
          name="satuan"
          placeholder="Satuan"
          size="lg"
        >
          {satuanList.map((satuan) => (
            <SelectItem key={satuan.key}>{satuan.label}</SelectItem>
          ))}
        </Select>
      </div>
    </>
  );
}
