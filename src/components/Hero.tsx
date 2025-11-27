

export default function Hero() {
    return (
        <section className="w-full h-[600px] relative overflow-hidden">
            <div
                className="absolute inset-0 z-20"
                style={{
                    background: "linear-gradient(to right, #F9EAE3 0%, #cacaca 42%, transparent 70%)",
                }}
            />
            <div className="absolute right-0 top-0 h-full z-10">
                <img
                    src="/images/heroimg.png"
                    alt="Hero"
                    className="h-full object-cover  "
                />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center  z-40 container mx-40 py-12 w-lg">
                <div className="flex flex-col gap-4">
                    <h1 className="text-primary text-3xl font-bold">Cuidados psicológicos personalizados para crianças, adolescentes e adultos</h1>
                    <span className="text-primary text-xl  font-semibold">Com atenção humana, técnica e individualizada, ajudamos você e sua família a superar desafios emocionais, comportamentais e de aprendizagem.</span>
                    <a className="w-fit px-4 bg-primary hover:bg-mid  text-warm py-2 rounded-2xl transition-colors duration-300" href="#">Agende sua avaliação</a>
                </div>
            </div>

        </section>
    );
}