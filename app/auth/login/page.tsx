import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { title } from '@/components/primitives'

export default function LoginPage() {
  return (
    <div className='grid grid-cols-2 p-4'>
      <div>
        <img alt='loginImg' src='/loginImg.png' />
      </div>
      <div className='flex justify-center items-center'>
        <div  className='max-w-md w-full space-y-5'>
          <h1 className={title()}>Silahkan Login</h1>
          <hr className='h-2 bg-black'/>
          <form className='space-y-2' action='/api/auth/login' method='post'>
            <Input required id="email" label="Email" name="email" type="email" />
            <Input required id="password" label="Password" name="password" type="password" />
            <Button color='primary' type='submit' className='w-full'>Log in</Button>
          </form>
        </div>
        
      </div>
      
    </div>
  
  )
}