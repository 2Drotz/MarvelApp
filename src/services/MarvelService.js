import { useHttp } from '../hooks/http.hooks';

const useMarvelService = () => {
   const { loading, request, error, clearError } = useHttp();
   const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
   const _apiKey = 'apikey=5b54fd1bfcb47c5d1972bed5a13df785';
   const _baseOffset = 1239;

   const getAllCharacters = async (offset = _baseOffset) => {
      const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
      return res.data.results.map(_transformCharacter);
   }

   const getCharacter = async (id) => {
      const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
      return _transformCharacter(res.data.results[0]);
   }

   const _transformCharacter = (char) => {
      return {
         id: char.id,
         name: char.name,
         description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
         thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
         homepage: char.urls[0].url,
         wiki: char.urls[1].url,
         comics: char.comics.items,
      }
   }
   return { loading, error, getAllCharacters, getCharacter, clearError };
}

export default useMarvelService;