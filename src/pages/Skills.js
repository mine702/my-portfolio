import React from 'react';
import { Element } from 'react-scroll';
import './Section.css';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import SkillsData from '../components/SkillsData';

const categorizedData = SkillsData.reduce((acc, curr) => {
    const category = acc.find((item) => item.category === curr.category);
    if (category) {
        category.skills.push({ skill: curr.skill, proficiency: curr.proficiency });
    } else {
        acc.push({ category: curr.category, skills: [{ skill: curr.skill, proficiency: curr.proficiency }] });
    }
    return acc;
}, []);

const Skills = () => {
    return (
        <Element name="skills" className="section" id="skills-section">
             <h1>Skills</h1>
            <div className="skills-grid">
                {categorizedData.map((categoryData) => (
                    <div key={categoryData.category} className="skills-grid-item">
                        <h3>{categoryData.category}</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart data={categoryData.skills}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="skill" />
                                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{fontSize: 7}} />
                                <Radar name={categoryData.category} dataKey="proficiency" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                ))}
            </div>
        </Element>
    );
};

export default Skills;
