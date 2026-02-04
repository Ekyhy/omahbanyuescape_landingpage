import React from 'react'
import { Clock, Users, Calendar, MapPin, AlertCircle } from 'lucide-react'

function KelasKami() {
  return (
    <div className="kelas-kami-section">
      <div className="container">
        <h1 className="kelas-title">Jadwal Kelas & Meditasi</h1>
        
        <div className="row g-4 mt-4">
          {/* Terapi Section */}
          <div className="col-lg-6 col-md-12">
            <div className="kelas-card terapi-card">
              <div className="kelas-header">
                <h2 className="kelas-subtitle">Jadwal Terapi Akuatik</h2>
                <div className="kelas-badge">Senin - Jumat</div>
              </div>

              <div className="kelas-info">
                <div className="info-item">
                  <Users size={20} className="info-icon" />
                  <span>Maksimal 2 orang per kelas</span>
                </div>
              </div>

              {/* Sesi Pagi */}
              <div className="session-block">
                <h3 className="session-title">
                  <Clock size={18} className="session-icon" />
                  Sesi Pagi
                </h3>
                <div className="session-time">07.00 – 11.00</div>
                
                <div className="class-item">
                  <span className="class-label">Kelas 1</span>
                  <span className="class-time">07.00 – 09.00</span>
                </div>
                <div className="class-item">
                  <span className="class-label">Kelas 2</span>
                  <span className="class-time">09.00 – 11.00</span>
                </div>
              </div>

              {/* Sesi Sore */}
              <div className="session-block">
                <h3 className="session-title">
                  <Clock size={18} className="session-icon" />
                  Sesi Sore
                </h3>
                <div className="session-time">15.30 – 17.30</div>
                
                <div className="class-item">
                    <span className="class-label">Kelas 3</span>
                    <span className="class-time">15.30 – 17.30</span>
                    </div>
                </div>
                <div className="important-note">
                    <AlertCircle size={18} className="note-icon" />
                    <div>
                        <strong>Catatan Penting:</strong>
                        <p>Reservasi diperlukan minimal 1 hari sebelumnya</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Meditasi Section */}
          <div className="col-lg-6 col-md-12">
            <div className="kelas-card meditasi-card">
              <div className="kelas-header">
                <h2 className="kelas-subtitle">Meditasi Spiritual</h2>
                <div className="kelas-badge meditasi-badge">Spiritual</div>
              </div>

              <div className="meditation-content">
                <h3 className="meditation-title">Dzikir & Introspeksi Diri</h3>

                <div className="meditation-schedule">
                  <div className="schedule-item">
                    <Calendar size={20} className="schedule-icon" />
                    <div>
                      <span className="schedule-label">Jadwal:</span>
                      <span className="schedule-value">Minggu ke-1 & ke-3 setiap bulan</span>
                    </div>
                  </div>

                  <div className="schedule-item">
                    <Clock size={20} className="schedule-icon" />
                    <div>
                      <span className="schedule-label">Waktu:</span>
                      <span className="schedule-value">21.00 – 22.00 WIB</span>
                    </div>
                  </div>

                  <div className="schedule-item">
                    <MapPin size={20} className="schedule-icon" />
                    <div>
                      <span className="schedule-label">Lokasi:</span>
                      <span className="schedule-value">Omah Banyu Escape</span>
                    </div>
                  </div>
                </div>

                <div className="important-note">
                  <AlertCircle size={18} className="note-icon" />
                  <div>
                    <strong>Catatan Penting:</strong>
                    <p>Reservasi diperlukan minimal 1 hari sebelumnya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KelasKami
