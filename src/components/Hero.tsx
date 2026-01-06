

export default function Hero() {
    return (
        <section id="home" className="w-full h-[800px] sm:h-[600px] relative overflow-hidden   items-center py-8">
            <div
                className="absolute inset-0 z-20 sm:hidden"
                style={{
                    background: `
                linear-gradient(
                    to bottom,
                    transparent 35%,
                    #cacaca 48%,
                    #F9EAE3 80%
                )
            `,
                }}
            />
            <div
                className=" absolute inset-0 z-20 hidden sm:block"
                style={{
                    background: "linear-gradient(to right, #F9EAE3 20%, #cacaca 40%, transparent 60%)",

                }}
            />
            <div className="  absolute -right-20 -top-32  md:right-0 md:top-0 h-full z-10  ">
                <img
                    src="/images/heroImg.png"
                    alt="Home-Image"
                    className="h-[700px] md:h-full object-cover object-right"
                />
            </div>

            <div className="  absolute left-0 right-0 md:left-10 md:bottom-0 z-40 px-6
                    flex flex-col gap-4
                    bottom-5
 
                    sm:px-0   lg:mx-40 sm:py-12 md:w-sm lg:w-md  ">
                <div className="flex flex-col gap-4">
                    <h1 className="text-primary text-3xl font-bold leading-tight sm:max-w-[350px] lg:max-w-[500px]">Cuidados psicológicos personalizados para crianças, adolescentes e adultos</h1>
                    <span className="text-primary text-lg md:text-xl font-semibold sm:max-w-[350px] lg:max-w-[600px]">Com atenção humana, técnica e individualizada, ajudamos você e sua família a superar desafios emocionais, comportamentais e de aprendizagem.</span>
                    <a className="w-fit px-4 bg-primary hover:bg-mid  text-warm py-2 rounded-2xl transition-colors duration-300" href="https://wa.me/558496090800" target="_blank" rel="noopener noreferrer">Agende sua avaliação</a>
                </div>
            </div>

        </section>
    );
}