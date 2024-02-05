import { Ui } from "./ui.module.js";
export class Details {
  constructor(id) {
    this.ui = new Ui();
    document.querySelector(".closeBtn").addEventListener("click", () => {
      document.getElementById("home").classList.remove("d-none");
      document.getElementById("details").classList.add("d-none");
    });
    this.getDetails(id);
  }
  async getDetails(idGames) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fda8d8b68emshfbe49031f1b3dc4p1457f9jsndf53333f6f34",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`,
      options
    );
    const data = await api.json();
    this.ui.displayDetails(data);
    loading.classList.add("d-none");
  }
}
