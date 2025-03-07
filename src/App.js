import React, { Component } from 'react';
import './App.css';
import imageProfil from './profil.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor(props) {
    super(props);
    /* état */
    this.state = {
      personne: {
        fullName: "Ben Amara olfa",
        bio: "Je suis une développeuse full-stack produit PC Soft passionnée par les nouvelles technologies.",
        imgSrc: imageProfil,
        profession: "Analyste programmeur"
      },
      montre: false, /* un booléen montre. */
      timeInput: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeInput: prevState.timeInput + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showProfil = () => {
    this.setState(prevState => ({
      montre: !prevState.montre
    }));
  };

  render() {
    const { personne, montre, timeInput } = this.state;
    return (
      <div className="card text-center">
        <div className="card-body">
        <Button as="a" variant="info" onClick={this.showProfil}>
          {montre?"Cacher le profil" : "Afficher le profil"}
        </Button>
        {montre && (
          <div className="text-center">
          <Image src={personne.imgSrc} alt={personne.fullName} roundedCircle className="card-img-top imgProfil" />
          <div className="card-body">
            <h2 className="card-title">{personne.fullName}</h2>
            <p className="card-text">{personne.bio}</p>
            <p className="card-text"><strong>Profession:</strong> {personne.profession}</p>
          </div>
        </div>
        )}
         <p className="mt-6">Temps écoulé : {timeInput} secondes</p>
        </div>
      </div>
      
    );
  }
}

export default App;