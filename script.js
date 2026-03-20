async function buscar() {
  let url = "https://dragonball-api.com/api/characters?limit=58";
  let allCharacters = []

  /* pegando a raça*/
  let race = document.querySelector("#race") 
  let raceFilter = ""
  console.log(race.value)

  /*Pegando o gênero*/
  let gender = document.getElementsByTagName("input")
  let genderFilter = ""
  console.log(gender)

  //checando se o radio do homem foi selecionado
if(gender[1].checked) genderFilter = "&gender" + gender[1].value

if(gender[2].checked) genderFilter = "&gender" + gender[2].value


  if(race.value != "") raceFilter = "&race=" + race.value
   
 

  url = url + raceFilter + genderFilter

  let resposta = await fetch(url)
  let dados = await resposta.json()

  if(dados.items){
     allCharacters = dados.items
  }else{
     allCharacters = dados
}

  document.querySelector(".allUsers").innerHTML = ""

 

  for(let character of allCharacters){
    /*console.log(character.name)
    console.log(character.race)
    console.log(character.image)
    console.log(character.ki)
    console.log("-----------------------")*/

    let divUser = document.createElement("div")
    divUser.classList.add("user")

    divUser.innerHTML = `
        <div class="avatar">
          <img src="${character.image}" />
        </div>
        <div class="data">
          <p>${character.name}</p>
          <p>
            <span>${character.race}</span>
          </p>
          <p>
            <span>${character.ki}</span> <br />
            <span>6000000</span>
          </p>
          <p>
            <span>${character.maxKi}</span> <br />
            <span>6000000</span>
          </p>
        </div>`

    document.querySelector(".allUsers").appendChild(divUser)
  }
}
  const musica = document.getElementById("musica");
  const btnControle = document.getElementById("btnControle");

  btnControle.addEventListener("click", () => {
    if (musica.paused) {
      musica.play();
      btnControle.textContent = "Pausar";
    } else {
      musica.pause();
      btnControle.textContent = "Tocar";
    }   
  });
