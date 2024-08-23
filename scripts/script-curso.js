  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: #222;
    padding-bottom: 50px;
    padding: 0;
    margin: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    transition: all 0.3s ease-in-out;
  }

  .nav {
    position: fixed; /*se colocar relative a imagem fica do tamanho certo*/
    background-color: #ffffff;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
  }

  .nav ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: center;
  }

  .nav a {
    color: #000000;
    text-decoration: none;
    padding: 7px 15px;
    transition: all 0.3s ease-in-out;
  }

  .nav.active {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .nav.active a {
    color: #000;
  }

  .nav.active .container {
    padding: 10px 0;
  }

  .nav a.current,
  .nav a:hover {
    color: #f71f1f;
    font-weight: bold;
  }

  .hero {
    background-image: url('./public/logotipo.jpeg');
    background-repeat: no-repeat;
    background-size: contain; /* Garante que a imagem inteira seja visível */
    background-position: center; /* Centraliza a imagem verticalmente e horizontalmente */
    height: 100vh; /* Ajuste a altura conforme necessário */
    min-height: 600px; /* Define a altura mínima da hero section */
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    margin-bottom: 20px;
    z-index: -2;
  }
  
  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  .hero h1 {
    font-size: 46px;
    margin: -20px 0 20px;
  }

  .hero p {
    font-size: 20px;
    letter-spacing: 1px;
  }

  .content h2,
  .content h3 {
    font-size: 150%;
    margin: 20px 0;
  }

  .content p {
    color: #555;
    line-height: 30px;
    letter-spacing: 1.2px;
    margin: -20px 0 20px;
  }

  main {
    height: 10vh;
  }

  footer {
    width: 100%;
    color: #fff;
    background-color: #555;
  }

  #footer_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    text-align: center;
  }

  #footer_contacts {
    margin-bottom: 1.5rem;
  }

  #footer_contacts h1 {
    margin-bottom: 0.75rem;
  }

  #footer_social_media {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .footer-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-list li {
    margin-bottom: 0.75rem;
  }

  .footer-link {
    color: #fff;
    text-decoration: none;
  }

  .footer-link:hover {
    color: #c93737;
  }

  #footer_copyright {
    background-color: #444;
    padding: 1rem;
    font-size: 0.85rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    #footer_content {
      flex-direction: column;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    .hero {
      height: 50vh;
    }

    .hero h1 {
      font-size: 28px;
    }

    .hero p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    .hero {
      height: 40vh;
    }

    .hero h1 {
      font-size: 24px;
    }

    .hero p {
      font-size: 14px;
    }
  }

  .logo-img {
    height: 40px; /* Ajuste o tamanho da imagem conforme necessário */
    margin-right: 0px; /* Espaçamento entre a imagem e o texto */
    vertical-align: middle;
  }