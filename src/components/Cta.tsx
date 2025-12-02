import React from 'react';

export default function Cta() {
    return (
        <section className='container mx-auto flex flex-col gap-7 items-center justify-center text-primary  py-9'>
            <div className='flex flex-col items-center justify-center lg:w-4xl gap-3 text-center'>
                <h2 className='text-xl font-bold w-4/5  lg:w-full '>Vamos conversar? Estou pronta para te ajudar.</h2>
                <span className='w-4/5 lg:w-full'>Se você tem sentido que é hora de buscar apoio seja emocional, comportamental ou cognitivo estou aqui para oferecer um atendimento humano, responsável e baseado em evidências.</span>
                <span className='w-4/5 lg:w-full'>Vamos juntos compreender o que está acontecendo e construir caminhos mais leves e possíveis.</span>
            </div>
            <a className="px-4 bg-warm hover:bg-primary  text-primary hover:text-warm border-2 border-primary py-2 rounded-2xl font-semibold transition-colors duration-300" href="#">Agendar avaliação pelo WhatsApp</a>
        </section>
    );
}