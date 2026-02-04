import React from 'react'
import { Zap, Wind, Heart, Activity, Brain, BarChart3 } from 'lucide-react'

function ProdukKami() {
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
    <div>
      {/* Header Section */}
      <section className="produk-header py-5">
        <div className="container">
          <h1 className="produk-title">Pemulihan Holistik dengan Aquatherapy</h1>
          <p className="produk-subtitle">Mengoptimalkan Hukum Archimedes dan Hukum Newton III dalam terapi air, dikombinasikan dengan pendekatan spiritu </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Manfaat Terapi Kami</h2>
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="benefit-card h-100">
                  <div className="benefit-icon">
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
    </div>
  )
}

export default ProdukKami
