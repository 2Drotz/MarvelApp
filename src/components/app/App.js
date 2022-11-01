import AppHeader from "../appHeader/AppHeader";
import { Component } from 'react';
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/CharInfo";

import ErrorBoundery from "../errorBoundery/ErrorBoundery";

import decoration from '../../resources/img/vision.png';

class App extends Component {

    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <ErrorBoundery>
                        <RandomChar />
                    </ErrorBoundery>

                    <div className="char__content">
                        <ErrorBoundery>
                            <CharList onCharSelected={this.onCharSelected} />
                        </ErrorBoundery>

                        <ErrorBoundery>
                            <CharInfo charId={this.state.selectedChar} />
                        </ErrorBoundery>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}



const DynamicGreating = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>

        </div>
    )
}

export default App;