'use client'

import React from "react";
import { useCart } from "./cartContext";

export const OrderDetails = (): JSX.Element => {
    const { cart } = useCart();

    const subTotal = cart.reduce((sum, item) => sum + item.harga * item.quantity, 0);
    const tax = subTotal * 0.05;
    const total = subTotal + tax;

    return (
        <div className=" w-[572px] h-full relative">
          <div className="flex flex-col drop-shadow-lg h-full">
            <div className="bg-white mt-12 mr-12 items-center justify-center rounded-t-lg py-4 px-6">
              <h1 className="font-bold text-3xl">Detail Pesanan</h1>
              <div className="flex flex-col gap-1 pt-1.5 text-gray-600">
                <div className="flex justify-between">
                  <h4>ID Pesanan</h4>
                  <input disabled className="text-end bg-white font-medium" type="text" value={"NT698320"} />
                </div>
                <div className="flex justify-between">
                  <h4>Atas Nama</h4>
                  <input className="text-end bg-white font-medium" type="text" value={"Kurniawan"} />
                </div>
                <div className="flex justify-between">
                  <h4>Jumlah Orang</h4>
                  <input className="text-end bg-white font-medium" type="number" value={5} />
                </div>
                <div className="flex justify-between">
                  <h4>Tanggal Pesanan</h4>
                  <input disabled className="text-end bg-white font-medium" type="datetime-local" />
                </div>
                <div className="flex justify-between">
                  <h4>ID Kasir</h4>
                  <input disabled className="text-end bg-white font-medium" type="text" value={"KS345789"} />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-3xl">Produk</h1>
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-row gap-2 mt-4">
                    <div className="flex border rounded-lg max-w-20 max-h-20">
                      <img alt={item.nama} className="rounded-lg" src={item.foto} />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h1 className="text-xl font-bold">{item.nama}</h1>
                      <h2 className="font-semibold">Rp. {item.harga}</h2>
                    </div>
                    <div className="flex flex-row items-center">
                      <span>Qty: {item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col bg-white mr-12 py-6 px-6 drop-shadow-md shadow-inner gap-1">
              <div className="flex justify-between">
                <h4>Sub Total</h4>
                <h4 className="font-semibold">Rp. {subTotal.toFixed(2)}</h4>
              </div>
              <div className="flex justify-between">
                <h4>Tax (5%)</h4>
                <h4 className="font-semibold">Rp. {tax.toFixed(2)}</h4>
              </div>
              <div className="flex justify-between text-xl">
                <h4>Total</h4>
                <h4 className="font-bold">Rp. {total.toFixed(2)}</h4>
              </div>
              <button className="bg-amber-950 text-slate-50 py-3 px-5 w-full rounded-lg mt-6">
                Bayar
              </button>
            </div>
            {/* <div className="bg-white mr-12 items-center justify-center rounded-b-lg py-4 px-6">
              
            </div> */}
          </div>
        </div>
      );
};
