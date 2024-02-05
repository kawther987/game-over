import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games {
  constructor() {
    this.getGame("mmorpg");
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".menu .active").classList.remove("active");
        link.classList.add("active");
        this.getGame(link.innerHTML);
      });
    });
    this.ui = new Ui();
  }
  
  async getGame(category) {
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
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const response = await api.json();
    this.ui.displayGame(response);
    this.openDetails();
    loading.classList.add("d-none");
  }

  openDetails() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        this.showDetails(id);
      });
    });
  }

  showDetails(idGame) {
    const details = new Details(idGame);
    document.getElementById("details").classList.remove("d-none");
    document.getElementById("home").classList.add("d-none");
  }
}
