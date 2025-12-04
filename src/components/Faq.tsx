import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (
        <section id="faq" className=' bg-primary   '>
            <div className="container mx-auto py-9 flex flex-col items-center justify-center text-warm">
                <h2 className="text-2xl font-bold">Perguntas frequentes</h2>
                <span className="w-4/5  lg:w-[800px] text-center mt-2.5">Aqui estão algumas das dúvidas mais comuns de quem busca atendimento psicológico ou avaliação neuropsicológica.</span>
                <div className="w-4/5 lg:w-3/5 mt-6  no-underline">
                    <Accordion type="single" collapsible >
                        <AccordionItem value="item-1" className="  rounded-2xl px-5 mb-2.5 bg-warm text-primary">
                            <AccordionTrigger  className="font-semibold no-underline">O que é uma avaliação neuropsicológica?</AccordionTrigger>
                            <AccordionContent>
                                É um processo clínico estruturado que investiga o funcionamento do cérebro por meio de testes que avaliam a atenção, a memória, a linguagem, o raciocínio, as funções executivas, o comportamento e os aspectos emocionais. Serve para compreender dificuldades, potencialidades e orientar tratamentos.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="  rounded-2xl px-5 mb-2.5 bg-warm text-primary">
                            <AccordionTrigger className="font-semibold no-underline">Para que serve a avaliação neuropsicológica?</AccordionTrigger>
                            <AccordionContent>
                                Ela ajuda a identificar transtornos como TDAH, dislexia, autismo, dificuldades de aprendizagem, sequelas neurológicas, problemas de memória, entre outros. Também auxilia no planejamento escolar, terapêutico e médico.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="  rounded-2xl px-5 mb-2.5 bg-warm text-primary">
                            <AccordionTrigger className="font-semibold no-underline">Quantas sessões são necessárias?</AccordionTrigger>
                            <AccordionContent>
                                Isso varia de acordo com a idade e a demanda, mas geralmente envolve entre 8 e 12 sessões, incluindo a entrevista inicial, a aplicação de testes, a devolutiva e a entrega do laudo.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="  rounded-2xl px-5 mb-2.5 bg-warm text-primary">
                            <AccordionTrigger className="font-semibold no-underline">A avaliação dói? É cansativa?</AccordionTrigger>
                            <AccordionContent>
                                Não dói. São atividades parecidas com jogos, desenhos, perguntas e desafios. As sessões são planejadas para serem leves e respeitar o ritmo do paciente, especialmente no caso de crianças.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="  rounded-2xl px-5 mb-2.5 bg-warm text-primary">
                            <AccordionTrigger className="font-semibold no-underline">É possível fechar diagnóstico apenas pela avaliação neuropsicológica?</AccordionTrigger>
                            <AccordionContent>
                                Ela contribui muito, mas o diagnóstico costuma ser integrado com dados médicos, escolares, comportamentais e familiares. A avaliação traz evidências sólidas, mas o diagnóstico final é sempre multidisciplinar.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6" className="  rounded-2xl px-5 mb-2.5 bg-warm text-primary">
                            <AccordionTrigger className="font-semibold no-underline">Quanto tempo dura cada sessão?</AccordionTrigger>
                            <AccordionContent>
                                Em média, de 50 a 60 minutos. Para crianças pequenas, as sessões podem ser um pouco mais curtas.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

        </section  >
    );
}