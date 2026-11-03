import React from 'react';

// Personnalisez ici votre profil, vos compétences et vos projets.
const profile = {
  name: 'Mbewe',
  role: '[Votre métier ou domaine d’études]',
  description: '[Présentez votre parcours, votre formation et ce qui vous passionne.]',
  email: '',
  github: 'https://github.com/axel-limbaime',
};

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Git & GitHub'];
const projects = [
  { id: 1, title: '[Premier projet]', description: '[Décrivez le besoin, votre contribution et le résultat obtenu.]', technologies: 'React, CSS', url: '' },
  { id: 2, title: '[Deuxième projet]', description: '[Présentez une autre réalisation et les difficultés résolues.]', technologies: 'À compléter', url: '' },
  { id: 3, title: '[Troisième projet]', description: '[Expliquez ce que vous avez construit et appris.]', technologies: 'À compléter', url: '' },
];

function ProjectCard({ project }) {
  return (
    <article className="card">
      <span className="project-number" aria-hidden="true">0{project.id}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="technologies">{project.technologies}</p>
      {project.url && <a href={project.url}>Découvrir le projet →</a>}
    </article>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header>
        <nav className="container" aria-label="Navigation principale">
          <a className="logo" href="#accueil">{profile.name}<span>.</span></a>
          <div className="nav-links">
            <a href="#apropos">À propos</a>
            <a href="#competences">Compétences</a>
            <a href="#projets">Projets</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      <main id="contenu" className="container">
        <section id="accueil" className="hero" aria-labelledby="titre">
          <span className="eyebrow">BIENVENUE SUR MON PORTFOLIO</span>
          <h1 id="titre">Bonjour,<br />je suis {profile.name}<span>.</span></h1>
          <p>{profile.role}. Découvrez mon parcours, mes compétences et mes réalisations.</p>
          <div className="actions">
            <a className="button" href="#projets">Voir mes projets ↗</a>
            <a className="button secondary" href="#contact">Me contacter</a>
          </div>
        </section>
        <section id="apropos" aria-labelledby="titre-apropos">
          <h2 id="titre-apropos">À propos de moi</h2>
          <div className="card"><p>{profile.description}</p></div>
        </section>
        <section id="competences" aria-labelledby="titre-competences">
          <h2 id="titre-competences">Mes compétences</h2>
          <p>Une sélection à adapter à votre parcours.</p>
          <ul className="tags">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </section>
        <section id="projets" aria-labelledby="titre-projets">
          <h2 id="titre-projets">Mes projets</h2>
          <p>Trois emplacements à personnaliser avec vos réalisations.</p>
          <div className="grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
        </section>
        <section id="contact" className="contact" aria-labelledby="titre-contact">
          <span className="eyebrow">ET SI ON ÉCHANGEAIT ?</span>
          <h2 id="titre-contact">Parlons de votre projet.</h2>
          <p>Une question, une collaboration ou une opportunité ?</p>
          <div className="actions">
            {profile.email && <a className="button" href={`mailto:${profile.email}`}>M’envoyer un e-mail</a>}
            <a className="button secondary" href={profile.github}>Mon GitHub ↗</a>
          </div>
        </section>
      </main>
      <footer><p>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</p></footer>
    </>
  );
}
