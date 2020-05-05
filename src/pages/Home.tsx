import * as React from 'react';
import { Component } from 'react';

import './Home.css';

class Home extends Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <main className="main">
                <h1 className="home-page__title">Welcome to umechan's portfolio site!</h1>
            </main>
        );
    }
}

export default Home; 
