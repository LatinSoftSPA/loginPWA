import { useEffect } from "react";

const Index = () => {
    const img1 = import.meta.env.VITE_IMG_CARRUSEL_01;
    const img2 = import.meta.env.VITE_IMG_CARRUSEL_02;
    const img3 = import.meta.env.VITE_IMG_CARRUSEL_03;

    const handleClick = (bullets, images) => {
        function moveSlider() {
            let index = this.dataset.value;
            const la_imagen = `.img-${index}`;

            let currentImage = document.querySelector(la_imagen);
            images.forEach((img) => {
                if (img.classList.contains("show")) return img.classList.remove("show");
            });
            currentImage.classList.add("show");

            const textSlider = document.querySelector(".text-group");
            textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

            bullets.forEach((bull) => bull.classList.remove("active"));
            this.classList.add("active");
        }

        bullets.forEach((bullet) => {
            bullet.addEventListener("click", moveSlider);
        });
    }

    useEffect(() => {
        const bullets = document.querySelectorAll(".bullets span");
        const images = document.querySelectorAll(".image");
        handleClick(bullets, images);
    }, []);

    return (
        <>
            <div className="images-wrapper">
                <img className="image img-1 show" width="100%" height="100%" src={img1} alt="" />
                <img className="image img-2" width="100%" height="100%" src={img2} alt="" />
                <img className="image img-3" width="100%" height="100%" src={img3} alt="" />
            </div>

            <div className="text-slider">
                <div className="text-wrap">
                    <div className="text-group">
                        <h2>Planifica...</h2>
                        <h2>...Analiza...</h2>
                        <h2>...Ejecuta!!!</h2>
                    </div>
                </div>

                <div className="bullets">
                    <span className="active" data-value="1"></span>
                    <span data-value="2"></span>
                    <span data-value="3"></span>
                </div>
            </div>
        </>
    );
};

export default Index;
