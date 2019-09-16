import React from 'react';
import styled from 'styled-components';

const LoginCard = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 50%;
  justify-content: space-around;
  align-items: center;
  .action-btns {
    display: flex;
    justify-content: space-between;
  }

  .grid-form {
    display: grid;
    grid-template-columns: 1fr;
  }

  .header {
    background-color: rgba(243, 223, 73, 1);
    padding: 1rem;
  }
`;

const LoginModule = props => {
  const { history } = props;
  return (
    <LoginCard>
      <div className="card">
        <div class="card-header">
          <div className="header">
            <a href="/" class="card-title">
              Wheel On Accounts
            </a>
          </div>
        </div>
        <div class="card-content">
          <div className="grid-form">
            <div class="input-field col s12">
              <div>
                <label for="email">Email</label>
                <input id="email" type="email" class="validate" />
              </div>
              <div>
                <label for="pwd">Password</label>
                <input id="pwd" type="password" class="validate" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-action action-btns">
          <button
            class="btn waves-effect waves-light red"
            type="button"
            onClick={() => history.push('register')}
            name="action"
          >
            Register
          </button>
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Sign-In
          </button>
        </div>
      </div>
    </LoginCard>
  );
};

export default LoginModule;
