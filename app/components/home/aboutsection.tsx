import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative w-full min-h-[85vh] bg-white overflow-hidden flex flex-col">

            {/* Background Image - Full Width & Full Height */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/about/Mask group.jpg.jpeg"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Corner Framing Leaves */}
            {/* Top Left Leaf */}
            <div className="absolute top-8 md:top-20 left-0 w-64 md:w-[600px] h-64 md:h-[600px] pointer-events-none z-30">
                <Image
                    src="/images/about/leftleaf.png"
                    alt=""
                    fill
                    className="object-contain object-left-top"
                    priority
                />
            </div>

            {/* Bottom Right Leaf */}
            <div className="absolute bottom-[25%] right-0 w-48 md:w-[320px] h-48 md:h-[320px] pointer-events-none z-30">
                <Image
                    src="/images/about/rightleaf.png"
                    alt=""
                    fill
                    className="object-contain object-right-bottom"
                    priority
                />
            </div>



            {/* Top Content */}
            <div className="relative z-20 w-full max-w-[1920px] mx-auto px-6 md:px-12 pt-16 md:pt-24">
                {/* Header Container - Specific Dimensions on Desktop */}
                <div className="ml-0 md:ml-64 md:w-[1116px] md:h-[389px] flex flex-col justify-center">
                    {/* Label + View All row */}
                    <div className="flex items-center justify-between mb-2 md:mb-4">
                        <p style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: 'clamp(20px, 2.5vw, 40px)', letterSpacing: '0.2em' }} className="uppercase text-gray-500">
                            Our Collections
                        </p>
                        <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors group pr-4 md:pr-64">
                            <span style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>View all</span>
                            <div className="w-8 h-8 rounded-full bg-[#6BBF2F] flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    {/* Heading - Massive for high-fidelity feel */}
                    <h2 className="font-bebas text-[clamp(80px,18vw,280px)] leading-[0.85] tracking-tight">
                        <span className="text-[#1a1a1a]">HOT </span>
                        <span className="text-[#6BBF2F]">BREWS</span>
                    </h2>
                </div>
            </div>

            {/* Content Layer */}
            <div className="relative flex-1 w-full mt-8 md:mt-12">
                {/* Center Cup */}
                <div className="relative z-40 flex justify-center items-end h-full -mt-32 md:-mt-64">
                    <div className="relative w-[clamp(350px,55vw,750px)] h-[clamp(350px,55vw,750px)]">
                        <Image
                            src="/images/about/aboutcup.png"
                            alt="Tea Cup"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
