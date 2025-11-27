import About from "@/components/About";
import Atendimento from "@/components/Atendimento";
import Cta from "@/components/Cta";
import Depoimentos from "@/components/Depoimentos";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";


export default function Home() {
  return (
    <main>   
    <Hero></Hero>
    <Atendimento></Atendimento>
    <Servicos></Servicos>
    <About></About>
    <Depoimentos></Depoimentos>
    <Faq></Faq>
    <Cta></Cta>
    </main>
  );
}
