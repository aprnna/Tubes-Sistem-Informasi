import getResponse from "@/utils/getResponse";
import { createClient } from "@/utils/supabase/server";
import { NextRequest } from "next/server";

export async function PUT(req:NextRequest,{params}:any) {
  const supabase = createClient()
  const { id } = params
  const {
    nama, jumlah, satuan
  } = await req.json();
  const { data: updateData, error } = await supabase.from('bahan_baku').update([{
    nama: nama,
    jumlah: jumlah,
    satuan: satuan,
  }]).eq('id',id).select()

  if (error) return getResponse(error,"Failed update bahan baku",400)

  return getResponse(updateData, "Success Update bahan baku",200)
}

export async function GET(req:NextRequest,{params}:any) {
  const supabase = createClient()
  const {id} = params
  const {data, error} = await supabase.from('bahan_baku').select().eq('id',id)

  if (error) return getResponse(error,"Failed get bahan baku",400)
    
  return getResponse(data, "Success Get bahan baku",200)
}

export async function DELETE(req:NextRequest,{params}:any) {
  const supabase = createClient()
  const {id} = params
  const {data, error} = await supabase.from('bahan_baku').delete().eq('id',id)

  if (error) return getResponse(error,"Failed delete bahan baku",400)
    
  return getResponse(data, "Success Delete bahan baku",200)
}