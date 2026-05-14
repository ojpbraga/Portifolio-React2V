import { motion } from "framer-motion";
import Slides from "./Slide";

const slidesObj = [
    {
        bgColor: "#4F6BF4",
        imgNotebook: '../images/tsa_image.svg',
        title: "TSA Engenharia",
        description: "Conceito de revitalização visual para o Grupo TSA. Focado em design de interface (UI) moderno e animações para melhoria da experiência do usuário.",
        githubLink: "",
        figmaLink: "https://www.figma.com/design/9J7S5QUtoYzfiizSvEV5hv/Revitaliza%C3%A7%C3%A3o-Grupo-TSA?node-id=0-1&t=s8l1O69jlcz3W6Ey-1",
        siteLink: "",
        tags: ["UI Animation", "UI Design"]
    },
    {
        bgColor: "#38BDF8",
        imgNotebook: '../images/roadmap_image.svg',
        title: "Roadmap",
        description: "Plataforma desenvolvida para potencializar o aprendizado. Professores criam trilhas de estudo de suas disciplinas, e alunos podem centralizar e acessar todos os cursos na aplicação.",
        githubLink: "https://github.com/mariadxavier/roadmap-administracao",
        figmaLink: "https://www.figma.com/design/LKMfUjVzntfRDfTyfL2oXU/Roadmap?node-id=0-1&t=dZAHXh4F8vvZ2fjW-1",
        siteLink: "https://roadmap-administracao.vercel.app/",
        tags: ["React", "TypeScript", "Tailwind", "Vite"]
    },
    {
        bgColor: "#F472B6",
        imgNotebook: '../images/paciente_critico_image.svg',
        title: "Paciente Crítico",
        description: "Aplicação interativa no formato de roadmap, criada em equipe como projeto final acadêmico. Desenvolvida para facilitar o aprendizado visual das turmas de enfermagem.",
        githubLink: "https://github.com/mariadxavier/roadmap-paciente-critico",
        figmaLink: "https://www.figma.com/design/MGsqgmU6gEO3t3StZLXscY/Paciente-Cr%C3%ADtico?node-id=0-1&t=JqJxkClhwnvk6Q3d-1",
        siteLink: "https://mariadxavier.github.io/roadmap-paciente-critico/",
        tags: ["FullStack", "JavaScript", "HTML", "CSS"]
    },
    {
        bgColor: "#34D399",
        imgNotebook: '../images/unisus_image.svg',
        title: "UniSUS",
        description: "Sistema dinâmico de prontuário médico eletrônico. Permite que profissionais de saúde realizem cadastro de pacientes e gerenciem históricos de consultas de forma segura.",
        githubLink: "https://github.com/mariadxavier/prontuario-medico",
        figmaLink: "https://www.figma.com/design/pljzOmKWmmsUV33XXhcvD8/Untitled?node-id=0-1&t=xu47hg3k7X7mdHNz-1",
        siteLink: "",
        tags: ["PHP", "JavaScript", "Firebase", "HTML/CSS"]
    },
];

const Projects = () => {
    return (
        <section id="projetos" className='w-full flex flex-col items-center gap-6 sm:gap-8 overflow-hidden px-4'>

            {/* Header da seção */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                className='w-[90%] xl:w-[80%] flex items-end justify-between'
            >
                <div className='flex flex-col gap-1'>
                    <span className='text-xs font-semibold tracking-[0.3em] uppercase text-white/30'>
                        O que já construí
                    </span>
                    <h1 className='font-black text-[14vw] md:text-[10vw] xl:text-[5.5vw] leading-none text-white'>
                        Projetos
                    </h1>
                </div>

                <span className='text-xs text-white/25 font-medium mb-1.5 hidden xl:block'>
                    {slidesObj.length} projetos
                </span>
            </motion.div>

            {/* Carrossel */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                className='w-full xl:w-[60%]'
            >
                <Slides slides={slidesObj} />
            </motion.div>
        </section>
    );
};

export default Projects;
