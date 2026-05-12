
interface ButtonProps {
  text: string;
  className?: string;
}

export default function GlassButton({ text, className = "" }: ButtonProps) {
  return (
    <button className={`group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white pl-8 pr-2 py-2 rounded-full transition-all duration-300 shadow-xl ${className}`}>
      <span className="font-sans font-medium tracking-wide text-lg uppercase">{text}</span>
      <div className="w-10 h-10 bg-[#7DBA28] rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
        <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </button>
  );
}
