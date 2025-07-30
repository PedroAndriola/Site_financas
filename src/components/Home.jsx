import React from 'react';

function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="align-self-center">
              <h1 className="display-4">Suas contas descomplicadas</h1>
              <p>
                Usado por mais de 1 milhão de pessoas, o Finans é uma ferramenta online que vai facilitar sua vida financeira.
              </p>
              <form className="mt-4 mb-4">
                <div className="input-group input-group-lg">
                  <input type="text" placeholder="Seu e-mail" className="form-control" />
                  <div className="input-group-append">
                    <button type="button" className="btn btn-primary">Cadastre-se</button>
                  </div>
                </div>
              </form>
              <p>Disponível para
                <a href="#" className="btn btn-outline-light">
                  <i className="fab fa-android fa-lg"></i>
                </a>
                <a href="#" className="btn btn-outline-light">
                  <i className="fab fa-apple"></i>
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img src="/img/capa-mulher.png" alt="Capa" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
