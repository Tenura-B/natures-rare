
interface GlassCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function GlassCard({ title, description, className = "" }: GlassCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-[2rem] shadow-2xl w-full md:w-[373px] md:h-[203px] overflow-hidden flex flex-col justify-center ${className}`}>
      <h3 className="font-bebas text-xl md:text-2xl text-white mb-2 leading-tight tracking-wide">
        {title}
      </h3>
      <div className="bg-black/20 p-3 md:p-4 rounded-[1rem]">
          <p className="text-white/90 font-sans text-xs md:text-[13px] leading-relaxed italic line-clamp-4">
            {description}
          </p>
      </div>
    </div>
  );
}
