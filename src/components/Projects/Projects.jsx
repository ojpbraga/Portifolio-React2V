import Slides from "./Slide";

const slidesObj = [
    {
      bgColor:"#30193E",
      imgNotebook: '../images/mouse-cursor.png',
      imgLogo: '../images/mouse.png',
      title: "Mouse Cursor", 
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
      githubLink: "www.github.com", 
      figmaLink: "www.figma.com", 
      siteLink: "www.teste.com",
    },
    {
      bgColor:"#0ad978",
      imgNotebook: '../images/mouse-cursor.png',
      imgLogo: '../images/mouse.png',
      title: "Mouse Cursor", 
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
      githubLink: "www.github.com", 
      figmaLink: "www.figma.com", 
      siteLink: "www.teste.com",
    },
    {
      bgColor:"#950262",
      imgNotebook: '../images/mouse-cursor.png',
      imgLogo: '../images/mouse.png',
      title: "Mouse Cursor", 
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
      githubLink: "www.github.com", 
      figmaLink: "www.figma.com", 
      siteLink: "www.teste.com",
    },
    {
      bgColor:"#f6ff71",
      imgNotebook: '../images/mouse-cursor.png', 
      imgLogo: '../images/mouse.png',
      title: "Mouse Cursor", 
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
      githubLink: "www.github.com", 
      figmaLink: "www.figma.com", 
      siteLink: "www.teste.com",
    },
]

const Projects = () => {

    return (
        <section data-scroll-container className='h-[100vh] flex flex-col items-center overflow-hidden'>
            <h1 className='text-[18vw] md:text-[16vw] font-bold xl:text-[6vw]'>Projects</h1>
            <div className='w-[100vw] h-[80vh] xl:h-[70vh]'>
            <Slides slides={slidesObj}/>

            </div>
      </section>
    )
} 
export default Projects;