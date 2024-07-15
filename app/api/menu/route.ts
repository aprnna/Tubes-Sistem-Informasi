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
  const {nama, harga, deskripsi, kategori, tersedia, foto} = await req.json();
  
  const { data:dataUpload, error:errUpload } = await supabase.storage.from('menu').upload(`${nama}`, foto as Blob)
  
  if (errUpload) {
    await supabase.storage.from('menu').remove([`${(dataUpload as any)?.path}`])
    
    return getResponse(errUpload, 'Failed to upload image', 400)
  }

  const { data:dataImg } = await supabase.storage.from('menu').getPublicUrl(`${dataUpload.path}`)
  const { data: menu, error } = await supabase.from('menu').insert([{
    nama: nama as string,
    harga: harga,
    deskripsi: deskripsi as string,
    kategori: kategori as string,
    tersedia: tersedia as boolean,
    foto:dataImg.publicUrl
  }]).select()

  if (error) {
    console.error('Menu Post failed', error)
    const {error:delError} = await supabase.storage.from('menu').remove([`${dataUpload.path}`])

    if (delError) return getResponse(delError, 'Failed to delete image', 400)
  
    return getResponse(error, 'Menu Post failed', 400)
  }

  return getResponse(menu, 'Menu Post successfully', 201)
}


