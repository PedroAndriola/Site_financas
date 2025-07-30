import React from 'react';

function Saiba() {
  return (
    <section className="caixa">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="align-self-center">
              <h2>Saiba para onde vai o seu dinheiro</h2>
              <p>
                Com o Finans, você categoriza todos os seus lançamentos. Com gráficos simples, você sabe de onde vem e para onde vai o seu dinheiro.
              </p>
              <a href="#" className="btn btn-primary">Veja mais</a>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/img/saiba.png" className="img-fluid" alt="Saiba" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Saiba;
