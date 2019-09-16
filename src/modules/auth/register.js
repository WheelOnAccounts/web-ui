import React from 'react';
import $ from 'jquery';
import * as M from 'materialize-css/dist/js/materialize';
import styled from 'styled-components';

const DFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginCard = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 75%;
  justify-content: space-around;
  align-items: center;
  .action-btns {
    display: flex;
    justify-content: space-between;
  }

  .grid-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }

  .header {
    background-color: rgba(243, 223, 73, 1);
    padding: 1rem;
  }
`;

const Register = props => {
  const { history } = props;
  React.useEffect(() => {
    M.textareaAutoResize($('#textarea1'));
    var elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {});
  });
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
          <DFlexColumn>
            <div className="grid-form">
              <div class="input-field">
                <label for="companyName">Company Name</label>
                <input id="companyName" type="text" class="validate" />
              </div>
              <div class="input-field">
                <label for="address">Address</label>
                <textarea id="address" class="materialize-textarea"></textarea>
              </div>
            </div>
            <p class="flow-text">Add Primary Contact</p>
            <div className="grid-form">
              <div class="input-field">
                <label for="firstName">First Name</label>
                <input id="firstName" type="text" class="validate" />
              </div>
              <div class="input-field">
                <label for="lastName">Last Name</label>
                <input id="lastName" type="text" class="validate" />
              </div>
              <div class="input-field">
                <label for="mobile">Mobile</label>
                <input id="mobile" type="text" class="validate" />
              </div>
              <div class="input-field">
                <label for="dob">Date Of Birth</label>
                <input id="dob" type="text" class="datepicker" />
              </div>
              <div class="input-field">
                <label for="email">Email</label>
                <input id="email" type="email" class="validate" />
              </div>
              <div class="input-field">
                <label for="displayName">Display Name</label>
                <input id="displayName" type="text" class="validate" />
              </div>
              <div class="input-field">
                <label for="pwd">Password</label>
                <input id="pwd" type="password" class="validate" />
              </div>
              <div class="input-field">
                <label for="cpwd">Confirm Password</label>
                <input id="cpwd" type="password" class="validate" />
              </div>
              <DFlexColumn>
                <label>
                  <input type="checkbox" />
                  <span>
                    <a href="/">Terms & Conditions</a>
                  </span>
                </label>
              </DFlexColumn>
            </div>
          </DFlexColumn>
        </div>
        <div class="card-action action-btns">
          <button
            class="btn waves-effect waves-light grey"
            type="button"
            onClick={() => history.push('/')}
            name="action"
          >
            Cancel
          </button>
          <button class="btn waves-effect waves-light" type="submit" name="action">
            Register
          </button>
        </div>
      </div>
    </LoginCard>
  );
};

export default Register;
