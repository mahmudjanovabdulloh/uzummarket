import "./HomePage.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Martimg from "../../assets/IMGS/8Mart.png";
import Ramazonimg from "../../assets/IMGS/Ramazonga.png";
import Harkunifoydaimg from "../../assets/IMGS/HarKuniFoyda.png";
import Zamonaviyimg from "../../assets/IMGS/ZmonaviyBozor.png";
import LiNingimg from "../../assets/IMGS/LiNing.png";
import Boschimg from "../../assets/IMGS/Bosch.png";
import Dysonimg from "../../assets/IMGS/Dyson.png";
import Milavitsiyaimg from "../../assets/IMGS/Milavitsiya.png";
import Premiumimg from "../../assets/IMGS/Premium.png";
import Zargarlikimg from "../../assets/IMGS/ZargarlikBuyumlari.png";
import TexnoSovgaimg from "../../assets/IMGS/TexnoSovgalar.png";

const HomePage = () => {
  return (
    <main>
      <div className="container">
        <section className="home-page-wrapper">
          <Swiper
            style={{ borderRadius: "20px" }}
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <Link>
                <img src={Martimg} alt="Mart img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <img src={Ramazonimg} alt="Ramazon img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <img src={Harkunifoydaimg} alt="Aksiya img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <img src={Zamonaviyimg} alt="Zamonaviy img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <img src={LiNingimg} alt="LiNing img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <img src={Boschimg} alt="Bosch img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <img src={Dysonimg} alt="Dyson img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <img src={Milavitsiyaimg} alt="Milavitsiya img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <img src={Premiumimg} alt="Premium img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link>
                <img src={Zargarlikimg} alt="Zargarlik img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
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
