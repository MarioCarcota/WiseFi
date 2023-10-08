"use client"
import React from 'react'
import '@memori.ai/memori-react/dist/styles.css';
import News from '@/components/news';
import Image from 'next/image';

function Platform() {

    const jsonExperienced = [
        { id: 1, name: 'Andrea Rossi', description: "Sono grato per l'opportunità di condividere la mia esperienza nel mondo finanziario. Questa piattaforma ha reso la finanza personale accessibile a tutti, ed è stato un onore essere coinvolto.",image: 'https://images.unsplash.com/photo-1658249682512-1bb162538ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF3eWVyJTIwaGVhZHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', specializzazione:'Esperto finanziario' },
        { id: 2, name: 'Xiao Ming', description: 'Da quando utilizzo WiseFi la mia vita è cambiata, ora ho una nuova consapevolezza sul denaro e su come poter gestire al meglio le mie finanze',image: 'https://images.unsplash.com/photo-1592085549692-e936f347b400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbmVzZSUyMHN0dWRlbnQlMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', specializzazione:'Studentessa' },
        { id: 3, name: 'Gianni De Marchi', description: "Ci tengo a esprimere la mia gratitudine per l'opportunità di condividere le mie competenze finanziarie. Questa piattaforma offre strumenti preziosi per prendere decisioni finanziarie informate",image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhd3llciUyMHN0dWRlbnQlMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', specializzazione:'Consulente Finanziario' },
        { id: 4, name: 'Sara di fant', description: "Ringrazio WiseFi per avermi permesso di portare la mia prospettiva filosofica al mondo della finanza. Questa piattaforma è un'occasione unica per arricchire l'approccio alla gestione finanziaria.",image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhd3llciUyMHN0dWRlbnQlMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60', specializzazione:'Professoressa di Filosofia' }
   ] 

   

    
  return (
    <section className='mt-48 px-24'>
        <div className='h-auto w-full mb-24'>
        <h2 className='text-xl text-crema'>I consulenti perfetti per le tue esigenze!</h2>
        <div className='flex gap-10'>
        {jsonExperienced.map((article, index) => (
        <div key={index} className="w-[20vw] h-fit mt-12 bg-verdeScuro border border-verdeChiaro rounded-lg shadow">
           
         
          <div className="p-5">
          
              <h2 className=" text-2xl font-bold tracking-tight text-bianco">{article.name}</h2>
              <h5 className="mb-5 text-l font-regular tracking-tight text-crema">{article.specializzazione}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{article.description}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-black text-center text-nero bg-verdeChiaro rounded-lg focus:ring-4 focus:outline-none ">
              Contatta subito
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      ))}
        </div>
        </div>
        <div className='h-auto w-full mb-24'>
        <h2 className='text-xl text-crema'>Le ultime notizie nel campo finanziario</h2>
        <div className='flex'>
            <News />
        </div>
        </div>
       
    </section>
  )
}

export default Platform