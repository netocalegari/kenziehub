import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png'
import { Header, Main } from './style';

function Dashboard({user, setUser}) {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <>
      <Header>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <button onClick={logout}>Sair</button>
      </Header>

      <Main>
        <section className='profile'>
          <span>Olá, {user.name}</span>
          <p>Módulo {user.course_module}</p>
        </section>

        <section className='content'>
          <span>Que pena! Estamos em desenvolvimento :(</span>
          <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>        
        </section>
      </Main>
    </>


  );
};

export default Dashboard;