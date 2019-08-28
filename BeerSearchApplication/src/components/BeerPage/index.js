// @flow

import './styles.css';
import React, {
  Component
}                     from 'react';
import { connect }    from 'react-redux';
import { Link }       from 'react-router';

const PUBLIC_URL:string = process.env.PUBLIC_URL || '';
var data=[];



const handleClick = (id, name, tagline, first_brewed, image_url) => {

     data.push({
         id:id,
         name:name,
         tagline:tagline,
         first_brewed:first_brewed,
         URL:image_url
     });
      console.log(data);
};





export const Beer = ({ id, name, tagline, first_brewed, image_url }:beer) =>
  <div className="beerList_item">
       <div className="container">
        <Link className="beer" to={`/beers/${id}`}>
          <div className="beer_img" style={{backgroundImage:`url(${image_url}), url(${PUBLIC_URL}/beer.jpg)`}}/>
          <span className="beer_name">{name}</span>
          <span className="beer_firstBrew">
            <span>{first_brewed}</span>
          </span>
          <em className="beer_tagline">{tagline}</em>
          <p className="beer_button">Details</p>
          </Link>
          <button className="beer_favourite" onClick={()=>{handleClick(id, name, tagline, first_brewed, image_url)}}>Add To Favourite</button>
         </div>
     </div>;


export const BeerList = ({ beers }:{ beers:beer[] }) =>
  <ul className="beerList">
    { Array.isArray(beers) && beers.map(beer => <Beer key={beer.id} {...beer}/>) }
  </ul>;




export class BeerPage extends Component {


  props:{
    beers:beer[];
    params:Object;
    children:React$Element<any>
  };

  static displayName = 'BeerPage';

  componentDidMount() {
  }

  render() {
    const { beers,params, children } = this.props;

    if ( params.id ) {
      return <section className="beerPage" style={{padding:'40px 10px'}}>{ children }</section>;
    }
    else {
      let body = <BeerList beers={beers}/>;

      return <section className="beerPage" style={{padding:'40px 10px'}}>
               { body }
             </section>;
    }
  }
}

const MapStateToProps = state => ({
  beers   : state.beers.data,
  page    : state.beers.page,
});

export default connect(
  MapStateToProps
)(BeerPage);