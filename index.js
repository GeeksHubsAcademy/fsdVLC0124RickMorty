const axios = require("axios");

const bringCharacters = async () => {
  try {
    const characters = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=2`
    );

    console.log(characters.data.results);
  } catch (error) {
    console.log(error);
  }
};

bringCharacters();
