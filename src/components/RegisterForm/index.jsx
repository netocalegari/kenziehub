import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api.js'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from 'react-toastify';

import Logo from '../../assets/images/Logo.png';
import { Main } from './styles';


function RegisterForm() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email('Email inválido'),
    password: yup.string()
      .required('Campo obrigatório')
      .min(8, 'Deve conter pelo menos 8 caracteres').max(16)
      .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})', 'Deve conter uma letra maiúscula, uma letra minúscula, um número e um caracter especial'),
    confirmPassword: yup.string().required('Campo obrigatório').oneOf([yup.ref('password'), null], 'Senhas devem ser idênticas'),
    bio: yup.string().required('Campo obrigatório'),
    contact: yup.string().required('Campo obrigatório'),
    course_module: yup.string().required('Campo obrigatório')
  });

  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(data) {
    api.post('/users', data)
      .then((res) => {
        if (res.statusText === 'Created') {
          navigate('/login');
          return toast.success('Usuário criado com sucesso');
        }
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`)});
  };

  return (
    <Main>
      <figure>
        <img src={Logo} alt="" />
      </figure>

      <div className='container'>
        <div className='form-container'>
          <h2>Crie sua conta</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-container'>
              <label htmlFor="">Nome</label>
              <input 
                type="text" 
                placeholder='Digite seu nome'
                {...register('name')}
              />
              <p className='error-message'>{errors.name?.message}</p>
            </div>

            <div className='input-container'>
              <label htmlFor="">Email</label>
              <input 
                type="text" 
                placeholder='Digite seu email'
                {...register('email')}
              />
              <p className='error-message'>{errors.email?.message}</p>
            </div>

            <div className='input-container'>
              <label htmlFor="">Senha</label>
              <input 
                type="password" 
                placeholder='Digite sua senha'
                {...register('password')}
              />
              <p className='error-message'>{errors.password?.message}</p>
            </div>

            <div className='input-container'>
              <label htmlFor="">Confirmar senha</label>
              <input 
                type="password" 
                placeholder='Confirme sua senha'
                {...register('confirmPassword')}
              />
              <p className='error-message'>{errors.confirmPassword?.message}</p>
            </div>

            <div className='input-container'>
              <label htmlFor="">Bio</label>
              <input 
                type="text" 
                placeholder='Fale sobre você'
                {...register('bio')}
              />
              <p className='error-message'>{errors.bio?.message}</p>
            </div>

            <div className='input-container'>
              <label htmlFor="">Contato</label>
              <input 
                type="text" 
                placeholder='Opção de contato'
                {...register('contact')}
              />
              <p className='error-message'>{errors.contact?.message}</p>
            </div>

            <div className='input-container'>
              <label htmlFor="">Nome</label>
              <select id="modulos" {...register('course_module')}>
                <option value="">--Escolha seu módulo--</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
              </select>
              <p className='error-message'>{errors.course_module?.message}</p>
            </div>

            <div className='button-container'>
              <button type='submit'>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </Main>
  )
}

export default RegisterForm;