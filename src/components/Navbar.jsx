import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (scrolled) document.body.classList.add('has-fixed-navbar')
    else document.body.classList.remove('has-fixed-navbar')
    return () => document.body.classList.remove('has-fixed-navbar')
  }, [scrolled])

  useEffect(() => {
    // prevent body scrolling when mobile menu is open
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const toggle = () => setOpen(v => !v)
  const close = () => setOpen(false)

  const handleScrollToSection = (sectionId) => {
    close()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-light navbar-custom ${scrolled ? 'navbar-scrolled fixed-top' : 'navbar-transparent'}`}>
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); handleScrollToSection('home') }}>OmahBanyuEscape</a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={(e) => { e.preventDefault(); handleScrollToSection('home') }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => { e.preventDefault(); handleScrollToSection('about') }}>Tentang Kami</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#produk" onClick={(e) => { e.preventDefault(); handleScrollToSection('produk') }}>Manfaat</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kelas" onClick={(e) => { e.preventDefault(); handleScrollToSection('kelas') }}>Kelas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#fasilitas" onClick={(e) => { e.preventDefault(); handleScrollToSection('facilities') }}>Fasilitas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kelas" onClick={(e) => { e.preventDefault(); handleScrollToSection('footer') }}>Hubungi Kami</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar