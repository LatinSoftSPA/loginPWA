import { useEffect } from "react";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import Carrusel from "./Carrusel";

import "./styles.css";

const Formularios = () => {
    const handleChangeForm = () => {
        const main = document.querySelector("main");
        const toggle_btn = document.querySelectorAll(".toggle");
        toggle_btn.forEach((obj) => {
            obj.addEventListener("click", () => main.classList.toggle("sign-up-mode"));
        });
    }

    const handleCampos = (inputs) => {
        const focusBlur = (obj) => {
            obj.addEventListener("focus", () => obj.classList.add("active"));
            obj.addEventListener("blur", () => obj.value === "" ? obj.classList.remove("active") : null);
        }
        inputs.forEach((obj) => focusBlur(obj));
    }
  
    useEffect(() => {
      const campos = document.querySelectorAll(".input-field");
      handleCampos(campos);
    }, []);
    return (
        <>
            <FormLogin handleChangeForm={handleChangeForm} />
            <FormRegister handleChangeForm={handleChangeForm} />
        </>
    );
}

const Index = () => {
    return (
        <main>
            <div className="box">
                <div className="inner-box">
                    <div className="forms-wrap">
                        <Formularios />
                    </div>
                    <div className="carousel">
                        <Carrusel />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Index;