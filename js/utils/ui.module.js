export class Ui {
  displayGame(data) {
    let gameData = ``;
    for (let i = 0; i < data.length; i++) {
      gameData += ` <div class="col-md-6 col-lg-3">
              <div data-id="${data[i].id}" class="card bg-transparent h-100">
                <img class="card-img-top" src="${data[i].thumbnail}" alt="Title" />
                <div class="card-body">
                  <div class="hstack justify-content-between">
                    <h6 class="card-title">${data[i].title}</h6>
                    <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                  <p class="card-text small text-center text-white-50">
                   ${data[i].short_description}
                  </p>
                </div>
                <footer
                  class="card-footer small hstack justify-content-between"
                >
                  <span class="badge badge-color">${data[i].genre}</span>
                  <span class="badge badge-color">${data[i].platform}</span>
                </footer>
              </div>
            </div>`;
    }
    document.querySelector(".gameBox").innerHTML = gameData;
  }

  displayDetails(data) {
    let cartona = ` <figure class="col-md-4">
            <img src=${data.thumbnail} alt="game image" />
          </figure>
          <div class="col-md-8">
            <h3>Title: ${data.title}</h3>
            <p>Category:<span class="badge text-bg-info"> ${data.genre}</span></p>
            <p>Platform:<span class="badge text-bg-info">${data.platform}</span></p>
            <p>Status:<span class="badge text-bg-info"> ${data.status}</span></p>
            <p class="small">
          ${data.description}
            </p>
            <a
              class="btn btn-outline-warning"
              target="_blank"
              href="${data.game_url}"
              >Show Game</a
            >
          </div>`;

    document.querySelector(".detailsBox").innerHTML = cartona;
//     const backgroundImage = data.thumbnail.replace(
//       "thumbnail",
//       "background"
//     );

//     document.body.style.cssText = `
//   background-image:url('${backgroundImage}');
//   background-size:cover;
//   background-position:center;
// `;
  }
}
