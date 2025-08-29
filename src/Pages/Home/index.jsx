import { SiReactbootstrap } from "react-icons/si";
import { MdOutlineArrowOutward } from "react-icons/md";
import { SiMailtrap } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import styles from "./home.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import Diploma from "../Diplomas";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
function Home() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lovers+Quarrel&family=Meow+Script&family=Pacifico&display=swap');
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lovers+Quarrel&family=Meow+Script&family=Pacifico&family=Sriracha&display=swap');
      </style>
      <div className={styles.division}>
        <div className={styles.izquierda}>
          <h1>Sergio Ruiz Díaz</h1>
          <img src="/Portfolio/pdfs/perfil.jpg" alt="" width="200px" />
          <h2>Desarrollador Full Stack</h2>
          <div className={styles.diplomas}>
            {/* <Diploma
              imgSrc="https://i.imgur.com/m8EcDnQ.png"
              pdfSrc="/Portfolio/pdfs/Certificado Angular.pdf"
              alt="Diploma Angular"
            /> */}
            <Diploma
              imgSrc="https://i.imgur.com/f3pzkKo.png"
              pdfSrc="/Portfolio/pdfs/Certificado ReactJS.pdf"
              alt="Diploma React JS"
            />
            <Diploma
              imgSrc="https://i.imgur.com/JD0zjDs.png"
              pdfSrc="/Portfolio/pdfs/Certificados NodeJs.pdf"
              alt="Diploma NodeJS"
            />
            <Diploma
              imgSrc="https://i.imgur.com/e3Y6Xzd.png"
              pdfSrc="/Portfolio/pdfs/Certificado Professional Full-Stack Developer.pdf"
              alt="Diploma Professional Full-Stack Developer"
            />
            <Diploma
              imgSrc="https://i.imgur.com/UGvm5MU.png"
              pdfSrc="/Portfolio/pdfs/Certificados full stack con react.pdf"
              alt="Diploma Full Stack con React"
            />
          </div>
        </div>
        <div className={styles.derecha}>
          <div className={styles.presentacion}>
            <p>
              Soy desarrollador web full stack con una pasión por la tecnología
              que me acompaña desde chico. <br />
            </p>
            <p>
              Me especializo en el stack MERN (MongoDB, Express, React y
              Node.js) y disfruto crear proyectos personales que me permitan
              aplicar y mejorar mis habilidades.
            </p>
            <p>
              Me interesa desarrollar aplicaciones claras, funcionales y
              escalables, cuidando la experiencia del usuario y la calidad del
              código.
            </p>
            <p>
              Estoy en constante aprendizaje, incorporando nuevas herramientas y
              buenas prácticas para crecer como profesional y aportar valor en
              cada desafío.
            </p>
          </div>
          <div className={styles.proyectos}>
            <h3>Proyectos personales:</h3>
            <div className={styles.proyecto}>
              <a href="https://veserad.github.io/Sabrina" target="_blank">
                <img
                  variant="top"
                  src="https://i.imgur.com/EQQMpyv.png"
                  width="200px"
                />
                {/* <MdOutlineArrowOutward size={50} /> */}
                <div className={styles.sabrina}>
                  <h4>Sabrina</h4>
                  <p>
                    Tienda online de indumentaria femenina, no funcional, solo a
                    modo de práctica
                  </p>
                  <div
                    style={{ display: "flex", gap: "10px" }}
                    className={styles.proyectoIconos}
                  >
                    <div>
                      <FaReact size={30} color="rgba(219, 130, 241, 1)" />
                      <span>React</span>
                    </div>
                    <div>
                      <DiJavascript size={30} color="rgba(219, 130, 241, 1)" />
                      <span>JavaScript</span>
                    </div>
                    <div>
                      <FaCss3Alt size={30} color="rgba(219, 130, 241, 1)" />
                      <span>Css</span>
                    </div>
                    <div>
                      <FaHtml5 size={30} color="rgba(219, 130, 241, 1)" />
                      <span>Html</span>
                    </div>
                    <div>
                      <SiReactbootstrap
                        size={30}
                        color="rgba(219, 130, 241, 1)"
                      />
                      <span>React Bootstrap</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.proyecto}>
              <a href="https://github.com/Veserad/sabrina-back" target="_blank">
                <img
                  variant="top"
                  src="https://i.imgur.com/rtvHnrb.png"
                  width="200px"
                />
                <div className={styles.bellissima}>
                  <h4>Sabrina BackEnd</h4>
                  <p>
                    BackEnd del proyecto Sabrina, que incluye autenticación y
                    gestión de usuarios.
                  </p>
                  <div
                    style={{ display: "flex", gap: "10px" }}
                    className={styles.proyectoIconos}
                  >
                    <div>
                      <SiMongodb size={30} color="rgba(219, 130, 241, 1)" />
                      <span>MongoDB</span>
                    </div>
                    <div>
                      <DiJavascript size={30} color="rgba(219, 130, 241, 1)" />
                      <span>JavaScript</span>
                    </div>
                    <div>
                      <FaNodeJs size={30} color="rgba(219, 130, 241, 1)" />
                      <span>NodeJs</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.proyecto}>
              <a
                href="https://veserad.github.io/Bellissima-front"
                target="_blank"
              >
                <img
                  variant="top"
                  src="https://i.imgur.com/JtLt6BG.png"
                  width="200px"
                />
                <div className={styles.bellissima}>
                  <h4>Bellissima</h4>
                  <p>
                    Proyecto final integrador hecho como examen para un curso de
                    maquetado
                  </p>
                  <div
                    style={{ display: "flex", gap: "10px" }}
                    className={styles.proyectoIconos}
                  >
                    <div>
                      <FaReact size={30} color="rgba(219, 130, 241, 1)" />
                      <span>React</span>
                    </div>
                    <div>
                      <DiJavascript size={30} color="rgba(219, 130, 241, 1)" />
                      <span>JavaScript</span>
                    </div>
                    <div>
                      <FaCss3Alt size={30} color="rgba(219, 130, 241, 1)" />
                      <span>Css</span>
                    </div>
                    <div>
                      <FaHtml5 size={30} color="rgba(219, 130, 241, 1)" />
                      <span>Html</span>
                    </div>
                    <div>
                      <FaBootstrap size={30} color="rgba(219, 130, 241, 1)" />
                      <span>Bootstrap</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.proyecto}>
              <a
                href="https://github.com/Veserad/Bellissima-back"
                target="_blank"
              >
                <img
                  variant="top"
                  src="https://i.imgur.com/4uVCqPv.png"
                  width="200px"
                />
                <div className={styles.bellissima}>
                  <h4>Bellissima BackEnd</h4>
                  <p>
                    BackEnd del proyecto Bellissima, que incluye formulario de
                    mensajería
                  </p>
                  <div
                    style={{ display: "flex", gap: "10px" }}
                    className={styles.proyectoIconos}
                  >
                    <div>
                      <GrMysql size={30} color="rgba(219, 130, 241, 1)" />
                      <span>MySQL</span>
                    </div>
                    <div>
                      <DiJavascript size={30} color="rgba(219, 130, 241, 1)" />
                      <span>JavaScript</span>
                    </div>
                    <div>
                      <FaNodeJs size={30} color="rgba(219, 130, 241, 1)" />
                      <span>NodeJs</span>
                    </div>
                    <div>
                      <SiMailtrap size={30} color="rgba(219, 130, 241, 1)" />
                      <span>Mailtrap</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.proyecto}>
              <a
                href="https://www.youtube.com/watch?v=cpb2KCpueTAf"
                target="_blank"
              >
                <img
                  variant="top"
                  src="https://i.imgur.com/JtLt6BG.png"
                  width="200px"
                />
                <div className={styles.bellissima}>
                  <h4>Bellissima Heroku</h4>
                  <p>
                    Video del proyecto Bellissima, cuando se encontraba en
                    funcionamiento en Heroku
                  </p>
                  <div
                    style={{ display: "flex", gap: "10px" }}
                    className={styles.proyectoIconos}
                  >
                    <div>
                      <FaReact size={30} color="rgba(219, 130, 241, 1)" />
                      <span>React</span>
                    </div>
                    <div>
                      <GrMysql size={30} color="rgba(219, 130, 241, 1)" />
                      <span>MySQL</span>
                    </div>
                    <div>
                      <DiJavascript size={30} color="rgba(219, 130, 241, 1)" />
                      <span>JavaScript</span>
                    </div>
                    <div>
                      <FaNodeJs size={30} color="rgba(219, 130, 241, 1)" />
                      <span>NodeJs</span>
                    </div>
                    <div>
                      <FaCss3Alt size={30} color="rgba(219, 130, 241, 1)" />
                      <span>Css</span>
                    </div>
                    <div>
                      <FaHtml5 size={30} color="rgba(219, 130, 241, 1)" />
                      <span>Html</span>
                    </div>
                    <div>
                      <FaBootstrap size={30} color="rgba(219, 130, 241, 1)" />
                      <span>Bootstrap</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
