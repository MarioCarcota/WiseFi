"use client"

import React from 'react'
import Memori from '@memori.ai/memori-react';
import '@memori.ai/memori-react/dist/styles.css';

function PlatformAI() {

    
  return (
    <section className='mt-48 px-24'>
       
        <div className='h-[120vh] w-full'>
            <h2 className='text-xl text-crema'>Il tuo aiuto 24h su 24</h2>
            
            <Memori
              memoriName="Finance Bro"
              ownerUserName="umberto.romagnolo"
              memoriID="8f937033-df57-40f3-a247-ba3e9b38c887"
              ownerUserID="eddcb2b8-3d6a-4c4a-a7a3-67339fa9138a"
              tenantID="hfarm.aclambda.online"
              apiURL="https://backend.memori.ai"
              baseURL="https://hfarm.aclambda.online"
              showShare
            multilingual
          />
        </div>
    </section>
  )
}

export default PlatformAI