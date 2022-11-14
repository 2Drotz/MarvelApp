import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from '../comicsList/ComicsList';
import AppBanner from "../appBanner/AppBanner";
import ErrorBoundery from '../errorBoundery/ErrorBoundery'
import decoration from '../../resources/img/vision.png';

const App = () => {

    const [selectedChar, setChar] = useState(null);



    const onCharSelected = (id) => {
        setChar(id)
    }

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Switch>
                        <Route exact path='/'>
                            <ErrorBoundery>
                                <RandomChar />
                            </ErrorBoundery>
                            <div className="char__content">
                                <ErrorBoundery>
                                    <CharList onCharSelected={onCharSelected} />
                                </ErrorBoundery>
                                <ErrorBoundery>
                                    <CharInfo charId={selectedChar} />
                                </ErrorBoundery>
                            </div>
                            <img className="bg-decoration" src={decoration} alt="vision" />
                        </Route>
                        <Route exact path='/comics'>
                            <AppBanner />
                            <ComicsList />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>

    )

}

export default App;