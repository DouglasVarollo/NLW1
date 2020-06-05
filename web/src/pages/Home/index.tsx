import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import background from "../../assets/home-background.svg";
import logo from "../../assets/logo.svg";
import "./styles.css";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>

        <main>
          <section className="hero-detail">
            <h1>Seu marketplace de coleta de resíduos.</h1>

            <p>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </p>

            <Link to="/create-point">
              <span>
                <FiLogIn />
              </span>
              <strong>Cadastre um ponto de coleta</strong>
            </Link>
          </section>

          <div className="hero-illustration">
            <img src={background} alt="illustration" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
