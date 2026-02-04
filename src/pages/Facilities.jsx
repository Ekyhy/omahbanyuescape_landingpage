import React from 'react'

const images = [
  { src: '/src/assets/img/gambar3.jpeg', title: 'Kolam Terapi', desc: 'Kolam terapi hangat untuk relaksasi dan rehabilitasi' },
  { src: '/src/assets/img/gambar5.jpeg', title: 'Area Fitness', desc: 'Area yang tepat untuk anda berolahraga' },
  { src: '/src/assets/img/gambar8.jpg', title: 'Area Istirahat', desc: 'Area bersantai yang baik dan cocok untuk berlibur' },
]

function Facilities() {
  return (
    <section id="facilities" className="facilities-section py-5">
      <div className="container">
        <h2 className="facilities-title text-center mb-4">Fasilitas Kami</h2>
        <p className="facilities-subtitle text-center mb-5">Fasilitas lengkap untuk kenyamanan dan pemulihan Anda</p>

        <div className="row g-4">
          {images.map((img, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="facility-card">
                <div className="facility-image-wrap">
                  <img src={img.src} alt={img.title} className="facility-image" />
                  <div className="facility-overlay">
                    <h3 className="facility-title">{img.title}</h3>
                    <p className="facility-desc">{img.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities
