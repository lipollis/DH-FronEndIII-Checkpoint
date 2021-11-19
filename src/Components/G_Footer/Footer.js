// eslint-disable-next-line


import './Footer_Style.scss';


import Facebook from "../Imagens/Rede_social/socialFacebook.svg";
import Instagram from "../Imagens/Rede_social/socialInstagram.svg";
import LinkedIn from "../Imagens/Rede_social/socialLinkedin.svg";
import GitHub from "../Imagens/Rede_social/socialGithub.svg";
import Email from "../Imagens/Rede_social/socialMail.svg";
import WhatsApp from "../Imagens/Rede_social/socialWhatsapp.svg";
import assinatura from "../Imagens/sun.jpg"




const Footer = ({owner}) => {
	const generateDateString = () => {
		const creationYear = '2021';
		const currentYear = `${new Date().getFullYear()}`;
		return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
	}

	return (
		<footer id="footer">


			<div className="footer">
				<div className="container">
					<div className="row">

						<div className="col">
							<div className="col-lg-5 col-md-6 col-sm-6">
								<div className="d-flex">
									<p>11 99286-3910</p>
								</div>
								<div className="d-flex">
									<p>aline.pollis@hotmail.com</p>
								</div>
								<div className="d-flex">
									<p> 
									<img className="assinatura" src={assinatura} alt="assinatura"></img></p>
								</div>
							</div>
						</div>



						<div className="col-lg-3 col-md-2 col-sm-6">
							<div className="row">
								<div className="col col-nav-footer">
									<a href="#navbar" className="footer-nav">Home</a>
									<br />
									<a href="#about" className="footer-nav">About Me</a>
									<br />
									<a href="#experience" className="footer-nav">Qualificação</a>
									<br />
									<a href="#portfolio-project" className="footer-nav">Portfolio</a>
									<br />
									<a href="#contacts" className="footer-nav">Contato</a>
									<br />
								</div>
							</div>
						</div>


						<div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
							<div className="d-flex justify-content-center">
								<a href="https://www.facebook.com/aline.pollis/" target="_blank" rel="noopener noreferrer" className="socialImage">
								<img className="redeSocial" src={Facebook} alt="Facebook"></img></a>

								<a href="https://www.instagram.com/alinepollis/" target="_blank" rel="noopener noreferrer" className="socialImage">
								<img className="redeSocial" src={Instagram} alt="Instagram"></img></a>

								<a href="https://www.linkedin.com/in/aline-pollis-beck/" target="_blank" rel="noopener noreferrer" className="socialImage">
								<img className="redeSocial" src={LinkedIn} alt="LinkedIn"></img></a>

								<a href="https://github.com/lipollis" target="_blank" rel="noopener noreferrer" className="socialImage">
								<img className="redeSocial" src={GitHub} alt="GitHub"></img></a>

								<a href="https://outlook.live.com/" target="_blank" rel="noopener noreferrer" className="socialImage">
								<img className="redeSocial" src={Email} alt="Email"></img></a>

								<a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="socialImage">
								<img className="redeSocial" src={WhatsApp} alt="WhatsApp"></img></a>
							</div>

							<h3>{owner} &copy; Copyright {generateDateString()}</h3>
							<p>Todos os direitos reservados.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;

