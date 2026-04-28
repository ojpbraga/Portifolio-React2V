import {ScrollShadow} from "@heroui/react";

const Section = ({ title, children }) => (
    <div className="grid gap-3">
        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">{title}</h2>
        {children}
    </div>
);

const Tag = ({ text }) => (
    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-[#E1E1E1] border border-white/10">
        {text}
    </span>
);

const ExperienceItem = ({ role, company, period, description }) => (
    <div className="grid gap-1">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1">
            <p className="text-sm font-bold text-[#E1E1E1]">{role}</p>
            <span className="text-xs text-[#888] bg-white/5 px-2 py-0.5 rounded-full w-fit">{period}</span>
        </div>
        <p className="text-xs text-[#A78BFA] font-semibold">{company}</p>
        <p className="text-xs text-[#B5B5B5] leading-relaxed">{description}</p>
    </div>
);

const EducationItem = ({ institution, course, period }) => (
    <div className="grid gap-0.5">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1">
            <p className="text-sm font-bold text-[#E1E1E1]">{course}</p>
            <span className="text-xs text-[#888] bg-white/5 px-2 py-0.5 rounded-full w-fit">{period}</span>
        </div>
        <p className="text-xs text-[#A78BFA] font-semibold">{institution}</p>
    </div>
);

export const Content = () => (
    <>
        {/* Perfil */}
        <Section title="Perfil Profissional">
            <p className="text-sm text-[#B5B5B5] leading-relaxed">
                Estudante de <span className="text-[#E1E1E1] font-semibold">Desenvolvimento Frontend e UI Design</span> em busca de estágio.
                Graduando em Sistemas de Informação, com experiência em ReactJS, TypeScript, Tailwind, HTML, CSS, SASS, JavaScript (ES6), Figma, Java, Git/GitHub e Python.
            </p>
        </Section>

        {/* Habilidades */}
        <Section title="Habilidades">
            <div className="flex flex-wrap gap-2">
                {["ReactJS","TypeScript","JavaScript (ES6)","HTML","CSS","SASS","Tailwind CSS","Figma","Java","Python","Git / GitHub"].map(skill => (
                    <Tag key={skill} text={skill} />
                ))}
            </div>
        </Section>

        {/* Experiências */}
        <Section title="Experiências Profissionais">
            <ExperienceItem
                role="Estágio TI — Monitoramento"
                company="PRODEMGE · Companhia de Tecnologia da Informação do Estado de Minas Gerais"
                period="11/2024 – Atual"
                description="Atuação nas ferramentas Zabbix e Spectrum, gerindo e configurando ativos de TIC. Atendimento de solicitações para cadastro, manutenção e exclusão de ativos. Solução de problemas de monitoramento, capacidade e configuração."
            />
            <ExperienceItem
                role="Jovem Aprendiz — TI"
                company="UAI Praça Sete"
                period="03/2023 – 03/2024"
                description="Recebimento e documentação de chamados, solucionando problemas de sistema e auxiliando usuários. Gestão de acessos, verificação de hardware e software, formatação de dispositivos com uso de scripts e suporte administrativo."
            />
        </Section>

        {/* Formação */}
        <Section title="Formação">
            <EducationItem
                course="Bacharelado em Sistemas de Informação"
                institution="UNA"
                period="03/2025 – 12/2028"
            />
            <EducationItem
                course="Técnico em Análise e Desenvolvimento de Sistemas"
                institution="Proz Educação"
                period="07/2022 – 07/2024"
            />
            <EducationItem
                course="Ensino Médio"
                institution="E.E. Presidente Tancredo Neves"
                period="02/2016 – 12/2023"
            />
        </Section>

        {/* Idiomas */}
        <Section title="Idiomas">
            <div className="flex gap-3">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                    <span className="text-lg">🇧🇷</span>
                    <div>
                        <p className="text-xs font-bold text-[#E1E1E1]">Português</p>
                        <p className="text-xs text-[#888]">Nativo</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                    <span className="text-lg">🇺🇸</span>
                    <div>
                        <p className="text-xs font-bold text-[#E1E1E1]">Inglês</p>
                        <p className="text-xs text-[#888]">Intermediário (B1)</p>
                    </div>
                </div>
            </div>
        </Section>

        {/* Contato */}
        <Section title="Contato">
            <div className="grid grid-cols-1 gap-2">
                <a href="mailto:ojpbraga@gmail.com" className="text-xs text-[#B5B5B5] hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-base">📧</span> ojpbraga@gmail.com
                </a>
                <a href="tel:+5531982874626" className="text-xs text-[#B5B5B5] hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-base">📱</span> +55 (31) 9 8287-4626
                </a>
                <a href="https://www.linkedin.com/in/ojpbraga" target="_blank" rel="noreferrer" className="text-xs text-[#B5B5B5] hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-base">💼</span> linkedin.com/in/ojpbraga
                </a>
                <a href="https://portifolio-react2-v.vercel.app/" target="_blank" rel="noreferrer" className="text-xs text-[#B5B5B5] hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-base">🌐</span> portifolio-react2-v.vercel.app
                </a>
            </div>
        </Section>
    </>
);

export default function Description({isScreenMobile}) {
    if(isScreenMobile) {
        return (
            <div id='profile-div-scroll' className="gap-5 grid xl:overflow-y-scroll pt-5 w-full h-full">
                <Content/>
            </div>
        )
    } else if (isScreenMobile === false) {
        return (
            <ScrollShadow id='profile-div-scroll' className="gap-5 grid xl:overflow-y-scroll pt-5 w-full h-full" size={100}>
                <Content/>
            </ScrollShadow>
        )
    }
}
