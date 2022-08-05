import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api.js'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from 'react-toastify';

import { Main } from "./style";
import Logo from '../../assets/images/Logo.png';

function LoginForm({setUser}) {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email(),
    password: yup.string().required('Campo obrigatório')
  });
  
  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(data) {
    api.post('/sessions', data)
      .then((res) => {
        console.log(res)
        if (res.statusText === 'OK') {
          localStorage.clear();
          localStorage.setItem('@kenziehub:token', res.data.token);
          localStorage.setItem('@kenziehub:user-id', res.data.user.id);
          setUser({...res.data.user})
          navigate('/dashboard');
        }
      })
      .catch((err) => toast.error('Email e/ou senha incorretos'));
  };

  function redirectToRegister() {
    navigate('/register');
  };

  return (
    <Main>
        <figure>
          <img src={Logo} alt="Kenzie Hub logo" />
        </figure>
      <div className="container">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <label htmlFor="">Email</label>
              <input 
                type="text" 
                placeholder="Digite seu email" 
                {...register('email')}
              />
              <p className='error-message'>{errors.email?.message}</p>
            </div>

            <div className="input-container">
              <label htmlFor="">Senha</label>
              <input 
                type="password" 
                placeholder="Digite sua senha"
                {...register('password')}
              />
              <p className='error-message'>{errors.password?.message}</p>
            </div>

            <button type='submit'>Entrar</button>
          </form>
        </div>

        <div className="button-container">
          <span>Ainda nao possui uma conta?</span>
          <button onClick={redirectToRegister}>Cadastre-se</button>  
        </div>
      </div>
    </Main>
  )
}

export default LoginForm;