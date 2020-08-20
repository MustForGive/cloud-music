import React, { useEffect, useState } from 'react'
import { SliderContainer } from './style'
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null)
  const { bannerList } = props

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      // 初始化Swiper 传入两个参数进行初始化 (css选择器，个性化配置)
      let newSliderSwiper = new Swiper('.slider-container', {
        //是否循环
        loop: true,
        //自动播放
        autoplay: {
          //延迟多少时间播放
          delay: 3000,
          //点击后是否滚动    false：继续滚动
          disableOnInteraction: true
        },
        //分页器，改变样式
        pagination: { el: 'swiper-pagination' }
      })
      setSliderSwiper(newSliderSwiper)
    }
    // useEffect 根据什么属性更新
  }, [bannerList.length, sliderSwiper]);

  return (
    <SliderContainer>
    <div className="before"></div>
      <div className="slider-container">
          <div className="swiper-wrapper">
            {
              bannerList.map(slider => {
                return (
                  <div className="swiper-slide" key={slider.imageUrl}>
                    <div className="slider-nav">
                      <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                    </div>
                  </div>
                );
              })
            }
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </SliderContainer>
  );
}

export default React.memo(Slider)