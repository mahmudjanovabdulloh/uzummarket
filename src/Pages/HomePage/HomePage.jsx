import "./HomePage.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Martimg from "../../assets/IMGS/Martimg.png";
import Ramazonimg from "../../assets/IMGS/Ramazonimg.png";
import Harkunifoydaimg from "../../assets/IMGS/HarKuniFoydaimg.png";
import Zamonaviyimg from "../../assets/IMGS/Zamonaviyimg.png";
import LiNingimg from "../../assets/IMGS/LiNingimg.png";
import Procterimg from "../../assets/IMGS/Procterimg.png";
import Dysonimg from "../../assets/IMGS/Dysonimg.png";
import Milavitsiyaimg from "../../assets/IMGS/Milavitsiyaimg.png";
import Premiumimg from "../../assets/IMGS/Premiumimg.png";
import Zargarlikimg from "../../assets/IMGS/Zargarlikimg.png";
import TexnoSovgaimg from "../../assets/IMGS/TexnoSovgaimg.png";

const HomePage = () => {
  return (
    <main>
      <div className="container">
        <section className="home-page-wrapper">
          <Swiper
            className="home-page-swiper"
            style={{ borderRadius: "20px" }}
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide className="home-page-swiper-swiper-slide">
              <Link>
                <img src={Martimg} alt="Mart img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="home-page-swiper-swiper-slide">
              <Link>
                <img src={Ramazonimg} alt="Ramazon img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="home-page-swiper-swiper-slide">
              <Link>
                <img src={Harkunifoydaimg} alt="Aksiya img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="home-page-swiper-swiper-slide">
              <Link>
                <img src={Zamonaviyimg} alt="Zamonaviy img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="home-page-swiper-swiper-slide">
              <Link>
                <img src={LiNingimg} alt="LiNing img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="home-page-swiper-swiper-slide">
              <Link>
                <img src={Procterimg} alt="Procter img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="home-page-swiper-swiper-slide">
              <Link>
                <img src={Dysonimg} alt="Dyson img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="home-page-swiper-swiper-slide">
              <Link>
                <img src={Milavitsiyaimg} alt="Milavitsiya img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="home-page-swiper-swiper-slide">
              <Link>
                <img src={Premiumimg} alt="Premium img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="home-page-swiper-swiper-slide">
              <Link>
                <img src={Zargarlikimg} alt="Zargarlik img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="home-page-swiper-swiper-slide">
              <Link>
                <img src={TexnoSovgaimg} alt="TexnoSovga img" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </section>
        {/*  */}
        {/*  */}
        {/*  */}
        <section className="home-page-cover">
          <Link>
            <div className="home-page-cover-div">
              <img
                src="https://static.uzum.uz/static/promo_images/f2ed316f-e096-4c91-8d4e-9ff50e4c8889"
                alt=""
                width={"50px"}
              />
              <p>Sizning go&apos;zalligingiz</p>
            </div>
          </Link>
          <Link>
            <div className="home-page-cover-div">
              <img
                src="https://static.uzum.uz/static/promo_images/8fc205bf-b226-4068-aa1f-8399deb9f422"
                alt=""
                width={"50px"}
              />
              <p>Hammasi auto uchun</p>
            </div>
          </Link>
          <Link>
            <div className="home-page-cover-div">
              <img
                src="https://static.uzum.uz/static/promo_images/358748a3-cb30-47eb-86b8-94fdd385d4d0"
                alt=""
                width={"50px"}
              />
              <p>Yosh malikalarga</p>
            </div>
          </Link>
          <Link>
            <div className="home-page-cover-div">
              <img
                src="https://static.uzum.uz/static/promo_images/d4b53b3b-2f13-4de8-8ffa-c46b36b40649"
                alt=""
                width={"50px"}
              />
              <p>Garderobni yangilaymiz</p>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
