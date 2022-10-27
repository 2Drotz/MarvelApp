import AppHeader from "../appHeader/AppHeader";
import { Component } from 'react';
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

class App extends Component {

    state = {
        selectedChar: null
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <RandomChar />
                    <div className="char__content">
                        <CharList />
                        <CharInfo />
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}

export default App;