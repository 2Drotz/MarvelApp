class MarvelService {
   _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
   _apiKey = 'apikey=5b54fd1bfcb47c5d1972bed5a13df785';

   getResource = async (url) => {
      let res = await fetch(url);

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      return await res.json();
   }

   getAllCharacters = async () => {
      const res = this.getResource(`${this._apiBase}characters?limit=9&offset=50&${this._apiKey}`);
      return res.data.result.map(this._transformCharacter);
   }

   getCharacter = async (id) => {
      const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
      return this._transformCharacter(res.data.results[0]);
   }


   _transformCharacter = (char) => {
      return {
         name: char.name,
         description: char.description ? `${char.description.substr(0, 210)}...` : "Извините, данные по этому персонажу отсутствуют",
         thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
         homepage: char.urls[0].url,
         wiki: char.urls[1].url
      }
   }
}

export default MarvelService;