import React, { useState } from 'react'
import { Zap, Wind, Heart, Activity, Brain, BarChart3 } from 'lucide-react'
import KelasKami from './KelasKami'
import Facilities from './Facilities'
import HubungiKami from './HubungiKami'

function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  const fullDescription = `Selamat datang di OmahBanyuEscape, OmahBanyuEscape telah berhasil mengembangkan metode "Aquatherapy Balancing Methode". 
                  Metode ini menggabungkan prinsip-prinsip fisika seperti Hukum Archimedes dan Hukum Newton III dengan pendekatan 
                  spiritual untuk menciptakan pengalaman terapi air yang holistik dan menyeluruh. 
                  Di OmahBanyuEscape, kami percaya bahwa pemulihan sejati melibatkan keseimbangan antara tubuh, pikiran, dan jiwa. 
                  Dengan metode inovatif kami, kami berkomitmen untuk membantu Anda mencapai kesehatan optimal dan kesejahteraan yang berkelanjutan.`
  
  const truncatedDescription = `Selamat datang di OmahBanyuEscape, OmahBanyuEscape telah berhasil mengembangkan metode "Aquatherapy Balancing Methode". 
                  Metode ini menggabungkan prinsip-prinsip fisika seperti Hukum Archimedes dan Hukum Newton III dengan pendekatan spiritual...`
  const benefits = [
    {
      icon: <Zap size={40} />,
      title: 'Saraf Kejepit & Skoliosis',
      description: 'Terapi air yang tepat untuk mengurangi tekanan saraf dan memperbaiki postur tulang belakang'
    },
    {
      icon: <Heart size={40} />,
      title: 'Nyeri & Peradangan Sendi',
      description: 'Aquatherapy mengurangi beban pada sendi dan meningkatkan fleksibilitas'
    },
    {
      icon: <Wind size={40} />,
      title: 'Asma & Pernapasan',
      description: 'Lingkungan air yang lembab membantu melegakan sistem pernapasan'
    },
    {
      icon: <Activity size={40} />,
      title: 'Pemulihan Pasca Operasi',
      description: 'Rehabilitasi yang aman dengan dukungan air untuk mempercepat pemulihan'
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Meningkatkan Vitalitas',
      description: 'Stimulasi aliran darah dan energi tubuh melalui terapi air yang terstruktur'
    },
    {
      icon: <Brain size={40} />,
      title: 'Keseimbangan Spiritual',
      description: 'Pendekatan holistik yang menyatukan tubuh, pikiran, dan jiwa'
    }
  ]

  return (
    <>
      <div id="home" className="hero-banner w-100 min-vh-100 d-flex align-items-center justify-content-center">
        <div className="hero-content text-center text-white">
          <h1 className="hero-title">OmahBanyuEscape</h1>
          <p className="hero-subtitle">Aquatherapy Balancing Methode</p>
          <button className="btn btn-light btn-lg mt-4" onClick={() => handleScrollToSection('about')}>Jelajahi Sekarang</button>
        </div>
      </div>
      
      <section id="about" className="product-intro py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="product-content">
                <h2 className="product-title">OmahBanyuEscape</h2>
                <p className="product-subtitle">Aquatherapy Balancing Methode</p>
                <p className="product-description">
                  {isExpanded ? fullDescription : truncatedDescription}
                </p>
                <button className="btn btn-outline-dark mt-3" onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? 'Sembunyikan' : 'Pelajari Lebih Lanjut'}
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="product-image">
                <img src="/src/assets/img/gambar9.jpg" alt="OmahBanyuEscape" className="img-fluid rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Kami Section */}
      <section id="produk" className="produk-header py-5">
        <div className="container">
          <h1 className="produk-title">Pemulihan Holistik dengan Aquatherapy</h1>
          <p className="produk-subtitle">Mengoptimalkan Hukum Archimedes dan Hukum Newton III dalam terapi air, dikombinasikan dengan pendekatan spiritual untuk pemulihan yang paripurna. Serta didampingi oleh instruktur yang berpengalaman</p>
        </div>
      </section>

      <section id="benefits" className="benefits-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Manfaat Terapi Kami</h2>
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="benefit-card h-100">
                  <div className="benefit-icon justify-content-center d-flex mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="kelas" className="py-5">
        <KelasKami />
      </section>

      <section id="facilities" className="py-5">
        <Facilities />
      </section>

      <section id="facilities" className="py-5">
        <HubungiKami />
      </section>
    </>
  )
}

export default HomePage