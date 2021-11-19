// eslint-disable-next-line

import './Tempo_Style.scss';

const LinhaTempo = () => {
    return (
      <div id="experience" className="experience">
        <div className="d-flex justify-content-center my-5">
          <h1> Linha do Tempo </h1>
        </div>
        <div className="container experience-wrapper">

        <div className="timeline-block time-line-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="titleLineR">2004-2006</h3> 
              <p className="p-right">
                
                Técnico em Desenho de Projetos.
                <br />
                SENAI-SP "Almirante Tamandaré".
              </p>
            </div>
          </div>
  
          <div className="timeline-block time-line-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="titleLineL">2006-2010</h3>
              <p className="p-left">
               
                Graduação em Engenharia Elétrica.
                <br />
                Universidade Federal do Paraná.
              </p>
            </div>
          </div>


          <div className="timeline-block time-line-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="titleLineR">2011-2016</h3>
              <p className="p-right">
                
                Graduação em Engenharia de Automação e Controle.
                <br />
                Universidade Federal do ABC.
              </p>
            </div>
          </div>
  
          <div className="timeline-block time-line-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="titleLineL">2017</h3>
              <p className="p-left">
               
                Aluna especial na disciplina "Manufatura Avançada", Mestrado em Engenharia Mecânica.
                <br />
                Universidade Federal do ABC.
              </p>
            </div>
          </div>
  
          <div className="timeline-block time-line-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="titleLineR">2020-2022</h3>
              <p className="p-right">
               
                Técnico em Desenvolvimento FullStack.
                <br />
                SENAI-SP "Almirante Tamandaré".
              </p>
            </div>
          </div>
  
          <div className="timeline-block time-line-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="titleLineL">2021</h3>
              <p className="p-left">
                
                Aluna especial nas disciplinas:
                "IA para Engenharia - Aprendizado de Máquinas I", Mestrado em Engenharia da Informação.
                "Interação Humano Computador", Mestrado em Ciências da Computação.
                <br />
                Universidade Federal do ABC.
              </p>
            </div>
          </div>
  
          <div className="timeline-block time-line-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3 className="titleLineR">2021-2022</h3>
              <p className="p-right">
              
                Certified Tech Developer.
                <br />
                Digital House.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LinhaTempo;