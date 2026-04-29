import Slides from "./Slide";

const slidesObj = [
    {
      bgColor:"#0A141B",
      imgNotebook: '../images/tsa_image.svg',
      title: "TSA Engenharia",
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.",
      githubLink: "#", 
      figmaLink: "#", 
      siteLink: "#",
    },
    {
      bgColor:"#86d5fe",
      imgNotebook: '../images/roadmap_image.svg',
      title: "Roadmap", 
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
      githubLink: "https://github.com/mariadxavier/roadmap-administracao", 
      figmaLink: "#", 
      siteLink: "#",
    },
    {
      bgColor:"#ffddd2",
      imgNotebook: '../images/paciente_critico_image.svg',
      title: "Paciente Crítico", 
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
      githubLink: "https://github.com/mariadxavier/roadmap-paciente-critico", 
      figmaLink: "https://www.figma.com/file/MGsqgmU6gEO3t3StZLXscY/Untitled", 
      siteLink: "https://mariadxavier.github.io/roadmap-paciente-critico/index.html",
    },
    {
      bgColor:"#D2E6DD",
      imgNotebook: '../images/unisus_image.svg', 
      title: "UniSUS", 
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
      githubLink: "https://github.com/mariadxavier/prontuario-medico", 
      figmaLink: "#", 
      siteLink: "#",
    },
]

const Projects = () => {

    return (
        <section className='h-[88dvh] w-full flex flex-col items-center justify-center gap-4 overflow-hidden'>
            <h1 className='text-[18vw] md:text-[16vw] font-bold xl:text-[6vw]'>Projetos</h1>
            <div className='w-full flex-1 min-h-0 xl:w-[60%]'>
              <Slides slides={slidesObj}/>
            </div>
        </section>
    )
} 
export default Projects;