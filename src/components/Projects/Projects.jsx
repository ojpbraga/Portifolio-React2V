import Slides from "./Slide";

const slidesObj = [
    {
      bgColor:"#0A141B",
      imgNotebook: '../images/tsa_image.svg',
      imgLogo: '../images/mouse.png',
      title: "TSA Engenharia",
      isTitleHighlight: true,
      titleHighlight: '#000',
      titleHighlightWord: ['palavra'],
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.",
      descriptionHighlight: '#',
      descriptionHighlightWords: [''],
      githubLink: "www.github.com", 
      figmaLink: "www.figma.com", 
      siteLink: "www.teste.com",
    },
    // {
    //   bgColor:"#fff",
    //   imgNotebook: '../images/roadmap_image.svg',
    //   imgLogo: '../images/mouse.png',
    //   title: "Roadmap", 
    //   description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
    //   githubLink: "www.github.com", 
    //   figmaLink: "www.figma.com", 
    //   siteLink: "www.teste.com",
    // },
    // {
    //   bgColor:"#fff",
    //   imgNotebook: '../images/paciente_critico_image.svg',
    //   imgLogo: '../images/mouse.png',
    //   title: "Paciente Crítico", 
    //   description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
    //   githubLink: "www.github.com", 
    //   figmaLink: "www.figma.com", 
    //   siteLink: "www.teste.com",
    // },
    // {
    //   bgColor:"#D2E6DD",
    //   imgNotebook: '../images/unisus_image.svg', 
    //   imgLogo: '../images/mouse.png',
    //   title: "UniSUS", 
    //   description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
    //   githubLink: "www.github.com", 
    //   figmaLink: "www.figma.com", 
    //   siteLink: "www.teste.com",
    // },
]

const Projects = () => {

    return (
        <section data-scroll-container className='h-[77dvh] w-full flex flex-col items-center justify-center overflow-hidden'>
            <h1 className='text-[18vw] md:text-[16vw] font-bold xl:text-[6vw]'>Projetos</h1>
            <div className='w-full h-[80%]  xl:w-[60%] xl:h-[70%] max-h-[600px] '>
            <Slides slides={slidesObj}/>
            </div>
      </section>
    )
} 
export default Projects;