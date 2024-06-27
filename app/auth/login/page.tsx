import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'

export default function LoginPage() {
  return (
    <div>
      <form action='/api/auth/login' method='post'>
        <Input required id="email" label="Email" name="email" type="email" />
        <Input required id="password" label="Password" name="password" type="password" />
        <Button color='primary' type='submit'>Log in</Button>
        <Button color='primary' type='submit'>Forget ?</Button>
      </form>
    </div>
  
  )
}