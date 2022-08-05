import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 40vw;

  border-bottom: 1px solid #212529;

  margin-top: 1.5rem;
  padding-bottom: 1.5rem;

  button {
    border: none;
    border-radius: 4px;

    background-color: #212529;
    color: #F8F9FA;

    width: 3.468rem;
    height: 2rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;

  .profile, .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    margin-left: 0.5rem;
    margin-top: 2rem;
    padding-bottom: 2rem;

    border-bottom: 1px solid #212529;

    span {
      font-size: 1.125rem;
    }

    p {
      font-size: 0.75rem;
      color: #868E96;
    }
  }

  .content {
    margin-top: 2rem;
    padding-bottom: 0;

    border-bottom: none;
  }

  @media(min-width: 1024px) {
    .profile {
      flex-direction: row;
      justify-content: space-around;
      gap: 20rem;

      margin-left: 0;
    }

    .content {
      flex-direction: column;

      margin-left: 7rem;

      p {
        font-size: 1rem;
      }
    }
  }

  @media(min-width: 1440px) {
    .profile {
      gap: 30rem;
    }

    .content {
      margin-left: 11rem;
    }
  }
`;

export { Header, Main };