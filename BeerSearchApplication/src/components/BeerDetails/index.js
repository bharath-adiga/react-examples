// @flow

import './styles.css';

import React, {
  Component
}                     from 'react';
import { connect }    from 'react-redux';
import { push }       from 'react-router-redux';
import {
  getBeer
}                     from '../../reducers/beerDetail.js';

const PUBLIC_URL:string = process.env.PUBLIC_URL || '';

export class BeerDetails extends Component {
 props:{
    loading:boolean;
    error:Error;
    beers:beer[];
    beer:beer;
    params:Object;
    getBeer:(id:number) => void;
    push:(url:string) => void
  };



  static displayName = 'BeerDetails';

  componentDidMount() {
    const { beers, params } = this.props,
          id = parseInt(params.id, 10);
      this.props.getBeer(id, beers);
  }


  render() {
    const { beer, push} = this.props;


      const { name, first_brewed, tagline, description, food_pairing, brewers_tips, ingredients, image_url } = beer,
            { hops } = ingredients;

     const body = <div className="beerDetails_data">
            <div className="img" style={{backgroundImage:`url(${image_url}), url(${PUBLIC_URL}/beer.jpg)`}}></div>
            <h2 className="name">
              <span>{name} - </span>
              <span> {first_brewed} </span>
            </h2>
            <em className="tagline">{tagline}</em>
            <p className="description">{description}</p>
            <div className="beerContainer">
                <div className="pairing">
                          <p className="food_pairing" >Brewing Tips</p>
                          <span className="brewer_tip">{brewers_tips}</span>
                </div>
                <div className="pairing">
                     <p className="BeerDetails.food_pairing" >Food Pairing</p>
                  <ul>
                    {Array.isArray(food_pairing) && food_pairing.map(( pair, id ) => <li key={id}>{pair}</li>)}
                  </ul>
                </div>
                <div className="hops">
                    <p className="BeerDetails.hops" >Hops</p>
                  <ul>
                    {Array.isArray(hops) && hops.map(( hop, id ) => <li key={id}>{hop.name} ({hop.amount.value}{hop.amount.unit})</li>)}
                  </ul>
                </div>
            </div>
            <button className="back" onClick={() => push('/beers')}>back to beers</button>
          </div>;
    return <section className="beerDetails">{body}</section>;
  }
}


const MapStateToProps = ( state:Object ) => ({
  beers   : state.beers.data,
  beer    : state.currentBeer.data
});

export default connect(MapStateToProps,{ push, getBeer })(BeerDetails);