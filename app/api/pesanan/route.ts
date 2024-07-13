import getResponse from '@/utils/getResponse'
import { createClient } from '@/utils/supabase/server'
import { NextRequest} from 'next/server'
export async function GET() {
  const supabase = createClient()
  const { data: pesanan } = await supabase.from('pesanan').select()

  return getResponse(pesanan, 'Pesanan fetched successfully', 200)
  
}

export async function POST(req: NextRequest) {
    const supabase = createClient()
    const {atasNama, banyak_orang,no_meja, status, total_harga, id_users} = await req.json();
    // const data = await req.formData()
    const { data: pesananBaru,error} = await supabase.from('pesanan').insert
    ([{
        atasNama: atasNama,
        banyak_orang: banyak_orang,
        no_meja: no_meja,
        status: status,
        total_harga: total_harga,
        id_users: id_users,
    }]).select()

    if (error) {
      console.error('Pesanan Post failed', error)
      getResponse(error, 'Pesanan Post failed', 400)
    }

    return getResponse(pesananBaru, 'Pesanan created successfully', 201)
}
