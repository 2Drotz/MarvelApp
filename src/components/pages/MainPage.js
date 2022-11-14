import { useState } from "react";

import ErrorBoundery from '../errorBoundery/ErrorBoundery'
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

   const [selectedChar, setChar] = useState(null);



   const onCharSelected = (id) => {
      setChar(id)
   }

   return (
      <>
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
      </>
   )
}

export default MainPage;

