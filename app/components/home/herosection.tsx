
import Image from "next/image";
import GlassButton from "../ui/button";
import GlassCard from "../ui/glass-card";

export default function HeroSection() {
    return (
        <section
            className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
            style={{
                background: 'linear-gradient(to top, #4F1A00, #FF980D)'
            }}
        >
            {/* Background Overlay: lbg image (Radiating concentric circles) */}
            <div className="absolute -top-[10%] -left-[5%] w-[100%] h-[130%] pointer-events-none z-10 opacity-100">
                <Image
                    src="/images/home/lbg.png"
                    alt=""
                    fill
                    className="object-contain object-left-top rotate-12"
                    priority
                />
            </div>

            {/* Main Content Container - Centers everything on large screens */}
            <div className="relative w-full max-w-[1920px] h-full min-h-screen px-4 md:px-8 flex items-center z-[80]">
                
                {/* Left Side Text Content */}
                <div className="relative z-[100] w-full md:w-1/2 flex flex-col items-start justify-center pointer-events-auto">
                    <h1 className="font-bebas text-[clamp(48px,10vw,140px)] font-normal text-white mb-4 tracking-normal leading-[1.0] md:leading-[100%] drop-shadow-2xl uppercase">
                        Sip the Warmth <br />
                        <span className="text-orange-100">of Nature</span>
                    </h1>
                    <p className="text-[clamp(16px,1.5vw,24px)] text-white/90 mb-10 max-w-xl font-sans leading-relaxed drop-shadow-md">
                        Six organic, herbal teas for holistic wellness. <br className="hidden md:block" />
                        Cultivated in the fertile lands of Sri Lanka.
                    </p>
                    <GlassButton text="Buy Now" />
                </div>

                {/* Right Side Graphic with Navigation Arrows */}
                <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 w-full md:w-1/2 h-[80%] z-20 flex items-center">
                    {/* Left Arrow */}
                    <button className="absolute left-[32%] top-[55%] z-30 text-white/80 hover:text-white transition-colors cursor-pointer">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                    </button>

                    {/* Image */}
                    <div className="relative w-full h-full pointer-events-none">
                        <Image
                            src="/images/home/right.png"
                            alt=""
                            fill
                            className="object-contain object-right"
                            priority
                        />
                    </div>

                    {/* Right Arrow */}
                    <button className="absolute right-[4%] top-[55%] z-30 text-white/80 hover:text-white transition-colors cursor-pointer">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </button>
                </div>

                {/* Floating Center Leaf - Now inside the container */}
                <div className="absolute left-[33%] top-[28%] w-48 md:w-80 h-48 md:h-80 pointer-events-none z-30 opacity-90">
                    <Image
                        src="/images/home/aleaf.png"
                        alt=""
                        fill
                        className="object-contain -rotate-12"
                        priority
                    />
                </div>

                {/* Bottom Navigation - Now inside the container */}
                <div className="absolute bottom-12 left-4 md:left-8 right-4 md:right-8 z-70 flex justify-between items-center text-white pointer-events-auto">
                    <div className="flex items-center gap-4 cursor-pointer group">
                        <div className="hover:scale-110 transition-transform">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6"/>
                            </svg>
                        </div>
                        <span style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: 'clamp(14px, 1.5vw, 24px)', lineHeight: '100%', letterSpacing: '0%', textTransform: 'uppercase' }}>
                            Cold Infusions
                        </span>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                        <div className="h-[4px] w-10 md:w-14 bg-white rounded-full"></div>
                        <div className="h-[5px] w-[5px] bg-white/40 rounded-full"></div>
                        <div className="h-[5px] w-[5px] bg-white/40 rounded-full"></div>
                    </div>
                </div>

                {/* Product Info Card */}
                <div className="absolute bottom-[10%] right-4 md:right-[18%] z-70 max-w-[90%] md:max-w-xs pointer-events-auto">
                    <GlassCard 
                        title="PURE CEYLON CINNAMON BREW"
                        description="97% pure ceylon cinnamon with 3% cloves for that smooth aftertaste. let the nose tingling aroma of cinnamon waft through your spaces as this any day"
                    />
                </div>
            </div>

            {/* Corner Decorations (Independent of content container) */}
            <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 pointer-events-none z-50">
                <Image src="/images/home/topleft.png" alt="" fill className="object-contain object-left-top" />
            </div>
            <div className="absolute top-0 right-0 w-24 md:w-48 h-24 md:h-48 pointer-events-none z-50">
                <Image src="/images/home/topright.png" alt="" fill className="object-contain object-right-top" />
            </div>
            <div className="absolute -bottom-12 left-0 w-64 md:w-[28rem] h-64 md:h-[28rem] pointer-events-none z-50">
                <Image src="/images/home/bl.png" alt="" fill className="object-contain object-left-bottom" />
            </div>
            <div className="absolute -bottom-12 right-0 w-64 md:w-[28rem] h-64 md:h-[28rem] pointer-events-none z-50">
                <Image src="/images/home/br.png" alt="" fill className="object-contain object-right-bottom" />
            </div>
        </section>
    );
}
