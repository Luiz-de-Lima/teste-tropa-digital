import React from "react";
import logoImg2 from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import frameImg from "../../assets/Frame.png";
import reportImg from "../../assets/relatorio.png";
import "./style.scss";
import { Cards } from "../../components/Cards";
export const PageHome = () => {
  return (
    <>
      <section className="container-home">
        <nav className="nav">
          <img
            src={logoImg2}
            alt="logo da tropa digital"
            className="logoimg2"
          />

          <ul className="nav-list">
            <li>
              <img src={frameImg} alt="" />
              inicio
            </li>
            <li>
              <img src={contactImg} alt="contatos" />
              Contatos
            </li>
            <li>
              <img src={reportImg} alt="" />
              Relatorios
            </li>
            <li>
              <img src={contactImg} alt="" />
              Contatos
            </li>
            <li>
              <img src={contactImg} alt="" />
              Contatos
            </li>
            <li>
              <img src={contactImg} alt="" />
              Contatos
            </li>
          </ul>
        </nav>
        <Cards />
      </section>
    </>
  );
};
