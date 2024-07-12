import getResponse from '@/utils/getResponse'
import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const supabase = createClient()
  const { data: menu } = await supabase.from('bahan_baku').select()

  return getResponse(menu, 'Bahan Baku fetched successfully', 200)
}

export async function POST(req: NextRequest) {
  const supabase = createClient()
  const {
    nama, jumlah, satuan
  } = await req.json();
  const { data: bahan_baku, error } = await supabase.from('bahan_baku').insert([{
    nama: nama,
    jumlah: jumlah,
    satuan: satuan,
  }]).select()

  if (error) {
    console.error('Menu Post failed', error)
    
    return getResponse(error, 'Menu Post failed', 400)
  }

  return getResponse(bahan_baku, 'Bahan Post successfully', 201)
}


