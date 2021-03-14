import * as React from 'react';
import { Component } from 'react';
import { IconContext } from "react-icons";
import { FaTwitterSquare } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

import './About.css';

class About extends Component {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <main className="main">
                <h1 className="about-page__title">About</h1>
                <div className="about-page__card">
                    <table className="about-page__table">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>Keisuke Umezawa</td>
                            </tr>
                            <tr>
                                <th>Birthday</th>
                                <td>1989/07/10</td>
                            </tr>
                            <tr>
                                <th>Blog (en)</th>
                                <td>
                                    <a href="https://medium.com/@keisukeumezawa">Medium</a>
                                </td>
                            </tr>
                            <tr>
                                <th>Blog (ja)</th>
                                <td>
                                    <a href="https://kumechann.hatenablog.com/">Hatena Blog</a>
                                </td>
                            </tr>
                            <tr>
                                <th>Resume</th>
                                <td>
                                    <a href="https://github.com/keisuke-umezawa/pandoc_resume/blob/master/output/resume.pdf">Pandoc</a>
                                </td>
                            </tr>
                            <tr className="about-page__icons">
                                <td>
                                    <a href="https://github.com/keisuke-umezawa">
                                <IconContext.Provider value={{ size: "3em", color: "#000" }}>
                                    <GoMarkGithub />
                                </IconContext.Provider>
                                    </a>
                                </td>
                                <td>
                                    <a href="https://twitter.com/kumezawa_">
                                <IconContext.Provider value={{ size: "3em", color: "#55acee" }}>
                                    <FaTwitterSquare />
                                </IconContext.Provider>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default About; 
