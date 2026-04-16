import { useRef, useEffect, useCallback, useMemo } from 'react';

import aboutHero from "../assets/aa.jpg";
import videoHero from "../assets/sv.mp4";
import storyImg from "../assets/hh.jpg";
import chef1 from "../assets/sp.mp4";
import chef2 from "../assets/ps.mp4";
import chef3 from "../assets/kq.mp4";
import videoAbout from "../assets/sp.mp4";
import '../Styles/About.css';

export default function About() {
  const teamRef = useRef(null);
  const videoRefs = useRef([]);

  // Memoize chef data
  const chefs = useMemo(() => [
    { video: chef1, name: "Maria Gonzalez", role: "Executive Chef", desc: "25 years experience, 3 Michelin stars" },
    { video: chef2, name: "Carlos Rivera", role: "Sous Chef", desc: "Master of modern Spanish cuisine" },
    { video: chef3, name: "Sofia Patel", role: "Pastry Chef", desc: "Winner of National Dessert Awards" }
  ], []);

  const handleIntersection = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, []);

  // Video visibility observer
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
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    if (teamRef.current) observer.observe(teamRef.current);

    // Video observer
    const videoObserver = new IntersectionObserver(handleVideoIntersection, {
      threshold: 0.5
    });

    // Observe hero video and kitchen video
    const heroVideo = document.querySelector('.hero-video-bg');
    const kitchenVideo = document.querySelector('.about-video');
    if (heroVideo) videoObserver.observe(heroVideo);
    if (kitchenVideo) videoObserver.observe(kitchenVideo);

    // Team videos refs set after render
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
      {/* Hero */}
      <section className="about-hero">
        <video preload="none" muted loop playsInline className="hero-video-bg" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0}}>
          <source src={videoHero} type="video/mp4" />
        </video>
        <div className="about-hero-content">
          <h1>About Our Restaurant</h1>
          <p style={{fontSize: '1.5rem', opacity: 0.9}}>A legacy of culinary excellence and passion</p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story-section">
        <div className="story-container">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 1998 by Chef Maria Gonzalez, our restaurant began as a small family-run kitchen 
              serving authentic Mediterranean cuisine. What started with 12 seats has grown into a culinary 
              destination known for innovative dishes and impeccable service.
            </p>
            <p>
              Today, we source ingredients from local farms and artisan producers, maintaining our commitment 
              to quality and sustainability. Our team of 25 passionate professionals creates unforgettable 
              experiences for guests from around the world.
            </p>
          </div>
          <img src={storyImg} alt="Our Story" className="story-image" loading="lazy" />
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="team-container">
          <h2 style={{fontSize: '3.5rem', marginBottom: '1rem'}}>Meet Our Chefs</h2>
          <p style={{fontSize: '1.3rem', opacity: 0.9, marginBottom: '3rem'}}>The masters behind our culinary creations</p>
          <div className="team-grid" ref={teamRef}>
            {chefs.map((chef, index) => (
              <div className="team-card" key={index}>
                <video 
                  ref={el => { videoRefs.current[index] = el; }} 
                  preload="none" 
                  muted 
                  loop 
                  playsInline 
                  className="team-video"
                >
                  <source src={chef.video} type="video/mp4" />
                </video>
                <h3 className="team-name">{chef.name}</h3>
                <p className="team-role">{chef.role}</p>
                <p>{chef.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Video */}
      <section className="video-section">
        <div className="video-container">
          <h2 style={{fontSize: '3.5rem', marginBottom: '1rem'}}>Behind the Scenes</h2>
          <p style={{fontSize: '1.3rem', opacity: 0.8, marginBottom: '3rem'}}>Watch our culinary team in action</p>
          <video preload="none" muted loop playsInline className="about-video">
            <source src={videoAbout} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}

