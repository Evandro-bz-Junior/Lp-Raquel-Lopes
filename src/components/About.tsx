

export default function About() {
    return (
        <section id="about" className="relative w-full h-[850px] md:h-[650px] lg:h-[550px] overflow-hidden">

            <div className="absolute lg:left-0 md:top-0   h-full -left-20 md:right-0 -top-40    ">
                <img src="/images/aboutImage.png" className="h-[700px] md:w-full md:h-full object-cover object-left " />
            </div>
            <div
                className="absolute inset-0 z-20 sm:hidden"
                style={{
                    background: `
                linear-gradient(
                    to bottom,
                    transparent 15%,
                    #275e8095 40%,
                    #275E80 50%
                )
            `,
                }}
            />

            <div
                className="absolute inset-0 z-20 hidden sm:block"
                style={{
                    background: "linear-gradient(to left, #275E80 20%, #275e8095 60%, transparent 70%)",
                }}
            />
            ----
            <div className="absolute md:right-10  z-40 px-6
                    flex flex-col gap-4
                    bottom-5 md:-bottom-5  
                    sm:px-0  lg:mx-40 sm:py-12 md:w-sm lg:w-md  
                    ">
                <div className="text-warm lg:max-w-[480px] sm:max-w-[350px] flex flex-col gap-7 items-center">
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