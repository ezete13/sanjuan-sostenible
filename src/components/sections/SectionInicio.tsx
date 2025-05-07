import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ElementInicio from "../elements/ElementInicio";
import Data from "../../data/SectionInicio.json";

const SectionInicio = () => {
    return (
        <section id="inicio">

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 12000,
                    disableOnInteraction: false,
                }}
            >
                {Data.map((item) => (
                    <SwiperSlide key={item.heroId}>
                        <ElementInicio
                            heroId={item.heroId}
                            heroImg={item.heroImg}
                            heroHead={item.heroHead}
                            heroTitle={item.heroTitle}
                            heroBody={item.heroBody}
                            heroBtn={{
                                text: item.heroBtn.text,
                                link: item.heroBtn.link,
                            }}
                            heroAlt={item.heroAlt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SectionInicio;
