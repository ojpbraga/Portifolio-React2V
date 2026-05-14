import { ScrollShadow } from "@heroui/react";

const Section = ({ title, children }) => (
    <div className="grid gap-4">
        <div className="flex items-center gap-3">
            <div className="w-1 h-4 rounded-full" style={{ background: 'linear-gradient(to bottom, #60A5FA, #818CF8)' }} />
            <h2 className="text-sm font-bold text-white/90 uppercase tracking-widest">{title}</h2>
        </div>
        {children}
    </div>
);

const Tag = ({ text }) => (
    <span
        className="px-3 py-1 text-xs font-semibold rounded-full"
        style={{
            background: 'rgba(96,165,250,0.1)',
            border: '1px solid rgba(96,165,250,0.18)',
            color: '#93c5fd',
        }}
    >
        {text}
    </span>
);

const PeriodBadge = ({ period }) => (
    <span
        className="text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0"
        style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.35)',
        }}
    >
        {period}
    </span>
);

const ExperienceItem = ({ role, company, period, children }) => (
    <div className="relative pl-5 pb-6 last:pb-0">
        {/* Timeline line */}
        <div className="absolute left-0 top-1.5 bottom-0 w-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
        {/* Timeline dot */}
        <div
            className="absolute left-[-3px] top-1.5 w-[7px] h-[7px] rounded-full"
            style={{ background: 'linear-gradient(to bottom, #60A5FA, #818CF8)' }}
        />

        <div className="flex flex-col gap-1.5">
            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-2">
                <div>
                    <p className="text-sm font-semibold text-white/85">{role}</p>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: '#818CF8' }}>{company}</p>
                </div>
                <PeriodBadge period={period} />
            </div>
            <div className="text-xs text-white/40 leading-relaxed space-y-1 mt-1">
                {children}
            </div>
        </div>
    </div>
);

const EducationItem = ({ institution, course, period, children }) => (
    <div className="relative pl-5 pb-6 last:pb-0">
        <div className="absolute left-0 top-1.5 bottom-0 w-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
        <div
            className="absolute left-[-3px] top-1.5 w-[7px] h-[7px] rounded-full border"
            style={{ borderColor: '#818CF8', background: 'transparent' }}
        />

        <div className="flex flex-col gap-1.5">
            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-2">
                <div>
                    <p className="text-sm font-semibold text-white/85">{course}</p>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: '#818CF8' }}>{institution}</p>
                </div>
                <PeriodBadge period={period} />
            </div>
            {children && (
                <div className="text-xs text-white/40 leading-relaxed mt-1">
                    {children}
                </div>
            )}
        </div>
    </div>
);

const LangCard = ({ lang, level, detail }) => (
    <div
        className="flex items-center justify-between px-4 py-3 rounded-xl"
        style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
        }}
    >
        <div>
            <p className="text-xs font-bold text-white/80">{lang}</p>
            <p className="text-[10px] text-white/35 mt-0.5">{level}</p>
        </div>
        {detail && (
            <span
                className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                style={{
                    background: 'rgba(96,165,250,0.08)',
                    border: '1px solid rgba(96,165,250,0.15)',
                    color: '#93c5fd',
                }}
            >
                {detail}
            </span>
        )}
    </div>
);

export const Content = () => (
    <>
        {/* Perfil */}
        <Section title="Perfil">
            <div className="text-xs text-white/45 leading-relaxed space-y-2.5">
                <p>
                    Desenvolvedor <span className="text-white/75 font-semibold">Fullstack com foco em frontend</span>, com experiência em React.js, Laravel e MySQL. Atuo desde a definição de UX/UI até integração com APIs.
                </p>
                <p>
                    Vivência em ambientes ágeis (Scrum), versionamento com Git e deploy com Jenkins. Interesse em criar soluções com boa usabilidade, performance e qualidade visual.
                </p>
                <p>
                    Buscando evoluir como desenvolvedor frontend, com expansão para mobile via React Native.
                </p>
            </div>
        </Section>

        {/* Habilidades */}
        <Section title="Habilidades">
            <div className="flex flex-wrap gap-1.5">
                {["React.js", "React Native", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Figma", "Laravel", "PHP", "MySQL", "Python", "Git / GitHub", "Scrum", "Jenkins", "Zabbix"].map(skill => (
                    <Tag key={skill} text={skill} />
                ))}
            </div>
        </Section>

        {/* Experiência */}
        <Section title="Experiência">
            <div>
                <ExperienceItem
                    role="Desenvolvedor Fullstack (Estágio)"
                    company="PRODEMGE"
                    period="11/2024 – Atual"
                >
                    <ul className="list-disc list-outside ml-4 space-y-1">
                        <li>Sistemas internos com Laravel, React.js e MySQL.</li>
                        <li>Criação e consumo de APIs REST entre frontend e backend.</li>
                        <li>Dashboards gerenciais para monitoramento de chamados.</li>
                        <li>API em Python para projeção linear de uso de servidores.</li>
                        <li>Customização do Zabbix com APIs PHP e integração com Google Maps.</li>
                        <li>Queries SQL, versionamento Git e deploy com Jenkins.</li>
                    </ul>
                </ExperienceItem>

                <ExperienceItem
                    role="Jovem Aprendiz — TI/Administrativo"
                    company="UAI Praça Sete"
                    period="03/2023 – 03/2024"
                >
                    <ul className="list-disc list-outside ml-4 space-y-1">
                        <li>Registro e acompanhamento de chamados técnicos.</li>
                        <li>Suporte a usuários e gestão de acessos.</li>
                        <li>Manutenção de hardware/software e formatação de máquinas.</li>
                    </ul>
                </ExperienceItem>
            </div>
        </Section>

        {/* Formação */}
        <Section title="Formação">
            <div>
                <EducationItem
                    course="Sistemas de Informação"
                    institution="UNA"
                    period="2025 – 2028"
                >
                    <ul className="list-disc list-outside ml-4 space-y-1">
                        <li>Engenharia de software, banco de dados e testes.</li>
                        <li>Programa Ânima Next — produto digital real (Roadmap).</li>
                        <li>Scrum, Git e Trello no dia a dia.</li>
                    </ul>
                </EducationItem>

                <EducationItem
                    course="Técnico em ADS"
                    institution="Proz Educação"
                    period="2022 – 2024"
                >
                    <ul className="list-disc list-outside ml-4 space-y-1">
                        <li>Desenvolvimento web, lógica e POO.</li>
                        <li>HTML, CSS, JavaScript, React e Java.</li>
                    </ul>
                </EducationItem>

                <EducationItem
                    course="Ensino Médio"
                    institution="E.E. Presidente Tancredo Neves"
                    period="2016 – 2023"
                />
            </div>
        </Section>

        {/* Idiomas */}
        <Section title="Idiomas">
            <div className="flex flex-col gap-2">
                <LangCard lang="Português" level="Nativo" />
                <LangCard lang="Inglês" level="Intermediário" detail="B1" />
            </div>
        </Section>
    </>
);

export default function Description({ isScreenMobile }) {
    const cls = "gap-6 grid overflow-y-auto pt-6 px-6 w-full h-full pb-8";

    if (isScreenMobile) {
        return <div id='profile-div-scroll' className={cls}><Content /></div>;
    }

    return (
        <ScrollShadow id='profile-div-scroll' className={cls} size={80}>
            <Content />
        </ScrollShadow>
    );
}
