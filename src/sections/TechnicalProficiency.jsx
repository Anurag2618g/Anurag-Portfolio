import React, { useState } from "react";
import Tabs from "../components/Tabs";
import { SKILL_TABS, SKILLS } from "../utils/data";
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';

const TechnicalProficiency = () => {
    const [tabData, setTabData] = useState(SKILLS);
    const [activeTab, setActiveTab] = useState('all');

    const handleTabValueChange = (value) => {
        if (value === 'all') {
            setActiveTab('all');
            setTabData(SKILLS);
            return;
        }

        const updatedList = SKILLS.filter((skill) => skill.type == value);
        setActiveTab(value);
        setTabData(updatedList);
    }

  return (
    <section id="skills" className="bg-background mt-20 p-10">
      <div className="container mx-auto p-10">
        <div className="mx-auto w-full lg:w-[60vw]">
          <h4 className="section-title">TechnicalProficiency</h4>

          <p className="leading-6 mt-4 text-xl text-center">
            A versatile developer with hands-on expertise in modern technologies
            , tools, and frameworks, dedicated to building scalable,
            user-centric, and efficient solutions.
          </p>
        </div>
        <Tabs
            tabList={SKILL_TABS} 
            activeTab={activeTab}
            onChange={handleTabValueChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
        {tabData.map((skill, index) => (
          <motion.div 
            key={skill.id}
            initial={{ opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{ duration:0.4, delay: index * 0.1}}
          >
            <SkillCard 
              icon={<skill.icon className="w-6 h-6 text-primary" />}
              skillName={skill.skill}
              description={skill.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalProficiency;
