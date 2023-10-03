import React, { useState } from 'react'
import { Login } from '../Controladores/login'

const IniciarS = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {iniciar} = Login()

    const inicioSesion = async (e) =>{
      e.preventDefault()
     await iniciar(email, password)
     console.log('Te has logueado perfectamente')
    } 

  return (
    <div>
        Iniciar Sesion
   <form onSubmit={inicioSesion}>
    <input type="text"   name='email'  onChange={(e) => setEmail(e.target.value)} value={email}required/>
    <input type="number" name='password' onChange={(e) => setPassword(e.target.value)} value={password} required/>
    <input type="submit" placeholder='Enviar'/>
   </form>
    </div>
  )
}

export default IniciarS