import React from 'react'

function HubungiKami() {
  const phone = '6281234567890' // replace with your phone number in international format (no plus)
  const waReservasi = `https://wa.me/${phone}?text=Halo%20OmahBanyuEscape,%20saya%20ingin%20melakukan%20reservasi%20untuk%20sesi%20pemulihan.`
  const waHubungi = `https://wa.me/${phone}?text=Halo%20OmahBanyuEscape,%20saya%20ingin%20bertanya%20mengenai%20program%20Anda.`

  return (
    <section id="hubungi" className="hubungi-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="mb-4 mb-md-0 centered-text">
            <h2 className="hubungi-title">Mulai Perjalanan Pemulihan Anda</h2>
            <p className="hubungi-desc">Ambil langkah pertama menuju kesehatan dan keseimbangan hidup yang lebih baik.</p>

            <div className="d-flex gap-3 mt-4 justify-content-center flex-wrap">
              <a className="btn btn-dark btn-lg" href={waReservasi} target="_blank" rel="noreferrer">Reservasi Sekarang</a>
              <a className="btn btn-outline-dark btn-lg" href={waHubungi} target="_blank" rel="noreferrer">Hubungi Kami</a>
            </div>

            <p className="mt-3 note">Reservasi diperlukan minimal 1 hari sebelumnya.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HubungiKami
