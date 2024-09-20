import React from 'react';
import { IonContent, IonButton } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper';
import './Preview.css';
import { useHistory } from "react-router-dom";

const Preview: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
      history.push("/tab1"); // Redirect to Tab1
  };

  const slides = [
    {
      image: 'https://via.placeholder.com/300',
      title: 'Make Use Of Nigerian Railway',
      description: 'The Nigerian Railway Station is one of the best and loyal stations in the global market...'
    },
    {
      image: 'https://via.placeholder.com/300/ff0000',
      title: 'Travel Across Nigeria',
      description: 'We provide the best trains to travel across the country safely and affordably...'
    },
    {
      image: 'https://via.placeholder.com/300/00ff00',
      title: 'Explore The Beauty of Nigeria',
      description: 'Enjoy a comfortable journey while exploring the breathtaking landscapes of Nigeria...'
    }
  ];

  return (
    <IonContent id="preview-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true} // Enables grab cursor for mouse users
        allowTouchMove={true} // Enables touch and mouse swiping
        modules={[Pagination]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div id="preview-card">
              <div id="image-container">
                <img 
                  src={slide.image} 
                  alt="Slide Illustration" 
                  id="illustration" 
                />
              </div>
              <div id="text-container">
                <h2 id="main-title">{slide.title}</h2>
                <p id="description">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <IonButton id="get-started-btn" color="primary" onClick={handleClick}>
        Get Started →
      </IonButton>
    </IonContent>
  );
};


export default Preview;
