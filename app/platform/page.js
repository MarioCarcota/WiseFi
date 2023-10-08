"use client"
import ShimmerBorderCard from '@/components/cardShimmer'
import React from 'react'
import Memori from '@memori.ai/memori-react';
import '@memori.ai/memori-react/dist/styles.css';
import News from '@/components/news';

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
        <h2 className='text-xl text-crema'>Le ultime notizie nel campo finanziario</h2>
        <div className='flex'>
            <News />
        </div>
        </div>
       
    </section>
  )
}

export default Platform