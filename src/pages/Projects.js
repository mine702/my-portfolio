import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Project 1',
        description: 'Description of project 1',
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'Description of project 2',
        link: '#'
    }
];

const Projects = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>My Projects</h1>
                <div>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Projects;
