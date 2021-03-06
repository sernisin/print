import React, {Component} from "react";
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import jQueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
import '../../../App.scss';
import '../DetailCards.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags, faAngleDoubleUp, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { catridgeData } from '../../../main/catridgeData';

import Footer from '../../../companents/footer/Footer';
import More from '../../../companents/more/More';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import NavBar from '../../../companents/navbar/Navbar';
import Banner from '../../../companents/banner/Banner';

jQueryBridget( 'isotope', Isotope, $ );
class Lazer extends Component {
  state = {
    showMore: false,
    img:0,
    price:0,
    title:0,
    brand:0,
    model:0
  }
  
  showCards(){
    return catridgeData.map(item=>{
      if(item.type == 'laser'){
      return <article className={`card ${item.type} ${item.originality}`} onClick={this.showMore}>
        <div className="card-img-container">
          <img
          src={item.img}
          className="card-img"
          alt="məhsul"
          />
          <button className="card-more" >Ətraflı</button>
        </div>
        <div className="card-footer">
          <h4 className="card-title">{item.title}</h4>
          <p className="card-brand">{item.brand} ({item.originality})</p>
          <p className="card-model">{item.model}</p>
          {/* <p className="card-price">{item.price} AZN
          <FontAwesomeIcon className="card-footer-icon" icon={faTags}/>
          </p>     */}
        </div>
      </article>
    }
  });
  }

  isotopeShow=(event)=>{
    $('.card').css('margin-right', "1.5rem");
    let $grid = $(".catridges-center").isotope({});
    let filterValue = $(event.target).attr('data-filter');
    $grid.isotope({ 
      filter: filterValue
    });
  }

  changeImg = (event) => {
    $('.more-big-img').attr('src', $(event.target).attr('src'));
  }

  showMore=(event)=>{
    this.setState({showMore:true});
    this.setState({img: $(event.currentTarget).children('.card-img-container').children('.card-img').attr('src')});
    this.setState({price: $(event.currentTarget).children('.card-footer').children('.card-price').text()});
    this.setState({title: $(event.currentTarget).children('.card-footer').children('.card-title').text()});
    this.setState({brand: $(event.currentTarget).children('.card-footer').children('.card-brand').text()});
    this.setState({model: $(event.currentTarget).children('.card-footer').children('.card-model').text()});
  }

  hideMore=()=>{
    this.setState({showMore:false});
  }

  render(){
    return (
      <div className="container" id='container'>
        <NavBar/>
        <Banner/>
        <section className="catridges">
          {this.state.showMore ? <Backdrop /> : null}
          {this.state.showMore ? <More 
          hideMore={this.hideMore} 
          img={this.state.img}
          price={this.state.price}
          title={this.state.title} 
          model={this.state.model} 
          brand={this.state.brand} /> : null}
          <NavLink to='/catridges' className='back-detail'>
            <FontAwesomeIcon className=".back-detail-icon" icon={faAngleDoubleLeft}/> geri
          </NavLink>
          <h2 className="subtitle">Lazer katriclər</h2>
          <div className="card-menu" >
            <button data-filter="*" className="card-menu-btn" onClick={this.isotopeShow} >Hamısı</button>
            <button data-filter=".laser.analoq" className="card-menu-btn" onClick={this.isotopeShow}>
            Laser (analoq)
            </button>
            <button data-filter=".laser.orijinal" className="card-menu-btn" onClick={this.isotopeShow}>
            Laser (orijinal)
            </button>
          </div>
          <div className="catridges-center">
            {this.showCards()}
          </div>
          <a href='#container' className="up" ><FontAwesomeIcon icon={faAngleDoubleUp} /></a>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default Lazer;
