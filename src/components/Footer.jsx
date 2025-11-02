import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
    
  return (
    <footer className='site-footer'>
        <div class="footer-content">

        <div class="footer-column brand-column">
            <div class="brand-info">
                <span class="logo-icon">FS</span>
                <span class="logo-text">FitSync</span>
            </div>
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Autores Invitados</a></li>
            </ul>
        </div>

        <div class="footer-column digital-column">
            <div class="column-title">Digital</div>
            <ul>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto: +58 41400000</a></li>
            </ul>
        </div>

        <div class="footer-column info-column">
            <div class="column-title">INFORMACIÓN</div>
            <ul>
                <li><a href="#">Plan de Social Media</a></li>
                <li><a href="#">Plan de Marketing Digital</a></li>
                <li><a href="#">Marketing de Contenidos</a></li>
            </ul>
        </div>

        <div class="footer-column community-column">
            <div class="column-title">MI COMUNIDAD</div>
            <div class="social-icons">
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a>
                <a href="#" aria-label="RSS"><i class="fas fa-rss"></i></a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <p class="copyright">Copyright © 2025 - <a href="#">FitSync</a> | <a href="#">Aviso Legal y Política de Privacidad</a></p>
        <p class="web-dev">Desarrollo Web FitSync Team</p>
    </div>
    </footer>
  )
}   