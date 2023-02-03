import React from 'react'
import { Button } from '../../components/Buttons/Button'
import { Inputs } from '../../components/Inputs/Inputs'
import logoImg1 from '../../assets/logo.png'
import computerImg from '../../assets/computer.png'
import './styles.scss'
import { Link } from 'react-router-dom'
export const PageLogin = () => {
  return (
    <div className="container__full">
      <section className='container-login'>
        <form action="" className='container-login__form'>
          <img src={logoImg1} alt="logo tropa digital" className='container-login__form-img' />
          <h2>Bem Vindo ao <span>painel</span></h2>

          <Inputs type={'email'} placeholder='Digite seu e-mail' />
          <Inputs type={'password'} placeholder='Digite sua senha' />
          <div className="container-login__form--button">
            <Button >
              <Link to='/home'>Acessar</Link>
            </Button>
          </div>
        </form>
        <div className="container-login__painel">
          <div className="container__login--painel__img">
            <img src={computerImg} alt="computador" />
          </div>
        </div>
      </section>
    </div>

  )
}
