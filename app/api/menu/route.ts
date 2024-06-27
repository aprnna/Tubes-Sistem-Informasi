import getResponse from '@/utils/getResponse'
import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
export async function GET() {
  const supabase = createClient()
  const { data: menu } = await supabase.from('menu').select()

  return getResponse(menu, 'Menu fetched successfully', 200)
}

export async function POST() {
  const supabase = createClient()
  const { data: menu } = await supabase.from('menu').select()

  return getResponse(menu, 'Menu Post successfully', 201)
}


