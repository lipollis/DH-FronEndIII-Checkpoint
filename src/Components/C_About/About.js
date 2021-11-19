// eslint-disable-next-line

import './About_Style.scss';
import euAline from "../Imagens/Me.JPG";



const Banner = () => {

  return (
    <div id="about" className="container py-5">

        <div className="row">
          <div className="image-container col-lg-6 col-xm-12">

            <div className="photo-wrap mb-5">
              <img className="profile-img" src={euAline} alt="Minha foto." />
            </div>

          </div>
          <div className="col-lg-6 col-xm-12 aboutme">
            <h1 className="heading">About Me</h1>
            <p className="textBody">
              
              Paulistana, filha de gaúcho com paulista, sou apaixonada
              por praticar corrida e por música. Possuo graduação em
              Engenharia de Automação e Controle, pela UFABC, e atualmente
              estou dedicada no desenvolvimento de novas habilidades na área
              de TI, como Dev Fullstack.
              
            </p>
          </div>
        </div>

    </div>
  );

}

export default Banner;