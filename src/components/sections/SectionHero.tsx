import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Hero from "../elements/Hero";
import HeroData from "../../data/SectionHero.json";

const SectionHero = () => {
    return (
        <section id="hero">

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 12000,  // Tiempo en milisegundos entre cada transición
                    disableOnInteraction: false, // El autoplay sigue funcionando incluso si el usuario interactúa
                }}
            >
                {HeroData.map((hero) => (
                    <SwiperSlide key={hero.heroId}>
                        <Hero
                            heroId={hero.heroId}
                            heroImg={hero.heroImg}
                            heroHead={hero.heroHead}
                            heroTitle={hero.heroTitle}
                            heroBody={hero.heroBody}
                            heroBtn={{
                                text: hero.heroBtn.text,
                                link: hero.heroBtn.link,
                            }}
                            heroAlt={hero.heroAlt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SectionHero;
