import getResponse from '@/utils/getResponse'
import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
export async function GET() {
  const supabase = createClient()
  const { data: menu } = await supabase.from('menu').select()

  return getResponse(menu, 'Menu fetched successfully', 200)
}

export async function POST(req: NextRequest) {
  const supabase = createClient()
  const data = await req.formData()
  const { data:dataUpload, error:errUpload } = await supabase.storage.from('menu').upload(`${data.get("nama")}`, data.get('foto') as File)
  
  if (errUpload) return getResponse(errUpload, 'Failed to upload image', 400)
  const { data:dataImg } = await supabase.storage.from('menu').getPublicUrl(`${dataUpload.path}`)
  const { data: menu, error } = await supabase.from('menu').insert([{
    nama: data.get('nama'),
    harga: data.get('harga'),
    deskripsi: data.get('deskripsi'),
    kategori: data.get('kategori'),
    status: data.get('status'),
    foto:dataImg.publicUrl
  }]).select()

  if (error) {
    console.error('Menu Post failed', error)
    getResponse(error, 'Menu Post failed', 400)
  }

  return getResponse(menu, 'Menu Post successfully', 201)
}


