import React from "react";
import './resume.css';
import { resume_data } from "./resumedata";
import Clock from "./clcok";
import { useNavigate } from "react-router";

export function Resume() {
    let navigate = useNavigate();
    return (
        <div className="resume-body">
            <div className="resume-container">
                <div >
                    <h2> Experience</h2>

                    {resume_data.experience.map((exp) => (
                        <div className="resume-experience-container">
                            <img className="company-logo" src={exp.img} alt={exp.name} />
                            <div>
                                <ul>
                                    <li className="company-name-location">
                                        <span>
                                            {exp.name}
                                        </span>
                                        <span>
                                            {exp.location}
                                        </span>
                                    </li>

                                    <li className="company-title">{exp.title}</li>
                                    <li className="company-period">{exp.period}</li>
                                </ul>
                                <div className="company-details">
                                    <ul>
                                        {exp.details.map((det) => (
                                            <li>{det}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div >
                    <h2> Education</h2>
                    <div>
                        {resume_data.education.map((edu) => (
                            <ul className="edu-ul">
                                <img src={edu.img} alt={edu.institution} />

                                <span>
                                    <li className="edu-course">{edu.course},</li>
                                    <li className="edu-insti">{edu.institution},</li>
                                </span>

                                <li className="edu-year">{edu.year},</li>
                                <li className="edu-grade">Score: {edu.grade}</li>

                            </ul>
                        ))

                        }
                    </div>
                </div>
                <div className="resume-row">
                    <div >
                        <h2> Programming Languages</h2>
                        <ul className="resume-light">
                            {resume_data.languages.map((lang) => (
                                <li>   {lang}</li>
                            ))

                            }
                        </ul>
                    </div>
                    <div >
                        <h2> Technologies</h2>
                        <ul className="resume-light">
                            {resume_data.technologies.map((tech) => (
                                <li>   {tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div >
                    <h2>Projects</h2>

                    {resume_data.project.map((pjct) => (
                        <div className="project-container">
                            <a href={pjct.link}>
                                <img className="project-thumbnail" src={pjct.img} alt={pjct.title} />
                            </a>
                            <a href={pjct.link}>
                            <div>
                                <p className="project-title">
                                    {pjct.title}
                                </p>

                                <div className="project-details">
                                    <ul>
                                        {pjct.details.map((det) => (
                                            <li>{det}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            </a>
                        </div>
                    ))}

                </div>
                <div className="self">
                    <img src="vipin_round.png" alt="vipin" />
                    Vipin Chaudhary
                </div>
            </div>

            <div className="resume-footer">
                <button className="resume-gotohome" onClick={() => navigate("/")}>
                    Back
                </button>
                <div className="resume-links">
                    <a href="mailto:chaudharyv714@gmail.com">
                        <i className="fa-solid fa-envelope-open"></i>
                    </a>
                    <a href="mailto:chaudharyv714@gmail.com">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="mailto:chaudharyv714@gmail.com">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <div className="resume-time">
                    <Clock />
                </div>
            </div>
        </div >
    );
}