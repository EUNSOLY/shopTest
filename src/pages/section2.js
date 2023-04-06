import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

function Section2(props) {
  let dataList = props.data;
  console.log("상품리스트영역", dataList);

  return (
    <div className="sec2 mw">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {dataList.map((item, i) => {
          return (
            <SwiperSlide className="list" key={i}>
              <Card item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
function Card(props) {
  return (
    <>
      <div className="productCon">
        <img src={`/img/${props.item.img}`} alt={props.item.title} />
      </div>
      <div className="dec">
        <p className="pro">{props.item.title}</p>
        <p className="id">{props.item.id + 1}</p>
        {/* <a href="/detail">자세히보기</a> */}
        <Link to={`/detail/${props.item.id}`}>자세히보기</Link>
        {/* <button>구매하기</button> */}
      </div>
    </>
  );
}
export default Section2;
