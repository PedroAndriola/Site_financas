import React from 'react';

function Juros() {
  return (
    <section className="caixa">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="/img/juros.png" className="img-fluid" alt="Juros" />
          </div>
          <div className="col-md-6 d-flex">
            <div className="align-self-center">
              <h2>Pare de pagar juros e economize</h2>
              <p>
                Manter as contas em dia é sempre um problema? O Finans avisa você: receba alertas de contas a pagar e a receber!
              </p>
              <a href="#" className="btn btn-primary">Veja mais</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Juros;
