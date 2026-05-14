const techs = [
  { name: "React",       icon: "/images/techs/react.svg",       color: "#61DAFB", stars: 4 },
  { name: "TypeScript",  icon: "/images/techs/typescript.svg",  color: "#3178C6", stars: 3 },
  { name: "JavaScript",  icon: "/images/techs/javascript.svg",  color: "#F7DF1E", stars: 4 },
  { name: "HTML5",       icon: "/images/techs/html5.svg",       color: "#E44D26", stars: 5 },
  { name: "CSS3",        icon: "/images/techs/css3.svg",        color: "#1572B6", stars: 5 },
  { name: "PHP",         icon: "/images/techs/php.svg",         color: "#8892BF", stars: 4 },
  { name: "Tailwind",    icon: "/images/techs/tailwind.svg",    color: "#38BDF8", stars: 4 },
  { name: "Figma",       icon: "/images/figma.svg",             color: "#A259FF", stars: 4 },
  { name: "Git",         icon: "/images/techs/git.svg",         color: "#F05027", stars: 3 },
  { name: "GitHub",      icon: "/images/github-icon.png",       color: "#E0E0E0", stars: 3 },
  { name: "Laravel",     icon: "/images/techs/laravel.svg",     color: "#FF2D20", stars: 4 },
  { name: "Python",      icon: "/images/techs/python.svg",      color: "#3572A5", stars: 2 },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-2.5 h-2.5"
        fill={i < count ? "#F59E0B" : "none"}
        stroke={i < count ? "#F59E0B" : "#374151"}
        strokeWidth="2"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TechCard = ({ name, icon, color, stars, index }) => {
  const isHighlighted = stars >= 4;
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 rounded-2xl border p-4
        transition-all duration-300
        active:scale-[0.97] cursor-default
        ${isHighlighted
          ? "border-white/15 hover:border-white/30"
          : "border-white/5 opacity-60 hover:opacity-100 hover:border-white/12"
        }`}
      style={{
        backgroundColor: `${color}10`,
        boxShadow: isHighlighted ? `0 0 24px -8px ${color}40, inset 0 1px 0 rgba(255,255,255,0.08)` : undefined,
        backdropFilter: "blur(8px)",
        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
        animationDelay: `${index * 40}ms`,
      }}
    >
      {isHighlighted && (
        <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none shadow-sm">
          TOP
        </span>
      )}
      <img
        src={icon}
        alt={name}
        className={`object-contain transition-all duration-300 ${isHighlighted ? "w-10 h-10 xl:w-12 xl:h-12" : "w-8 h-8 xl:w-9 xl:h-9"}`}
        onError={(e) => { e.target.style.display = "none"; }}
      />
      <span className={`text-xs font-semibold tracking-wide ${isHighlighted ? "text-white/85" : "text-white/45"}`}>
        {name}
      </span>
      <Stars count={stars} />
    </div>
  );
};

const Frameworks = () => {
  return (
    <section className="grid place-items-center py-8">
      <div className="w-[92%] xl:w-[80%] rounded-[24px] sm:rounded-[30px] flex flex-col p-5 sm:p-8 xl:p-10 xl:pt-6 gap-5 sm:gap-6 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.1), 0 24px 48px rgba(0,0,0,0.3)",
        }}
      >
        <div className="flex items-end justify-between">
          <h1 className="font-bold text-[13vw] md:text-[8vw] xl:text-[5vw] leading-none text-white">
            Frameworks
          </h1>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 gap-3">
          {techs.map((tech, index) => (
            <TechCard key={tech.name} {...tech} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Frameworks;
