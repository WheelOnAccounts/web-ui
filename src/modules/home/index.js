import React from 'react';
import styled from 'styled-components';
import * as M from 'materialize-css/dist/js/materialize';

const HomeOverviewCard = styled.div`
  background-color: rgba(243, 223, 73, 1);
  height: 26rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  .aboutDetails {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    p {
      width: 50rem;
      margin-top: 2rem;
      font-size: 28px;
      text-align: center;
    }
  }
  .actionItems {
    display: grid;
    grid-template-columns: 10rem 10rem;
    grid-column-gap: 1rem;
    justify-content: space-evenly;
    margin-left: 1rem;
  }

  .dFlex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const FocusOnYourGoals = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  height: 250px;
  margin-top: 4rem;
  background-color: #fff;
  p {
    text-align: center;
    color: rgba(0, 0, 0, 0.54);
  }
  div {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
  }
`;

const HomeModule = props => {
  React.useEffect(() => {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {});
  }, []);
  return (
    <div className="container-fluid">
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">
            <i class="medium material-icons">directions_bus</i>
            Wheel On Accounts (Veera)
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <button
                style={{ marginRight: '6px' }}
                class="btn waves-effect waves-light red"
                type="submit"
                name="action"
                onClick={() => props.history.push('/auth/register')}
              >
                Sign-Up
              </button>
            </li>
            <li>
              <button
                style={{ marginRight: '6px' }}
                class="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={() => props.history.push('/auth/login')}
              >
                Sign-In
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <HomeOverviewCard>
          <div className="aboutDetails">
            <p>
              WheelOnAccounts is personal and transport business financial-accounting software,
              freely licensed and avaiable as opensource clound web application.
            </p>
          </div>
          <div className="dFlex">
            <button class="btn waves-effect waves-light" type="submit" name="action">
              Learn More
            </button>
            <button class="btn waves-effect waves-light red" type="submit" name="action">
              Free Demo
            </button>
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={() => props.history.push('/auth/login')}
            >
              Sign-In
            </button>
          </div>
        </HomeOverviewCard>
        <div class="parallax-container">
          <div class="parallax">
            <img src="assets/home/black_Plain_Parallax.jpg" alt="Features" />
          </div>
        </div>
        <FocusOnYourGoals>
          <p>
            “We cannot change what we are not aware of, and once we are aware, we cannot help but
            change.”
          </p>
        </FocusOnYourGoals>
        <div class="parallax-container">
          <div class="parallax">
            <img src="assets/home/repair.jpg" alt="Fuel" />
          </div>
        </div>
        <FocusOnYourGoals></FocusOnYourGoals>
      </section>
    </div>
  );
};

export default HomeModule;
