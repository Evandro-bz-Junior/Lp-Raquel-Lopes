 
export default function Header() {
    return (
        <header className="bg-white w-full h-16 fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="container flex items-center justify-between px-4 mx-auto z-10">
                <div>
                    <img src="/images/Logo.png" alt="logo Image" className="h-16 object-contain" />
                </div>
                <nav className="flex gap-4 text-primary">
                    <a href="#" className="hover:underline">Início</a>
                    <a href="#" className="hover:underline">Serviços</a>
                    <a href="#" className="hover:underline">Sobre</a>
                    <a href="#" className="hover:underline">Depoimentos</a>
                    <a href="#" className="hover:underline">Duvidas</a>
                </nav>
                <a className="px-4 bg-primary hover:bg-mid  text-warm py-2 rounded-2xl transition-colors duration-300" href="#">Agende sua avaliação</a>
            </div>
        </header>
    )
}