'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(req: NextRequest) {
  const supabase = createClient()
  const data = await req.formData();

  const { error } = await supabase.auth.signUp({
    email: data.get('email') as string,
    password: data.get('password') as string,
  })

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}