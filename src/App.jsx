import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Send, Ghost, ChevronRight, AlertTriangle, ShieldCheck, Lock, Video } from 'lucide-react';
import Lenis from 'lenis';
import { translations } from './translations';
import './App.css';
import Particles from './Particles';
import profileImg from './assets/image1.jpeg';

// Import Bhabhi Images
import b1 from '../images/married bhabhi/bhabhi1.jpeg';
import b2 from '../images/married bhabhi/bhabhi2.jpeg';
import b3 from '../images/married bhabhi/bhabhi3.jpeg';
import b5 from '../images/married bhabhi/bhabhi5.jpeg';
import b6 from '../images/married bhabhi/bhabhi6.jpeg';
import b14 from '../images/married bhabhi/bhabhi14.jpeg';

// Import Fantasy Images
import f1 from '../images/fantasy/fan1.jpeg';
import f2 from '../images/fantasy/fan2.jpeg';
import f3 from '../images/fantasy/fan3.jpeg';
import f4 from '../images/fantasy/fan4.jpeg';
import f5 from '../images/fantasy/fan5.jpeg';
import f6 from '../images/fantasy/fan6.jpeg';

// Import Young Girls Images
import g1 from '../images/young girls/girl1.jpeg';
import g2 from '../images/young girls/girl2.jpeg';
import g3 from '../images/young girls/girl3.jpeg';
import g4 from '../images/young girls/girl4.jpeg';
import g5 from '../images/young girls/girl5.jpeg';
import g6 from '../images/young girls/girl6.jpeg';
import g7 from '../images/young girls/girl7.jpeg';
import g8 from '../images/young girls/girl8.jpeg';

// Import Romantic Images
import r1 from '../images/romantic/romantic1.jpeg';
import r2 from '../images/romantic/romantic2.jpeg';
import r3 from '../images/romantic/romantic3.jpeg';
import r4 from '../images/romantic/romantic4.jpeg';
import r5 from '../images/romantic/romantic5.jpeg';
import r6 from '../images/romantic/romantic6.jpeg';

// Import Bottom Images
import d1 from '../images/bottom/dick1.jpeg';
import d2 from '../images/bottom/dick2.jpeg';

const App = () => {
  const [lang, setLang] = useState(null);

  const t = lang ? translations[lang] : translations.hinglish;

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const socialLinks = [
    { id: 'instagram', name: 'Instagram', icon: <Instagram />, color: '#E1306C', url: 'https://instagram.com/hiteshsharmaaaaaa' },
    { id: 'facebook', name: 'Facebook', icon: <Facebook />, color: '#1877F2', url: 'https://www.facebook.com/share/1CowLmA4dC/' },
    { id: 'telegram', name: 'Telegram', icon: <Send />, color: '#0088cc', url: 'https://t.me/lifeiseasy121' },
    { id: 'snapchat', name: 'Snapchat', icon: <Ghost />, color: '#FFFC00', url: 'https://www.snapchat.com/add/legacyloading11' }
  ];

  const bhabhiImages = [b1, b2, b3, b5, b6, b14];
  const fantasyImages = [f1, f2, f3, f4, f5, f6];
  const youngImages = [g1, g2, g3, g4, g5, g6, g7, g8];
  const romanticImages = [r1, r2, r3, r4, r5, r6];
  const bottomImages = [d1, d2];
  const videoSlots = Array(6).fill(null);

  return (
    <div className="app-container">
      <Particles />

      {/* Top Warning Banner - Always Visible */}
      <motion.div
        className="warning-banner"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AlertTriangle size={24} />
        <span>{lang ? t.warningTitle : "MEN NOT ALLOWED / पुरुषों का आना मना है"}</span>
        <AlertTriangle size={24} />
      </motion.div>

      {/* Language Selection Overlay */}
      <AnimatePresence>
        {!lang && (
          <motion.div
            className="lang-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="lang-content">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                SELECT LANGUAGE
              </motion.h1>
              <div className="lang-btns">
                <button onClick={() => setLang('hindi')} className="premium-btn">हिंदी</button>
                <button onClick={() => setLang('hinglish')} className="premium-btn">Hinglish</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {lang && (
        <>
          {/* Hero & Bio Section - Vertical Flow */}
          <section className="hero-vertical container">
            <motion.div
              className="vertical-content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="gradient-text main-heading">{t.bioTitle}</h2>
              <p className="bio-intro">{t.bioText.split(',')[0]}...</p>

              <div className="vertical-image-wrapper">
                <img src={profileImg} alt="Profile" className="profile-pic-large" />
                <div className="glow-effect"></div>
              </div>

              <div className="bio-extended">
                <p>{t.bioText}</p>
                <p className="bold-callout">Gwalior's #1 Choice for Women Satisfaction</p>
              </div>
            </motion.div>
          </section>

          {/* Social Connect Section */}
          <section className="social-section container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {t.socialTitle}
            </motion.h2>
            <div className="social-grid">
              {socialLinks.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--accent-color': item.color }}
                >
                  <div className="icon-wrapper">{item.icon}</div>
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Married Bhabhi Gallery Section */}
          <section className="bhabhi-gallery container">
            <div className="section-header">
              <h2 className="section-title">{t.bhabhiTitle}</h2>
              <p className="section-subtitle">{t.bhabhiText}</p>
            </div>
            <div className="bhabhi-grid">
              {bhabhiImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="bhabhi-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <img src={img} alt={`Bhabhi ${i + 1}`} className="bhabhi-img" />
                  <div className="img-overlay"></div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Fantasy Section */}
          <section className="bhabhi-gallery container fantasy-section">
            <div className="section-header">
              <h2 className="section-title highlight-text">{t.fantasyTitle}</h2>
              <p className="section-subtitle">{t.fantasyText}</p>
            </div>
            <div className="bhabhi-grid">
              {fantasyImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="bhabhi-card fantasy-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <img src={img} alt={`Fantasy ${i + 1}`} className="bhabhi-img" />
                  <div className="img-overlay fantasy-overlay"></div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Young Girls Section */}
          <section className="bhabhi-gallery container young-section">
            <div className="section-header">
              <h2 className="section-title young-highlight">{t.youngTitle}</h2>
              <p className="section-subtitle">{t.youngText}</p>
            </div>
            <div className="bhabhi-grid">
              {youngImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="bhabhi-card young-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <img src={img} alt={`Young Girl ${i + 1}`} className="bhabhi-img" />
                  <div className="img-overlay young-overlay"></div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Romantic Section */}
          <section className="bhabhi-gallery container romantic-section">
            <div className="section-header">
              <h2 className="section-title romantic-highlight">{t.romanticTitle}</h2>
              <p className="section-subtitle">{t.romanticText}</p>
            </div>
            <div className="bhabhi-grid">
              {romanticImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="bhabhi-card romantic-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <img src={img} alt={`Romantic Friend ${i + 1}`} className="bhabhi-img" />
                  <div className="img-overlay romantic-overlay"></div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Bottom CTA Section */}
          <section className="bhabhi-gallery container bottom-section">
            <div className="section-header">
              <h2 className="section-title bottom-highlight">{t.bottomTitle}</h2>
              <p className="section-subtitle">{t.bottomText}</p>
            </div>

            {/* ✅ Trust & Safety Text */}
            <motion.div
              className="trust-banner"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="trust-icons-row">
                <ShieldCheck size={32} className="trust-icon" />
                <Lock size={32} className="trust-icon" />
                <ShieldCheck size={32} className="trust-icon" />
              </div>
              <p className="trust-heading">100% Safe · Professional · Private</p>
              <p className="trust-text">
                Hmāre yahān sirf <strong>professionals kaam karte hain</strong> — full safety aur privacy ke saath.
                Saari videos aur pictures <strong>permission se click ki hain</strong> aur upload ki hain.
                <br /><br />
                Hmāre yahān aane ke baad <strong>har aurat satisfy hokar jaati hai</strong> — yeh hamāra commitment hai. 🔒
              </p>
            </motion.div>

            <div className="bhabhi-grid">
              {bottomImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="bhabhi-card bottom-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <img src={img} alt={`Bottom ${i + 1}`} className="bhabhi-img" />
                  <div className="img-overlay bottom-overlay"></div>
                </motion.div>
              ))}
            </div>

            {/* 🎬 Video Placeholder Slots */}
            <div className="video-section-label">
              <Video size={28} />
              <span>Videos Coming Soon</span>
            </div>
            <div className="video-slots-grid">
              {videoSlots.map((_, i) => (
                <motion.div
                  key={i}
                  className="video-slot-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="video-play-btn">▶</div>
                  <p className="video-slot-label">Video {i + 1}</p>
                  <p className="video-slot-sub">Upload Pending</p>
                </motion.div>
              ))}
            </div>
          </section>

          <footer className="footer container">
            <p>&copy; 2026 Premium Playboy. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
