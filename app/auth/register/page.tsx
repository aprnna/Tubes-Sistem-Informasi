"use client"
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import {Select, SelectItem} from "@nextui-org/select";
import fetchApi from '@/utils/fetchApi';

export default function RegisterPage() {
  const roles = [
    {
      label: 'Pelayan',
      value: 'pelayan'
    },{
      label: 'Koki',
      value: 'koki'
    
    },{
      label: 'Kasir',
      value: 'kasir'
    }
  ]
  
  async function handleSubmit(e:any) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
      nama: formData.get('nama'),
      umur: formData.get('umur'),
      no_hp: formData.get('no_hp'),
      role: formData.get('role')
    }
    const response = await fetchApi('/auth/register',"POST",{
      body: data
    })
    
    console.log(response)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input required label="Email" name="email" type="email" />
        <Input required label="Password" name="password" type="password" />
        <Input required label="Nama Lengkap" name='nama' type="text"/>
        <Input required label="Umur" name='umur' type="number"/>
        <Input required label="Nomor Handphone" name='no_hp' type="number"/>
        <Select
          className="max-w-xs"
          items={roles}
          label="Roles"
          name='role'
        >
          {(animal) => <SelectItem key={animal.value}>{animal.label}</SelectItem>}
        </Select>
        <Button color='primary' type='submit'>Register</Button>
      </form>
    </div>
  
  )
}