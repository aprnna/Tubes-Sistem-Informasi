'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import getResponse from '@/utils/getResponse'

export async function POST(req: NextRequest) {
  const supabase = createClient()
  const data = await req.formData();
  const { data:dataAuth, error } = await supabase.auth.signInWithPassword({
    email: data.get('email') as string,
    password: data.get('password') as string,
  })

  if (error) {
    redirect('/error')
  }
  getResponse(dataAuth, 'success login', 200)
  revalidatePath('/', 'layout')
  redirect('/')
  
}
