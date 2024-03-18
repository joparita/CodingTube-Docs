import React from "react";
import Layout from "@theme/Layout";

export default function Portfolio() {
  return (
    <Layout title="Portafolio" description="Portafolio de David Ruiz">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <div className="avatar avatar--vertical">
          <img
            className="avatar__photo avatar__photo--xl"
            src="/img/perfil.jpg"
          />
          <div className="avatar__intro">
            <div className="avatar__name">David Ruiz</div>
            <small className="avatar__subtitle">
              <h2>Front-end developer</h2>
              Creador de contenido en{" "}
              <a target="_blank" href="https://www.youtube.com/CodingTube">
                YouTube
              </a>
            </small>
          </div>
        </div>
      </div>

      <h2
        style={{
          textAlign: "center",
          marginBottom: "90px",
        }}
      >
        🚧Esta sección está en construcción.🚧
      </h2>
    </Layout>
  );
}
