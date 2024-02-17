import React, { useContext } from "react";

import "./Skills.css";

import { ThemeContext } from "../../contexts/ThemeContext";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";

import Fade from "react-reveal/Fade";

function Skills() {
  const { theme } = useContext(ThemeContext);

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  return (
    <div id="skills" className="skills" style={{ backgroundColor: theme.secondary }}>
      <div className="skillsHeader">
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          {skillsData.map((skill, id) => (
            <Fade bottom>
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill.title)} alt={skill.title} />
                <h3 style={{ color: theme.tertiary }}>{skill.title}</h3>
                <div class="contentContainer">
                  <div class="skillBar">
                    <div
                      class="skillBarContainer"
                      style={{ background: hexToRGB(theme.primary30, 0.4) }}
                    >
                      <div
                        class="skillBarValue"
                        style={{
                          width: `${skill.level}%`,
                          background: hexToRGB(theme.primary30, 0.85),
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
