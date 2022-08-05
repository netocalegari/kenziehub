import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  margin-top: 10rem;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 95vw;
    height: 50vh;
  
    background-color: #212529;

    border-radius: 3px;

    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-weight: bold;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .input-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .error-message {
            font-size: 0.75rem;
          }
        }

        label {
          font-size: 0.611rem;
        }

        input {
          height: 2.406rem;
          width: 80vw;

          background-color: #343B41;
        }

        input::placeholder {
          color: #F8F9FA;
          padding-left: 0.8rem;
        }

        button {
          height: 2.406rem;

          background-color: #FF577F;
          color: #FFFFFF;
          font-weight: 500;

        }

        input, button {
          border-radius: 3px;
          border: none;
        }
      }
    } 

    .button-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      span {
        font-size: 0.8rem;
        color: #868E96;
      }

      button {
        width: 80vw;
        height: 2.406rem;

        border: none;
        border-radius: 3px;

        background-color: #868E96;
        color: #FFFFFF;
        font-weight: 500;
      }
    }    
  }

  @media(min-width: 1024px) {
    .container {
      width: 23.063rem;

      form {
        input {
          width: 20rem !important;
        }

        button {
          width: 20.3rem !important;
        }
      }

      .button-container {
        align-items: center;

        button {
          width: 20rem;          
        }
      }
    }
  }
`;

export { Main };