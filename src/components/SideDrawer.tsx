import * as React from 'react';
import {Component} from 'react';
import { Link } from "react-router-dom";

import './SideDrawer.css';

interface IProps {
    show: boolean,
    drawToggleClickHandler(): void,
}

class SideDrawer extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    public render() {
        const drawerClasses = this.props.show ? ['side-drawer', 'open'] : ['side-drawer'];

        return (
            <nav className={drawerClasses.join(' ')}>
                <div className="side-drawer__title-area">
                    <p className="side-drawer__title">Menu</p>
                </div>
                <ul>
                    <Link to="/about">
                        <li onClick={this.clickHandler}>About</li>
                    </Link>
                    <Link to="/blog">
                        <li onClick={this.clickHandler}>Blog</li>
                    </Link>
                </ul>
            </nav>
        );
    }

    private clickHandler() {
        this.props.drawToggleClickHandler();
    }
}

export default SideDrawer;
