import React, { useState } from 'react'
import { Login } from '../Controladores/login'
import { useNavigate } from 'react-router-dom'

const Registro = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [holaMundoe, setholaMundoe] = useState("")
    const [holaMundor, setholaMundor] = useState("")
    
    const {register} = Login()

 const registrarse  = async (e) =>{
    e.preventDefault()
    await register(email, password)
    setTimeout(() => {
      console.log('registrado')
      navigate('/iniciar')
    }, 2700);
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