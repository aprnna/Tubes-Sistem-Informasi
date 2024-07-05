import React from "react";

export const OrderDetails = (): JSX.Element => {
  return (
    <div className=" min-w-[572px] h-full">
        <div className="flex flex-col drop-shadow-lg h-full">
            <div className="bg-white mt-12 mr-12 items-center justify-center rounded-t-lg py-4 px-6">
                <h1 className="font-bold text-3xl">Detail Pesanan</h1>
                <div className="flex flex-col gap-1 pt-1.5 text-gray-600">
                    <div className="flex justify-between">
                        <h4>ID Pesanan</h4>
                        <input disabled className="text-end bg-white font-medium" type="text" value={"NT698320"}/>
                    </div>
                    <div className="flex justify-between">
                        <h4>Atas Nama</h4>
                        <input className="text-end bg-white font-medium" type="text" value={"Kurniawan"}/>
                    </div>
                    <div className="flex justify-between">
                        <h4>Jumlah Orang</h4>
                        <input className="text-end bg-white font-medium" type="number" value={5}/>
                    </div>
                    <div className="flex justify-between">
                        <h4>Tanggal Pesanan</h4>
                        <input disabled className="text-end bg-white font-medium" type="datetime-local"/>
                    </div>
                    <div className="flex justify-between">
                        <h4>ID Kasir</h4>
                        <input disabled className="text-end bg-white font-medium" type="text" value={"KS345789"}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-3xl">Produk</h1>
                    <div className="flex flex-row gap-2 mt-2">
                        <div className="flex border rounded-lg">
                            <img alt="burger" src="./burger.png" />
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col justify-center">
                            <h1 className="font-bold">Burger</h1>
                                <div className="flex text-sm">
                                    <input disabled className="bg-white w-1/2" type="text" value={"Rp. 35.000"}/>
                                    <input disabled className="w-1/2 bg-white"type="text" value={"2X"}/>
                                </div>
                            </div>
                            <input disabled className="text-end bg-white" type="text" value={"Rp. 70.000"}/>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 mt-2">
                        <div className="flex border rounded-lg">
                            <img alt="burger" src="./burger.png" />
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col justify-center">
                            <h1 className="font-bold">Burger</h1>
                                <div className="flex text-sm">
                                    <input disabled className="bg-white w-1/2" type="text" value={"Rp. 35.000"}/>
                                    <input disabled className="w-1/2 bg-white"type="text" value={"2X"}/>
                                </div>
                            </div>
                            <input disabled className="text-end bg-white" type="text" value={"Rp. 70.000"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 bg-white mr-12 justify-center rounded-b-lg py-4 px-6 drop-shadow-md shadow-inner">
                <>
                    <div className="flex justify-between">
                        <h4>Sub Total</h4>
                        <input disabled className="text-end bg-white font-medium" type="text" value={"Rp. 145.000"}/>
                    </div>
                    <div className="flex justify-between">
                        <h4>Pajak (5%)</h4>
                        <input disabled className="text-end bg-white font-medium" type="text" value={"Rp. 7.250"}/>
                    </div>
                </>
                <div className="flex justify-between text-lg font-bold">
                        <h4>Total</h4>
                        <input disabled className="text-end bg-white" type="text" value={"Rp. 152.250"}/>
                </div>
                <button className="bg-amber-950 text-slate-50 py-3 rounded-lg mt-2 hover:bg-amber-900 transition-all duration-300">Bayar</button>
            </div>
        </div>
    </div>
  );
};
