import React from 'react';
import Layout from '@theme/Layout';
import profileImg from '/static/img/perfil.jpg'

export default function Portfolio() {
  return (
    <Layout title="Portafolio" description="Portafolio de David Ruiz">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        {/* <p>
          🚧Esta página está en construcción.🚧
        </p> */}
        <div className="avatar avatar--vertical">
          <img
            className="avatar__photo avatar__photo--xl"
            src={profileImg} />
          <div className="avatar__intro">
            <div className="avatar__name">David Ruiz</div>
            <small className="avatar__subtitle">
              <h2>Front-end developer</h2>
              Creador de contenido en <a target='_blank' href="https://www.youtube.com/CodingTube">YouTube</a>
            </small>
          </div>
        </div>
      </div>
    </Layout>
  );
}