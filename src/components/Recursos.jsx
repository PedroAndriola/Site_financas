import React from 'react';

function Recursos() {
  return (
    <section className="caixa">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="/img/facil.png" className="img-fluid" alt="Fácil" />
            <h4>Fácil de usar</h4>
            <p>
              O Finans vai além do básico e permite que você faça controles incríveis, essenciais para suas finanças. Simples como tem que ser!
            </p>
          </div>
          <div className="col-md-4">
            <img src="/img/economize.png" className="img-fluid" alt="Economize" />
            <h4>Economize seu tempo</h4>
            <p>
              Tempo é dinheiro! Em segundos, você tem tudo sob controle e aproveite seu tempo com o que realmente importa pra você!
            </p>
          </div>
          <div className="col-md-4">
            <img src="/img/suporte.png" className="img-fluid" alt="Suporte" />
            <h4>Suporte amigo</h4>
            <p>
              Dúvidas? Perguntas? Nosso suporte super legal ajuda você! A gente tá aqui pra resolver seus problemas e deixar sua vida bem mais fácil!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recursos;
