'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(req: NextRequest) {
  const supabase = createClient()
  const data = await req.formData();
  const { data:dataAuth, error } = await supabase.auth.signUp({
    email: data.get('email') as string,
    password: data.get('password') as string,
  })

  if (error) {
    redirect('/error')
  }

  const { error:errorInsert } = await supabase.from('users').upsert({
    id: dataAuth.user?.id as string,
    full_name: data.get('full_name') as string,
    age: data.get('age'),
    updated_at: new Date().toISOString(),
  })

  if(errorInsert) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}