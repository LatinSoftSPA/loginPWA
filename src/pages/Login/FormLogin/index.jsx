const RecuperarPassword = () => {
    return (
      <p className="text">
        Olvidaste tu contraseña o sus datos de inicio de sesión.
        <a href="#!">Haz Click Aqui</a> para tener ayuda.
      </p>
    );
  };

const Logo = ({handleClick}) => {
    const logo = import.meta.env.VITE_IMG_LOGO;

    const propsAnchor = {
      href: "#",
      className: "toggle",
      onClick: handleClick
    }
    return (
      <>
        <div className="logo">
            <img src={logo} width="100%" height="100%" alt="logo-img" />
            <h4>SACGes</h4>
        </div>

        <div className="heading">
            <h2>Bienvenido</h2>
            <h6>Aun no tienes tu cuenta de acceso? </h6>
            <a {...propsAnchor}>Regístrate aquí</a>
        </div>
      </>
    );
};

const Formulario = () => {
    const propsInputName = {
        type: "text",
        minLength: "4",
        className: "input-field",
        autoComplete: "off",
        required: true
    }

    const propsInputPassword = {
        type: "password",
        minLength: "4",
        className: "input-field",
        autoComplete: "off",
        required: true
    }

    return (
        <div className="actual-form">
            <div className="input-wrap">
                <input {...propsInputName} />
                <label>Usuario</label>
            </div>
            <div className="input-wrap">
                <input {...propsInputPassword} />
                <label>Contraseña</label>
            </div>
            <input type="submit" value="Ingresar" className="sign-btn" />
        </div>
    );
};

const Index = ({handleChangeForm}) => {  
    return (
        <form className="sign-in-form" autoComplete="off">
            <Logo handleClick={handleChangeForm}/>
            <Formulario />
            <RecuperarPassword />
        </form>
    );
}

export default Index;