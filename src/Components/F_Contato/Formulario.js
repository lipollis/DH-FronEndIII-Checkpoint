
import { Component } from "react";
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';

import './Contato_Style.scss';

export default class Formulario extends Component {

    constructor() {
        super( );

    this.handleSubmit = ({ nome, celular, email, mensagem }) => {
        const errors = {};

        if (!nome) {
            errors.nome = 'Insira um nome válido'
        }

        if (!celular || !/\(\d{2}\)\s\d{4,5}-\d{4}/.test(String(celular))) {
            errors.celular = 'O numero de celular deve estar no formato (00) 00000-0000';
        }

        if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Insira um email válido'
        }

        if (!mensagem) {
            errors.mensagem = 'Insira uma mensagem válida'
        }

        if (errors.nome || errors.celular || errors.email || errors.mensagem) {
            Swal.fire({
                title: 'Oops, itens a serem corrigidos',
                icon: 'error',
                html: `<ul>
                  ${errors.nome ? `<li>${errors.nome}</li>` : ''}
                  ${errors.celular ? `<li>${errors.celular}</li>` : ''}
                  ${errors.email ? `<li>${errors.email}</li>` : ''}
                  ${errors.mensagem ? `<li>${errors.mensagem}</li>` : ''}
                </ul>`
            });
        }
        else {
            Swal.fire({
                title: 'Tudo certo!',
                icon: 'success',
                text: 'Em breve entraremos em contato!'
            })
        }
    }
    }
    render() {
        return (
            <>
                <div id="contacts" className="contacts">
                    <div className="text-center">
                        <a href="#Contato" className="contato-h1"><h1> Contato </h1> </a>
                    </div>
                    <Formik validate={this.handleValidate} initialValues={{ nome: '', celular: '', email: '', mensagem: '' }} onSubmit={this.handleSubmit}>
                        <Form method="post">

                            <div className="container">
                                <div className="row">

                                    <div className="col-md-6 col-xs-12">

                                        <Field placeholder="Insira seu nome" type="text" name="nome" id="nome" className="form-control" />
                                        <div className="line"> </div>

                                        <Field placeholder="Insira seu celular" type="tel" name="celular" id="celular" className="form-control" />
                                        <div className="line"> </div>

                                        <Field placeholder="Insira seu email" type="email" name="email" id="email" className="form-control" />
                                        <div className="line"> </div>

                                        <Field placeholder="Qual o assunto?" type="text" name="assunto" id="assunto" className="form-control" />
                                        <div className="line"> </div>
                                    </div>

                                    <div className="col-md-6 col-xs-12">
                                        <Field placeholder="Insira sua mensagem" as="textarea" name="mensagem" id="mensagem" className="form-control" />
                                        <div className="line"> </div>
                                    </div>

                                    <button className="btn-main-offer contact-btn" type="submit" >Enviar</button>


                                </div>

                            </div>
                        </Form>
                    </Formik>
                </div>
            </>
        )
    }


}