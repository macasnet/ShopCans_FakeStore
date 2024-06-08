import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
      <Slider {...settings}>
      <div className='!flex items-center bg-gray-100 px-4'>
        <div className=''>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia iste perspiciatis architecto magnam placeat sunt provident tenetur accusamus nostrum eum dolor perferendis, eius amet culpa aperiam qui aspernatur. Fuga.</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
        </div>
        <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/843f298f-7d8b-4f24-83c5-540d695c1a22/custom-nike-pegasus-41-by-you.png" alt="" />
      </div>
      <div className='!flex items-center bg-gray-100 px-4'>
        <div className=''>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia iste perspiciatis architecto magnam placeat sunt provident tenetur accusamus nostrum eum dolor perferendis, eius amet culpa aperiam qui aspernatur. Fuga.</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
        </div>
        <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28fede18-6128-4151-b17e-a1995d25c459/custom-nike-pegasus-41-by-you.png" alt="" />
      </div>
      </Slider>
    </div>
  )
}

export default SliderComp
