import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import './About.css';
import '../../App.scss';
import Footer from '../footer/Footer';
import NavBar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import $ from "jquery"; 

class About extends Component{

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  };
  handleScroll() {
    if (window.pageYOffset > 62) {
      $(".navbar").attr("class","navbar fixed");
    } else {
      $(".navbar").attr("class","navbar");
    }
  };

  render(){
    return (
      <div className='container'>
        <NavBar/>
        <Banner/>
      <section className="about" id="about">
        <h2 className="subtitle-about">Haqqımızda</h2>
        <div className="about-center">
          <article className="about-info">
          <p>
          Kainat Print şirkəti ölkədə ən geniş şəbəkəsi olan şirkətlərdən 
          biridir. Şirkət 2005-ci ildə təsis olunmuşdur. Şirkətimiz müxtəlif 
          növ katriclərin satışı, dolumu və s xidmətləri ilə fəaliyyətdədir. 
          Peşəkar komandamızın olması və peşəkar xidmətləri təqdim etməklə ölkədə böyük müəssisələrlə uzunmüddətli əməkdaşlıq müqavilələrinə sahibik.
          </p>
          <p>
          Kainat Print şirkəti hər zaman yeniliklərə üstünlük verib və bu 
          sahəsində innovativ yeniliklərə imza atır. Şirkətin texnoloji 
          bazası və personalı ən son standartlara uyğun formalaşmışdır.
          </p>
          </article>
          <div class="map">
          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.658587758962!2d49.853185381334725!3d40.37966247406968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0624c90eef%3A0xbae8a0f489410034!2s247%20Dilara%20Aliyeva%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1613552845605!5m2!1sen!2s">
          </iframe>
        </div>
        </div>
      </section>
      <Footer/>
      </div>
    );
  } 
}

export default About;
