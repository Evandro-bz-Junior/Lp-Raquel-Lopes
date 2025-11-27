

export default function Footer() {
    return (
        <footer className='bg-primary h-fit'>
            <div className='container mx-auto flex flex-col  items-center justify-center text-warm text-sm'>
                <div className="flex py-7  gap-10">
                    <div className=" w-80 flex flex-col gap-6 px-5 p-4">
                        <h6 className="font-bold">Psicóloga Raquel Lopes</h6>
                        <span>CRP 17/6591</span>
                        <span >Atendimento psicológico e avaliação neuropsicológica com ética, acolhimento e responsabilidade.</span>
                    </div>

                    <div className="w-80">
                        <nav className="flex flex-col text-center gap-2 text-warm  px-5 p-4">
                            <a href="#" className="hover:underline">Início</a>
                            <a href="#" className="hover:underline">Serviços</a>
                            <a href="#" className="hover:underline">Sobre</a>
                            <a href="#" className="hover:underline">Depoimentos</a>
                            <a href="#" className="hover:underline">Duvidas</a>
                        </nav>
                    </div>

                    <div className="w-80 flex flex-col gap-4 px-5 p-4">
                        <span>Local de atendimento:<br/> Rua dos Cajueiros, 1250, Nova Betânia, Mossoró/RN, CEP 59618-000.</span>
                        <span>WhatsApp: (xx) xxxx-xxxx</span>
                        <span>E-mail: contato@raquellopes.com</span>
                    </div>
                </div>

                <div className="w-2/3 h-11 bg-warm flex items-center justify-center text-primary text-xs">
                    <span className="font-bold">© 2025 Psicóloga Raquel Lopes — Todos os direitos reservados.</span>
                </div>
            </div>

        </footer>
    );
}