import { useState } from 'react';

import Card from '../components/card';
import FormGroup from '../components/form-group';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    
    /*------------------- EXEMPLO DE MODELO CONEXÃO ------------------- */

    /* const [mensagemErro, setMensagemErro] = useState("");

    const navigate = useNavegate();  // tem que importar o navigate  { useNavigate }

    const logar = async (e) => {
        try {
            e.preventDefault();  // pra atulizar automaticamente
            await axios  // tem que importat o axios também 
            .post("http://localhost:0800/api/usuario/autenticar", {
                email: email,
                senha: senha,
            })
            .then((response) => {
                localStorage.setItem('_usuario_logado', JSON.stringify(response.data))  // aqui é por questão de segurança obrigando o usuário está logado e não precisa ser colocado
                navegate("/"); // o navegate te lança pra outra página quando vc está fazendo login
            });
        } catch (erro) {
            setMensagemErro(erro.response.data);
        }
    }; */
        
    const logar = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}`)
        console.log(`Senha: ${senha}`)
    }

    return (
        <div className="row">
            <div className="col-md-6" style={{ position: 'relative', left: '400px' }}>
                <div className="bs-docs-section">
                    <Card title="Login">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <form>
                                        <fieldset>
                                            <FormGroup htmlFor="InputEmail1" label="Email: *">
                                                <input
                                                    value={email} 
                                                    type="email" 
                                                    className="form-control"
                                                    name='email'
                                                    id='InputEmail1'
                                                    aria-describedby='emailHelp'
                                                    placeholder='Digite seu email'
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </FormGroup>
                                            <FormGroup htmlFor="InputSenha1" label="Senha: *">
                                                <input
                                                    value={senha} 
                                                    type="senha" 
                                                    className="form-control"
                                                    nome='senha'
                                                    id='InputSenha1'
                                                    aria-describedby='emailHelp'
                                                    placeholder='Digite sua senha'
                                                    onChange={e => setSenha(e.target.value)}
                                                />
                                            </FormGroup>
                                            <button className='btn btn-success' onClick={logar}> Entrar </button>
                                            <button 
                                            className='btn btn-danger'
                                            // onClick={() => navigate("/cadastro-usuario")}
                                            > 
                                            Cadastrar 
                                            </button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default Login;

// Dica: se colcoar . + o nome da classe + enter ele já cria pra gente
// EX: .row + enter, vai sair <div className="row"></div>
// Componente funcional não precisa importar o REACT
// Só se usa componentes quando se quer reutilizar pra várias coisas

// fieldset é pra organizar

// Atalho: se segurar o alt + clique no final onde que mudar o nome por exemplo senha. Ele vai mudar todos