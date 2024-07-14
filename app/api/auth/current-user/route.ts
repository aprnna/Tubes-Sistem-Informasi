import getResponse from "@/utils/getResponse"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function GET() {
  const supabase = createClient()
  const {data:{user}} = await supabase.auth.getUser()

  if(!user)redirect('/auth/login') 
  const { data:dataUser, error} = await supabase.from('users').select().eq('id', user?.id).single()

  if (error) {
      redirect('/error')
  }
  const data = {
    email: user?.email,
    ...dataUser,
  }

  return getResponse(data, 'success get user', 200)
}