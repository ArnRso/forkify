import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const key = "0db5886b2fdb77f25c2b543b13f95310";
    const key2 = "8f929511016aeffc152bfcdb2be6712d";

    try {
      const res = await axios(
        `${proxy}https://www.food2fork.com/api/search?key=${key2}&q=${
          this.query
        }`
      );
      // console.log(res);
      this.result = res.data.recipes;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}

// const proxy = "https://cors-anywhere.herokuapp.com/";
// const key = "0db5886b2fdb77f25c2b543b13f95310";
