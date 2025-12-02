

export default function Atendimento() {
    return (
        <section className="bg-primary   md:w-full">
            <div className="container mx-auto py-9 flex flex-col gap-6 items-center justify-center">
                <h2 className="text-2xl font-bold text-warm w-">Áreas de Atuação</h2>
                <span className="text-warm w-4/5 lg:w-[752px] text-center" >Meu trabalho é voltado a crianças, adolescentes e adultos, oferecendo suporte psicológico e neuropsicológico em diferentes fases da vida.</span >
                <div className="flex gap-6 text-warm flex-wrap justify-center ">
                    <div className="item1 w-72 h-48 rounded-xl  text-center border-warm border-2 p-2.5   flex flex-col gap-4 ">
                        <h6 className="font-bold text-xl text-warm">Crianças</h6>
                        <span>Atendimentos focados em desenvolvimento, aprendizagem e comportamento, com integração entre família e escola quando necessário.</span>
                    </div>
                    <div className="item2 w-72 h-48 rounded-xl text-warm text-center border-warm border-2 p-2.5   flex flex-col gap-4 ">
                        <h6 className="font-bold text-xl text-warm">Adolescentes</h6>
                        <span>Um espaço seguro para autoconhecimento, regulação emocional e enfrentamento de desafios próprios dessa fase de transição.</span>
                    </div>
                    <div className="item3 w-72 h-48 rounded-xl text-warm text-center border-warm border-2 p-2.5   flex flex-col gap-4 ">
                        <h6 className="font-bold text-xl text-warm">Adultos</h6>
                        <span>Apoio no manejo de ansiedade, estresse, autoestima e relacionamentos, promovendo equilíbrio emocional e bem-estar.</span>
                    </div>
                </div>
            </div>

        </section>
    );
}