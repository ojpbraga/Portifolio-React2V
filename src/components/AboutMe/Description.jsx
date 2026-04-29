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

const ExperienceItem = ({ role, company, period, children }) => (
    <div className="grid gap-2 mb-2">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1">
            <p className="text-sm font-bold text-[#E1E1E1]">{role}</p>
            <span className="text-xs text-[#888] bg-white/5 px-2 py-0.5 rounded-full w-fit whitespace-nowrap">{period}</span>
        </div>
        <p className="text-xs text-[#A78BFA] font-semibold">{company}</p>
        <div className="text-xs text-[#B5B5B5] leading-relaxed space-y-1">
            {children}
        </div>
    </div>
);

const EducationItem = ({ institution, course, period, children }) => (
    <div className="grid gap-1 mb-2">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-1">
            <p className="text-sm font-bold text-[#E1E1E1]">{course}</p>
            <span className="text-xs text-[#888] bg-white/5 px-2 py-0.5 rounded-full w-fit whitespace-nowrap">{period}</span>
        </div>
        <p className="text-xs text-[#A78BFA] font-semibold">{institution}</p>
        {children && (
            <div className="text-xs text-[#B5B5B5] leading-relaxed mt-1">
                {children}
            </div>
        )}
    </div>
);

export const Content = () => (
    <>
        {/* Perfil */}
        <Section title="Perfil Profissional">
            <div className="text-sm text-[#B5B5B5] leading-relaxed space-y-3">
                <p>
                    Desenvolvedor <span className="text-[#E1E1E1] font-semibold">Fullstack com foco em frontend</span>, com experiência prática no desenvolvimento de aplicações web modernas utilizando React.js, Laravel e MySQL. Atuo na criação de interfaces responsivas e centradas no usuário, participando desde a definição de UX/UI até a implementação e integração com APIs.
                </p>
                <p>
                    Possuo vivência em ambientes ágeis (Scrum), versionamento com Git e processos de deploy com Jenkins. Tenho experiência no desenvolvimento de dashboards, APIs REST, automações e sistemas internos, além de forte interesse em criar soluções com boa usabilidade, performance e qualidade visual.
                </p>
                <p>
                    Busco evoluir como desenvolvedor frontend, mantendo atuação fullstack e expandindo conhecimentos em desenvolvimento mobile com React Native.
                </p>
            </div>
        </Section>

        {/* Habilidades */}
        <Section title="Habilidades">
            <div className="flex flex-wrap gap-2">
                {["React.js", "React Native", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Figma", "Laravel", "PHP", "MySQL", "Python", "Git / GitHub", "Scrum", "Jenkins", "Zabbix"].map(skill => (
                    <Tag key={skill} text={skill} />
                ))}
            </div>
        </Section>

        {/* Experiências */}
        <Section title="Experiência Profissional">
            <ExperienceItem
                role="Estagiário de Desenvolvimento Fullstack"
                company="PRODEMGE"
                period="11/2024 – Atual"
            >
                <ul className="list-disc list-outside ml-4 space-y-1">
                    <li>Desenvolvimento de sistemas internos utilizando Laravel, React.js e MySQL.</li>
                    <li>Criação e consumo de APIs REST para integração entre frontend e backend.</li>
                    <li>Desenvolvimento de dashboards gerenciais para monitoramento de chamados e análise de desempenho.</li>
                    <li>Implementação de API em Python para projeção linear de uso de servidores, com visualização web.</li>
                    <li>Construção de interfaces com Blade e React, com foco em usabilidade e responsividade.</li>
                    <li>Customização de sistema de monitoramento utilizando Zabbix, incluindo APIs em PHP e integração com o Google Maps.</li>
                    <li>Escrita de queries SQL complexas, versionamento com Git e deploy de aplicações com Jenkins.</li>
                </ul>
                <p className="mt-2 font-semibold text-[#E1E1E1]">Principais contribuições:</p>
                <ul className="list-disc list-outside ml-4 mt-1 space-y-1">
                    <li>Melhoria de performance na aplicação de projeção linear.</li>
                    <li>Evolução de dashboards internos e otimização da usabilidade em sistemas de monitoramento.</li>
                    <li>Automação de processos internos e melhorias na intranet do setor.</li>
                </ul>
            </ExperienceItem>
            
            <ExperienceItem
                role="Jovem Aprendiz (TI/Administrativo)"
                company="UAI Praça Sete"
                period="03/2023 – 03/2024"
            >
                <ul className="list-disc list-outside ml-4 space-y-1">
                    <li>Registro e acompanhamento de chamados técnicos.</li>
                    <li>Suporte a usuários e resolução de problemas de sistema.</li>
                    <li>Gestão de acessos e permissões.</li>
                    <li>Manutenção básica de hardware e software, execução de scripts e formatação de máquinas.</li>
                </ul>
            </ExperienceItem>
        </Section>

        {/* Formação */}
        <Section title="Formação Acadêmica">
            <EducationItem
                course="Sistemas de Informação"
                institution="UNA"
                period="03/2025 – 12/2028 (em andamento)"
            >
                <ul className="list-disc list-outside ml-4 space-y-1">
                    <li>Aprofundamento em engenharia de software, banco de dados e testes de software.</li>
                    <li>Participação no programa Ânima Next, com criação de solução baseada em produto digital (Roadmap) simulando ambiente de negócio real.</li>
                    <li>Utilização de metodologias ágeis (Scrum), Git e Trello.</li>
                </ul>
            </EducationItem>
            <EducationItem
                course="Técnico em Análise e Desenvolvimento de Sistemas"
                institution="Proz Educação"
                period="07/2022 – 07/2024"
            >
                <ul className="list-disc list-outside ml-4 space-y-1">
                    <li>Formação com foco em desenvolvimento web e lógica de programação.</li>
                    <li>Contato com HTML, CSS, JavaScript, React, Java e POO.</li>
                    <li>Desenvolvimento de projetos práticos voltados para aplicações web.</li>
                </ul>
            </EducationItem>
            <EducationItem
                course="Ensino Médio"
                institution="E.E. Presidente Tancredo Neves"
                period="2016 – 2023"
            />
        </Section>

        {/* Idiomas */}
        <Section title="Idiomas">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 w-fit">
                    <span className="text-lg">🇧🇷</span>
                    <div>
                        <p className="text-xs font-bold text-[#E1E1E1]">Português</p>
                        <p className="text-xs text-[#888]">Nativo</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-3">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">🇺🇸</span>
                        <div>
                            <p className="text-xs font-bold text-[#E1E1E1]">Inglês</p>
                            <p className="text-xs text-[#888]">Intermediário (B1)</p>
                        </div>
                    </div>
                    <ul className="list-disc list-outside ml-6 text-xs text-[#B5B5B5] space-y-1 mt-1">
                        <li>Leitura e compreensão de documentação técnica (React, Laravel, entre outros).</li>
                        <li>Entendimento de códigos, erros e mensagens técnicas sem necessidade de tradução.</li>
                        <li>Familiaridade com terminologia técnica e uso no dia a dia para estudo e desenvolvimento.</li>
                        <li>Comunicação básica em inglês técnico.</li>
                    </ul>
                </div>
            </div>
        </Section>


    </>
);

export default function Description({isScreenMobile}) {
    if(isScreenMobile) {
        return (
            <div id='profile-div-scroll' className="gap-6 grid xl:overflow-y-scroll pt-5 w-full h-full pb-10 pr-2">
                <Content/>
            </div>
        )
    } else if (isScreenMobile === false) {
        return (
            <ScrollShadow id='profile-div-scroll' className="gap-6 grid xl:overflow-y-scroll pt-5 w-full h-full pb-10 pr-2" size={100}>
                <Content/>
            </ScrollShadow>
        )
    }
}
