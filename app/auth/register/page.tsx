import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'

export default function RegisterPage() {
  return (
    <div>
      <form action='/api/auth/register' method='post'>
        <Input required id="email" label="Email" name="email" type="email" />
        <Input required id="password" label="Password" name="password" type="password" />
        <Button color='primary' type='submit'>Register</Button>
      </form>
    </div>
  
  )
}