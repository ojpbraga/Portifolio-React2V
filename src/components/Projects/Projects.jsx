import Slides from "./Slide";

const slidesObj = [
    {
      bgColor:"#0A141B",
      imgNotebook: '../images/tsa_image.svg',
      title: "TSA Engenharia",
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.",
      githubLink: "", 
      figmaLink: "https://www.figma.com/design/9J7S5QUtoYzfiizSvEV5hv/Revitaliza%C3%A7%C3%A3o-Grupo-TSA?node-id=0-1&t=s8l1O69jlcz3W6Ey-1", 
      siteLink: "",
      tags: ["UI Animation", "UI Design"]
    },
    {
      bgColor:"#86d5fe",
      imgNotebook: '../images/roadmap_image.svg',
      title: "Roadmap", 
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
      githubLink: "https://github.com/mariadxavier/roadmap-administracao", 
      figmaLink: "https://www.figma.com/design/LKMfUjVzntfRDfTyfL2oXU/Roadmap?node-id=0-1&t=dZAHXh4F8vvZ2fjW-1", 
      siteLink: "https://roadmap-administracao.vercel.app/",
      tags: ["React", "TypeScript", "Tailwind", "Vite"]
    },
    {
      bgColor:"#ffddd2",
      imgNotebook: '../images/paciente_critico_image.svg',
      title: "Paciente Crítico", 
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
      githubLink: "https://github.com/mariadxavier/roadmap-paciente-critico", 
      figmaLink: "https://www.figma.com/design/MGsqgmU6gEO3t3StZLXscY/Paciente-Cr%C3%ADtico?node-id=0-1&t=JqJxkClhwnvk6Q3d-1", 
      siteLink: "https://mariadxavier.github.io/roadmap-paciente-critico/",
      tags: ["FullStack", "JavaScript", "HTML", "CSS"]
    },
    {
      bgColor:"#D2E6DD",
      imgNotebook: '../images/unisus_image.svg', 
      title: "UniSUS", 
      description: "Se for um site específico que foi lançado após recomendaria procurar mecanismo de busca ou em comunidades.", 
      githubLink: "https://github.com/mariadxavier/prontuario-medico", 
      figmaLink: "https://www.figma.com/design/pljzOmKWmmsUV33XXhcvD8/Untitled?node-id=0-1&t=xu47hg3k7X7mdHNz-1", 
      siteLink: "",
      tags: ["PHP", "JavaScript", "Firebase", "HTML/CSS"]
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