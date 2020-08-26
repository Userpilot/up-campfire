import React, { useState } from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperWithCustomScroll(props) {
  const [, updateSwiper] = useState(false);
  const { children } = props;

  const params = {
    ContainerEl: 'section',
    WrapperEl: 'section',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    renderSrollbar: () => (
      <div>
        <hr />
      </div>
    ),
  };

  return (
    <>
      <Swiper getSwiper={updateSwiper} {...params}>
        {children}
      </Swiper>
    </>
  );
}
