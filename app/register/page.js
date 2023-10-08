"use client"

import { loginGoogle } from '@/firebase/googleBtn'
import React, { useState } from 'react'

function Register() {

  const [email, setEmail ] = useState("")
  const [password, setPassword ] = useState("")

  const handleChange = event => {
    setEmail(event.target.value);
  };

  const handleChangePsw = event => {
    setPassword(event.target.value);
  };

  return (
    <section className='min-h-screen w-full flex flex-col  items-center mt-24'>
        <div className='flex flex-col justify-center items-center md:w-3/5 w-full p-24'>

<h1 className='text-6xl text-crema mb-24'>Registrazione Utente</h1>

  <div className="relative z-0 w-full mb-6 group">
      <input  value={email}
                onChange={handleChange}
                autoComplete="current-email" type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-verdeChiaro peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeChiaro  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">La tua email</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input autoComplete="current-password"
                
                onChange={handleChangePsw}
                value={password} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-verdeChiaro peer" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-verdeChiaro peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">La tua Password</label>
  </div>
  
  <button onClick={() => signUp(email,password)} type="submit" className="cursor-pointer text-crema bg-verdeChiaro hover:bg-verdeScuro focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Registrarmi a WiseFi</button>

<p className='text-crema mt-24'>oppure</p>
            <button className="mt-5 cursor-pointer text-crema bg-gray-500 hover:bg-verdeScuro focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={loginGoogle}>Accedi con google</button>

        </div>
    </section>
  )
}

export default Register