import ComicsList from '../comicsList/ComicsList';
import AppBanner from "../appBanner/AppBanner";
import { Helmet } from "react-helmet";


const ComicsPage = () => {
   return (
      <>
         <Helmet>
            <meta
               name="description"
               content="Page with list of our comics"
            />
            <title>Comics Page</title>
         </Helmet>
         <AppBanner />
         <ComicsList />
      </>
   )
}

export default ComicsPage;


function roundToNext5(n) {
   if (n % 5 == 0) {
      return n;
   }
   if (n < 0) {
      let a = 1000
      for (let i = n; i < a; i++) {
         if (i % 5 == 0) {
            return i
         }
      }
   }
   for (let i = n; i < i * 10; i++) {
      if (i % 5 == 0) {
         return i
      }
   }
}
console.log(roundToNext5(1))