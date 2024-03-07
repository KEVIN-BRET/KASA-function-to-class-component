import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

// export default function Card({ id, title, cover }) {

// 	return (
// 		<Link to={`/logement/${id}`} className='card'>
// 			<h3 className='card__title'>{title}</h3>
// 			<img className='card__picture' src={cover} alt={title} />
// 		</Link>
// 	);
// };

//* ON EXTENDS React.Component CAR ON A SEULEMENT IMPORTé REACT

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { id, title, cover } = this.props;

    //* ON ECRIT this.props. DEVANT CHAQUE PROPS POUR Y ACCEDER

    return (
      <Link to={`/logement/${this.props.id}`} className="card">
        <h3 className="card__title">{this.props.title}</h3>
        <img className="card__picture" src={this.props.cover} alt={this.props.title} />
      </Link>
    );
  }
}

//* VOIR UN AUTRE EXEMPLE DANS LE COMPOSANT BANNER ====>

export default Card;
