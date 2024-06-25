import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'

export default function RegisterPage() {
  return (
    <div>
      <form action='/api/auth/register' method='post'>
        <Input required id="email" label="Email" name="email" type="email" />
        <Input required id="password" label="Password" name="password" type="password" />
        <Input required id="full_name"label="Full Name" name='full_name' type="text"/>
        <Input required id="age" label="Age" name='age' type="number"/>
        <Button color='primary' type='submit'>Register</Button>
      </form>
    </div>
  
  )
}