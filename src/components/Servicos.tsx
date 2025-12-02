import React from 'react';

export default function Servicos() {
    return (
        <section id='servicos' className='container mx-auto py-9 flex flex-col gap-7 items-center justify-center text-primary'>
            <h2 className='text-2xl font-bold '>Meus serviços</h2>
            <span className='w-4/5  lg:w-[752px] text-center'>Ofereço atendimentos psicológicos e avaliações que unem ciência, técnica e acolhimento.
                <br />O foco é compreender profundamente cada caso e propor intervenções realmente significativas.</span>
            <div className="flex gap-4  flex-wrap justify-center">
                <div className="item1 w-72 h-52 rounded-xl  text-center border-primary border-2 p-2.5  flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <h6 className="font-bold">Avaliação neuropsicológica</h6>
                    <span>Investigação detalhada de funções cognitivas, atenção, memória e aprendizagem.Ideal para casos de TDAH, TEA, dificuldades escolares e de desenvolvimento.</span>
                </div>
                <div className="item2  w-72 h-52 rounded-xl   text-center border-primary border-2 p-2.5  flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <h6 className="font-bold">Psicoterapia (TCC)</h6>
                    <span>Acompanhamento psicológico com base na Terapia Cognitivo-Comportamental, voltado à compreensão e manejo de pensamentos, emoções e comportamentos.</span>
                </div>
                <div className="item3  w-72 h-52 rounded-xl   text-center border-primary border-2 p-2.5  flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <h6 className="font-bold">Intervenção ABA</h6>
                    <span>Aplicação de princípios da Análise do Comportamento Aplicada, com foco em desenvolvimento de habilidades e redução de comportamentos desafiadores.</span>
                </div>
                <div className="item4  w-72 h-52 rounded-xl   text-center border-primary border-2 p-2.5  flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <h6 className="font-bold">Orientação a Responsáveis</h6>
                    <span>Espaço para compreender e lidar melhor com os desafios do cotidiano familiar, promovendo vínculos mais saudáveis e estratégias práticas.</span>
                </div>
            </div>
            <div className='text-center w-4/5  lg:w-[752px]'>
                <p >
                    Cada serviço é planejado de forma individualizada, considerando o momento e as demandas de quem procura ajuda.
                </p>
                <p>Por isso, atendo diferentes faixas etárias e perfis, sempre respeitando a singularidade de cada pessoa.</p>
            </div>
          {/*   <a className="px-4 bg-primary hover:bg-mid  text-warm py-2 rounded-2xl transition-colors duration-300" href="#">Agende sua avaliação</a> */}
        </section>
    );
}