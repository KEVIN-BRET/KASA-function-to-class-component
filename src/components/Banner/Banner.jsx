import React, { Component } from "react";
import "./Banner.scss";

// export default function Banner({ title, backgroundSrc }) {
//   return (
//     <div className="banner">
//       <p className="banner__title">{title}</p>
//       <div className="banner__background"></div>
//       <img src={backgroundSrc} alt="banner" className="banner__picture" />
//     </div>
//   );
// }

//* ON EXTENDS  SEULEMENT Component CAR ON A IMPORTé { Component } from "react"

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, backgroundSrc } = this.props;

    //* PAS BESOIN DE this.props. CAR ON A NOMME CHAQUE PROPS EN LES DESTRUCTURANT

    return (
      <div className="banner">
        <p className="banner__title">{title}</p>
        <div className="banner__background"></div>
        <img src={backgroundSrc} alt="banner" className="banner__picture" />
      </div>
    );
  }
}

export default Banner;
