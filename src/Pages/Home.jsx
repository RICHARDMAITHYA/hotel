import React, { useRef, useEffect, useCallback, useMemo } from 'react';
import dish1 from "../assets/ee.jpg";
import dish2 from "../assets/bb.jpg";
import dish3 from "../assets/cc.jpg";
import dish4 from "../assets/vv.jpg";
import dish5 from "../assets/ff.jpg";
import dish6 from "../assets/gg.jpg";
import heroBg from "../assets/ee.jpg";
import ctaBg from "../assets/vv.jpg";
import kitchenBgImage from "../assets/88.jpg";
import video1 from "../assets/44.mp4";
import video2 from "../assets/55.mp4";
import video3 from "../assets/99.mp4";
import video4 from "../assets/11.mp4";
import video5 from "../assets/22.mp4";
import video6 from "../assets/33.mp4";
import aboutImg from "../assets/cc.jpg";
import '../Styles/Home.css';

export default function Home() {
  const dishesRef = useRef(null);
  const kitchenRef = useRef(null);
  const videoRefs = useRef([]);

  // Memoize dish data
  const dishes = useMemo(() => [
    { img: dish1, title: "Signature Pasta" },
    { img: dish2, title: "Grilled Salmon" },
    { img: dish3, title: "Truffle Risotto" },
    { img: dish4, title: "Beef Tenderloin" },
    { img: dish5, title: "Vegetarian Platter" },
    { img: dish6, title: "Dessert Delight" }
  ], []);

  const storyBg = "../assets/tt.jpg";

  const videos = useMemo(() => [video1, video2, video3, video4, video5, video6], []);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        target.classList.add('animate');
      }
    });
  }, []);

  // Video visibility observer to pause/play for perf
  const handleVideoIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(e => console.log('Autoplay prevented'));
      } else {
        video.pause();
      }
    });
  }, []);

  useEffect(() => {
    // Dishes animation observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    if (dishesRef.current) observer.observe(dishesRef.current);
    if (kitchenRef.current) observer.observe(kitchenRef.current);

    // Video observer (kitchen only)
    const videoObserver = new IntersectionObserver(handleVideoIntersection, {
      threshold: 0.5
    });

    videoRefs.current.forEach(ref => {
      if (ref) videoObserver.observe(ref);
    });

    return () => {
      observer.disconnect();
      videoObserver.disconnect();
    };
  }, [handleIntersection, handleVideoIntersection]);

  return (
    <>
      {/* Hero - removed fixed bg */}
      <section className="hero-section" style={{backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>
        <div className="hero-content">
          <h1>WELCOME TO COOKS</h1>
          <p className="hero-subtitle">Discover exquisite flavors in an elegant ambiance</p>
          <div className="hero-buttons">
            <a href="/menu" className="hero-btn secondary">View Menu</a>
            <a href="/reservations" className="hero-cta primary">Book Table</a>
          </div>
        </div>
      </section>

      {/* About Us */}
 <section className="about-section" style={{backgroundImage: `url(${storyBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="about-overlay" />
        <div className="about-container">
          <div className="about-text">
            <h2>Our Story</h2>
            <p style={{fontSize: '1.3rem', lineHeight: '1.8', color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
              Welcome to Cooks, where culinary artistry meets timeless hospitality. 
              For over two decades, we've been crafting unforgettable dining experiences 
              using only the finest seasonal ingredients sourced from local farms and artisan producers.
            </p>

            <p style={{fontSize: '1.3rem', lineHeight: '1.8', color: '#555', marginTop: '1.5rem'}}>
              Our team of passionate chefs, led by Executive Chef Maria Gonzalez, 
              creates innovative dishes that honor tradition while pushing culinary boundaries.
            </p>
          </div>

          <div className="about-image">
            <img src={aboutImg} alt="About Cooks Restaurant" className="about-image-real" loading="lazy"/>
          </div>
        </div>
      </section>

      {/* Featured Dishes - synced styling with beautiful overlay */}
      <section className="dishes-section" style={{backgroundImage: `url(${ctaBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '60vh'}}>
        <div className="dishes-overlay" />
        <div className="dishes-container">
          <h2 style={{fontSize: '3.5rem', color: 'white', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Featured Dishes</h2>
          <p style={{fontSize: '1.3rem', color: 'white', marginBottom: '3rem', opacity: '0.9'}}>Our signature creations</p>
          <div className="dishes-grid" ref={dishesRef}>
            {dishes.map((dish, index) => (
              <div className="dish-card" key={index}>
                <img src={dish.img} alt={dish.title} className="dish-image" loading="lazy" />
                <div className="dish-info">
                  <h3>{dish.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Videos - pause when not visible */}
<section className="kitchen-videos-section" style={{backgroundImage: `url(${kitchenBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="videos-container">
          <h2 style={{fontSize: '3.5rem', marginBottom: '1rem', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Our Kitchen</h2>
          <p style={{fontSize: '1.3rem', marginBottom: '4rem', opacity: 0.9, color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>Behind the scenes of culinary excellence</p>

          <div className="videos-grid" ref={kitchenRef}>
            {videos.map((src, index) => (
              <div className="video-card" key={index}>
                <video 
                  ref={el => { videoRefs.current[index] = el; }} 
                  preload="none" 
                  muted 
                  loop 
                  playsInline 
                  className="video-player"
                  style={{height: '300px'}}
                >
                  <source src={src} type="video/mp4" />
                </video>
                <div className="video-overlay">
                  <h3>Live Kitchen Action</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
