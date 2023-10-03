import React, { useState } from 'react'
import { Login } from '../Controladores/login'

const Registro = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {register} = Login()

 const registrarse  = async (e) =>{
    e.preventDefault()
    await register(email, password)
    console.log('registrado')
    console.log('Te has logueado correctamente!!')
 }
 
  return (
    <div>
<form onSubmit={registrarse}>
    <input type="text"   name='email'  onChange={(e) => setEmail(e.target.value)} value={email}required/>
    <input type="number" name='password' onChange={(e) => setPassword(e.target.value)} value={password} required/>
    <input type="submit" placeholder='Enviar'/>
</form>
    </div>
  )
}

export default Registro