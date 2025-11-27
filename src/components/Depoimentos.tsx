import React from 'react';

export default function Depoimentos() {
    return (
        <section id='depoimentos' className='container mx-auto py-9 flex flex-col gap-7 items-center justify-center text-primary'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <h2 className='text-2xl font-bold '>O que meus pacientes dizem</h2>
                <span  >O retorno de quem já viveu o processo terapêutico ou passou por uma avaliação é sempre valioso.</span>
                <span  >Esses depoimentos refletem a dedicação, ética e escuta acolhedora que orientam cada atendimento.</span>
            </div>
            <div className="flex   gap-4 w-[880px] flex-wrap justify-center">
                <div className="depo1 w-[400px] h-60 rounded-xl  bg-primary text-warm text-center border-2 p-5  flex flex-col gap-4">
                    <h6 className="font-bold">Avaliação Neuropsicológica – Mãe de criança com TDAH</h6>
                    <span>“A Raquel nos ajudou a compreender o que estava acontecendo com nosso filho.O processo de avaliação foi muito claro, profissional e, acima de tudo, acolhedor. Hoje conseguimos apoiá-lo melhor em casa e na escola.”</span>
                </div>
                <div className="depo2 w-[400px] h-60 rounded-xl bg-primary text-warm  text-center border-2 p-5  flex flex-col gap-4">
                    <h6 className="font-bold">Psicoterapia (TCC) – Adulto com ansiedade</h6>
                    <span>“Procurei a Raquel num momento em que me sentia perdido e sobrecarregado. O cuidado, a escuta e as estratégias que aprendi nas sessões fizeram toda a diferença no meu dia a dia." </span>
                </div>
                <div className="depo3 w-[400px] h-fit rounded-xl bg-primary text-warm  text-center border-2 p-5  flex flex-col gap-4">
                    <h6 className="font-bold">Orientação a pais – Família de adolescente</h6>
                    <span>“As orientações foram práticas e muito respeitosas. Aprendemos a entender melhor nosso filho e a nos comunicar de forma mais tranquila. A Raquel sempre foi disponível e cuidadosa em cada encontro.”</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <span>Cada pessoa chega com uma história única  e ver essas mudanças acontecerem é o que mais me motiva</span>
                <span>Se você também sente que é hora de buscar esse cuidado, estou aqui pra te acompanhar.</span>
                <a className="px-4 w-fit bg-primary hover:bg-mid  text-warm py-2 rounded-2xl transition-colors duration-300" href="#">Agende sua avaliação</a>
            </div>
        </section  >
    );
}