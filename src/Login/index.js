import React from 'react';
import './index.css';
import axios from '../../node_modules/axios';

import icon_maquina from '../public/icons/icon_maquina.png';
import icon_user from '../public/icons/icon_user.png';
import icon_password from '../public/icons/icon_password.png';

class Index extends React.Component{
    state = {
        Message: "",
        login: "",
        senha: ""
    }

    submitLogin = async (e) =>{
        e.preventDefault();

        const url = 'http://localhost:3000/login';
        await axios.post(url, {
                email: this.state.login,
                senha: this.state.senha
        }).then(function(response){
            var nivel = 0;
            switch(response.data.nivel){
                case 1: {nivel = "Atendente"; break;}
                case 2: {nivel = "Administrador"; break;}
                case 3: {nivel = "Mestre"; break;}
            };
            sessionStorage.setItem("Nome", response.data.nome);
            sessionStorage.setItem("E-mail", response.data.email);
            sessionStorage.setItem("Nivel", nivel);
        });
                
        this.props.history.push('/Menu');
    }
    
    inputChange = () => {
        this.setState({ login: document.querySelector("#input-login").value,
                        senha: document.querySelector("#input-senha").value});
    }
    render(){
        sessionStorage.clear();
        return(
            <div id="login">
                <div id="container">
                    <div id="logo-login">
                        <img src={icon_maquina} alt=""/>
                    </div>

                    <div id="form-login">
                        <form onSubmit={this.submitLogin} >       
                            {/* */}
                            <div>
                                <img src={icon_user} alt=" "/>
                                <input 
                                    id="input-login"
                                    type="text" 
                                    placeholder="Usuário"
                                    onChange={this.inputChange}/>
                            </div>

                            <div>
                                <img src={icon_password} alt=" "/>
                                <input 
                                    id="input-senha"
                                    type="password" 
                                    placeholder="Senha"
                                    onChange={this.inputChange} />
                            </div>
                            
                            <button type="submit" id="btn-login">ENTRAR</button>
                        </form>                
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;