interface HeroProps {
    heroId: string;
    heroImg: string;
    heroHead: string;
    heroTitle: string;
    heroBody: string;
    heroBtn: {
        text: string;
        link: string;
    };
    heroAlt: string;
}

const Hero: React.FC<HeroProps> = ({
    heroId,
    heroImg,
    heroHead,
    heroTitle,
    heroBody,
    heroBtn,
    heroAlt,
}) => {
    return (
        <div
            id={heroId}
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(images/${heroImg})` }}
        > 
            <div className="absolute inset-0 bg-shark-950/80 sm:bg-transparent sm:from-shark-950/90 sm:to-aqua-950/30 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />

            <div className="relative mx-auto max-w-screen-xl px-7 sm:px-32 lg:flex min-h-[70vh] lg:px-32 flex items-center justify-left xl:px-20">
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className=" font-heading uppercase text-xl font-extrabold text-shark-50 sm:text-2xl md:text-3xl lg:text-5xl">
                        {heroHead}
                        <strong className="block text-nature-600">
                            {heroTitle}
                        </strong>
                    </h1>

                    <p className="font-body mt-4 text-shark-50 text-md sm:text-lg md:text-xl lg:text-2xl">{heroBody}</p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href={heroBtn.link}
                            className="uppercase block w-full rounded-sm bg-nature-600 px-12 py-3 text-sm font-medium text-shark-50 shadow-sm hover:bg-nature-800 focus:ring-3 focus:outline-hidden sm:w-auto"
                            target="_blank"
                        >
                            {heroBtn.text}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
