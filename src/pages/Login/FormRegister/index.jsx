const Logo = ({handleClick}) => {
  const logo = import.meta.env.VITE_IMG_LOGO;

  const propsAnchor = {
    href: "#",
    className: "toggle",
    onClick: handleClick,
  }

  return (
    <>
      <div className="logo">
        <img src={logo} width="100%" height="100%" alt="easyclassName" />
        <h4>SACGes</h4>
      </div>
      <div className="heading">
        <h2>Regístrate</h2>
        <h6>Si ya realizaste tu registro en nuestro sistema. </h6>
        <a {...propsAnchor}>Ingresa Aqui.</a>
      </div>
    </>
  );
};

const Formulario = () => {
  return (  
    <div className="actual-form">
      <div className="input-wrap">
        <input type="text" min="4" className="input-field" autoComplete="off" required />
        <label className="label-form">Usuario</label>
      </div>

      <div className="input-wrap">
        <input type="email" className="input-field" autoComplete="off" required />
        <label className="label-form">Email</label>
      </div>

      <div className="input-wrap">
        <input type="password" min="4" className="input-field" autoComplete="off" required />
        <label className="label-form">Contraseña</label>
      </div>

      <input type="submit" value="Registrarme" className="sign-btn" />

      <p className="text">
        Al registrarte, aceptas los
        <a href="#!">Terminos del Servicio</a> y <a href="#!">Politicas de Privacidad.</a>
      </p>
    </div>
  );
}


const Index = ({handleChangeForm}) => {
  return (
    <form className="sign-up-form" autoComplete="off">
      <Logo handleClick={handleChangeForm}/>
      <Formulario />
    </form>
  );
};

export default Index;