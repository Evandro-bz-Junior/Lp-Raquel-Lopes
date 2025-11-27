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
                <span className="text-justify mt-2.5">Aqui estão algumas das dúvidas mais comuns de quem busca atendimento psicológico ou avaliação neuropsicológica.</span>
                <div className="w-2/4 mt-6">
                    <Accordion type="single" collapsible >
                        <AccordionItem value="item-1" className="  rounded-2xl px-5 mb-2.5 bg-warm text-primary">
                            <AccordionTrigger  >Como funciona a primeira sessão?</AccordionTrigger>
                            <AccordionContent>
                                A primeira consulta é um momento para compreender sua demanda, ouvir sua história e definir juntos o melhor caminho terapêutico ou avaliativo.Também explico como funciona o processo, frequência dos encontros e combinados importantes.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="  rounded-2xl px-5 mb-2.5 bg-warm text-primary">
                            <AccordionTrigger>Como funciona a primeira sessão?</AccordionTrigger>
                            <AccordionContent>
                                A primeira consulta é um momento para compreender sua demanda, ouvir sua história e definir juntos o melhor caminho terapêutico ou avaliativo.Também explico como funciona o processo, frequência dos encontros e combinados importantes.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="  rounded-2xl px-5 mb-2.5 bg-warm text-primary">
                            <AccordionTrigger>Como funciona a primeira sessão?</AccordionTrigger>
                            <AccordionContent>
                                A primeira consulta é um momento para compreender sua demanda, ouvir sua história e definir juntos o melhor caminho terapêutico ou avaliativo.Também explico como funciona o processo, frequência dos encontros e combinados importantes.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="  rounded-2xl px-5 mb-2.5 bg-warm text-primary">
                            <AccordionTrigger>Como funciona a primeira sessão?</AccordionTrigger>
                            <AccordionContent>
                                A primeira consulta é um momento para compreender sua demanda, ouvir sua história e definir juntos o melhor caminho terapêutico ou avaliativo.Também explico como funciona o processo, frequência dos encontros e combinados importantes.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

        </section  >
    );
}