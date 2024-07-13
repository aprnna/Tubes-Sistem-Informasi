import UserTable from "@/components/UserTable";
import React from "react";
// import { title } from "@/components/primitives";
import { User } from './colomn';

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  )
  const data = await res.json()
  return data
}

export default function stok() { //deklaration
  // const users = await getUsers()
  return (
//     <div>
//       <h1 className={title()}>Stok
//  </h1>
//     </div>
//   );

    <section className='py-24'>
    <div className="container">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Stok</h1>
              <div className="space-x-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Riwayat Bahan Baku</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Tambah Bahan Baku</button>
              </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-full"
          />
        </div>
    </div>
    <UserTable/>
    </section>
    )
}




