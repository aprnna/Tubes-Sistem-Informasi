import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient()
  const {data:{user}} = await supabase.auth.getUser()

  if(!user)redirect('/auth/login') 
  const { data:dataUser} = await supabase.from('users').select().eq('id', user?.id).single()

  if (dataUser.role !== 'admin'){
    redirect('/error/permission')
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}
