

export default function Footer() {
    return (
        <footer className='bg-primary h-fit'>
            <div className='container mx-auto flex flex-col items-center justify-center text-warm text-sm'>
                <div className="flex flex-col sm:flex-row py-7  lg:gap-10">
                    <div className=" lg:w-80 md:w-64 flex flex-col gap-6 px-5 p-4">
                        <h6 className="font-bold">Psicóloga Raquel Lopes</h6>
                        <span>CRP 17/6591</span>
                        <span >Atendimento psicológico e avaliação neuropsicológica com ética, acolhimento e responsabilidade.</span>
                    </div>

                    <div className="w-80 md:w-64 flex flex-col gap-4 px-5 p-4">
                        <h6 className="font-bold">Links uteis</h6>
                        <nav className="flex  flex-wrap   gap-4 text-warm  ">
                            <a href="#home" className="hover:underline">Início</a>
                            <a href="#servicos" className="hover:underline">Serviços</a>
                            <a href="#about" className="hover:underline">Sobre</a>
                            <a href="#depoimentos" className="hover:underline">Depoimentos</a>
                            <a href="#faq" className="hover:underline">Duvidas</a>
                        </nav>
                    </div>

                    <div className="w-80 md:w-64 flex flex-col gap-4 px-5 p-4">
                        <span>Local de atendimento:<br /> Rua Duodécimo Rosado, 337 - Doze Anos, Mossoró - RN, 59603-020.</span>
                        <span>WhatsApp:  <a   href="https://wa.me/558496090800" target="_blank" rel="noopener noreferrer">(84)9609-0800</a></span>
                        <span>E-mail: <a   href="mailto:rl2161876@gmail.com" target="_blank" rel="noopener noreferrer">rl2161876@gmail.com</a></span>
                    </div>
                </div>

                <div className="w-3/4 md:w-2/3 h-11 bg-warm flex items-center justify-center text-primary text-xs">
                    <span className="font-bold w-3/4 md:w-full text-center">© 2025 Psicóloga Raquel Lopes — Todos os direitos reservados.</span>
                </div>
            </div>

        </footer>
    );
}