 

export default function About() {
    return (
        <section id="about" className="relative w-full h-[550px] overflow-hidden">

            <div className="absolute left-0 top-0   h-full">
                <img src="/images/aboutImage.png"className="w-full h-full object-contain"/>
            </div>


            <div
                className="absolute inset-0 z-20"
                style={{
                    background: "linear-gradient(to left, #275E80 20%, #275e8095 60%, transparent 70%)",
                }}
            />

            <div className="absolute right-0 top-0 w-1/2 h-full  px-16 py-20 flex items-center z-40">
                <div className="text-warm max-w-[480px] flex flex-col gap-7 items-center">
                    <h4 className="font-bold">Sou Raquel Lopes</h4>
                    <span>CRP 17/659</span>
                    <div className="flex flex-col gap-4">
                        <p>Psicóloga com formação em Neuropsicologia e atuação clínica voltada ao cuidado individualizado, técnico e humano.</p>
                        <p>Acredito que o processo terapêutico é um espaço de acolhimento, compreensão e construção de caminhos possíveis.</p>
                        <p>Cada pessoa carrega uma história única e é a partir dessa singularidade que conduzo meu trabalho, sempre com respeito, ética e empatia.</p>
                        <p>Meu objetivo é ajudar você (ou alguém da sua família) a entender melhor o que está acontecendo, desenvolver recursos emocionais e cognitivos e encontrar formas mais saudáveis de lidar com as dificuldades do dia a dia.</p>
                    </div>
                </div>
            </div>

        </section>
    );
}