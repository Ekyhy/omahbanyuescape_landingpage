import React from 'react'

function FooterSection() {
  return (
    <footer className="site-footer bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5 className="footer-title">OmahBanyuEscape</h5>
            <p className="footer-desc">Ikuti kami di sosial media untuk update acara, promo, dan cerita pemulihan.</p>
            <div className="footer-social d-flex gap-3">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">YouTube</a>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <h5 className="footer-title">Lokasi</h5>
            <p className="footer-desc">Omah Banyu Escape — Jalan Contoh No.1, Kabupaten, Provinsi</p>
            <div className="map-responsive mt-3">
              <iframe
                title="Omah Banyu Escape Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5459754254357!2d110.3148834!3d-7.837780600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af9003fe6cb1f%3A0x3e4cd6444193c45a!2sOmah%20Banyu%20Escape!5e0!3m2!1sid!2sid!4v1770172890155!5m2!1sid!2sid" 
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <small className="text-muted">© {new Date().getFullYear()} OmahBanyuEscape — All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection