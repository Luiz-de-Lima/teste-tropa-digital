import React from "react";
import paisagemImg from "../../assets/paisagem.png";
import './style.scss'
export const Cards = () => {
  return (
    <section className="cards-container">
      <div className="cards--user">
        <p>Olá <span>Usuário</span></p>
      </div>
      <div className="cards-content">
        <div className="cards--item">
          <div className="card--item__img">
            <img src={paisagemImg} alt="" />
          </div>

          <div className="card--description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </span>
          </div>

        </div>
        <div className="cards--item">
          <div className="card--item__img">
            <img src={paisagemImg} alt="" />
          </div>

          <div className="card--description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </span>
          </div>

        </div>
        <div className="cards--item">
          <div className="card--item__img">
            <img src={paisagemImg} alt="" />
          </div>

          <div className="card--description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </span>
          </div>

        </div>
        <div className="cards--item">
          <div className="card--item__img">
            <img src={paisagemImg} alt="" />
          </div>

          <div className="card--description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </span>
          </div>

        </div>
        <div className="cards--item">
          <div className="card--item__img">
            <img src={paisagemImg} alt="" />
          </div>

          <div className="card--description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </span>
          </div>

        </div>
        <div className="cards--item">
          <div className="card--item__img">
            <img src={paisagemImg} alt="" />
          </div>

          <div className="card--description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </p>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </span>
          </div>

        </div>


      </div>

    </section>
  );
};
