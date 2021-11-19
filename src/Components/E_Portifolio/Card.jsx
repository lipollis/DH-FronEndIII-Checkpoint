import React from 'react';
import DataCard from './DataCard';


function CardBox() {

  return (
    <>

      <div id="portfolio" className="portfolio">
        <div className="background album py-5 bg-light">
          <div className="text-center">
            <h1 className="portfolio-h1"> Portfolio </h1>
          </div>

          <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">

              {DataCard.map(cards => (

                <div className="col box-portifolio" >
                  <div className="card shadow-sm" key={cards.id}>

                    <img src={cards.img} className="imagemPortifolio" alt="imagem de projeto" />
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="cards-title text-center">{cards.title}</h5>
                        <p className="cards.description">{cards.description}</p>
                        <div className="div-button"><a href={cards.link} target="_blank" rel="noopener noreferrer" >
                          <button className="button-project"> {cards.btn} </button></a></div>
                      </div>

                    </div>

                  </div>
                </div>
              ))}



            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CardBox;


