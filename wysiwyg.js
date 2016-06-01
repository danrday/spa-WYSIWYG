var tomoeGozen = 
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}


var calvinCoolidge = 
{
  title: "President",
  name: "Calvin Coolidge",
  bio: "John Calvin Coolidge Jr. (/ˈkuːlɪdʒ/; July 4, 1872 – January 5, 1933) was the 30th President of the United States (1923–29). A Republican lawyer from Vermont, Coolidge worked his way up the ladder of Massachusetts state politics, eventually becoming governor of that state. His response to the Boston Police Strike of 1919 thrust him into the national spotlight and gave him a reputation as a man of decisive action.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Calvin_Coolidge_cph.3g10777.jpg/165px-Calvin_Coolidge_cph.3g10777.jpg",
  lifespan: {
    birth: 1872,
    death: 1933
  }
}

var warrenHarding = 
{
  title: "President",
  name: "Warren G Harding",
  bio: "Warren Gamaliel Harding (November 2, 1865 – August 2, 1923) was the 29th President of the United States, serving from March 4, 1921 until his death. Harding died one of the most popular presidents in history, but the subsequent exposure of scandals that took place under him, such as Teapot Dome, eroded his popular regard, as did revelations of an affair by Nan Britton, one of his mistresses. In historical rankings of the U.S. presidents, Harding is often rated among the worst.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Warren_G_Harding-Harris_%26_Ewing.jpg/165px-Warren_G_Harding-Harris_%26_Ewing.jpg",
  lifespan: {
    birth: 1865,
    death: 1923
  }
}


var woodrowWilson = 
{
  title: "President",
  name: "Woodrow Wilson",
  bio: "Thomas Woodrow Wilson (December 28, 1856 – February 3, 1924) was an American politician and academic who served as the 28th President of the United States from 1913 to 1921. Born in Staunton, Virginia, he spent his early years in Augusta, Georgia and Columbia, South Carolina. Wilson earned a PhD in political science at Johns Hopkins University, and served as a professor and scholar at various institutions before being chosen as President of Princeton University, a position he held from 1902 to 1910.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/President_Wilson_1919.jpg/165px-President_Wilson_1919.jpg",
  lifespan: {
    birth: 1856,
    death: 1924
  }
}

var compiledArr = [tomoeGozen, calvinCoolidge, warrenHarding, woodrowWilson];
var persons = document.getElementById("person");

for (i=0; i<compiledArr.length; i++) {
  persons.innerHTML +=  `<section class = "person" id="section-${i}" data="${i}"><header class="person" id="name-Title" data="${i}">${compiledArr[i].name} - ${compiledArr[i].title}</header>
  <section class="person" data="${i}"><img class="image person" src="${compiledArr[i].image}" data="${i}"><p class="person" id="biography-${i}" data="${i}">${compiledArr[i].bio}</p></section>
  <footer class="lifespan person" data="${i}">${compiledArr[i].lifespan.birth} -${compiledArr[i].lifespan.death}</footer></section>`;


  var currID = document.getElementById(`section-${i}`);

  if (i%2 === 0) {
    currID.classList.add("oddBG");
  } else {
    currID.classList.add("evenBG");
  }

  }

var allClassesPerson = document.getElementsByClassName("person");

console.log(allClassesPerson);

//need to define these globally so that crazyFunction() can run
var sectionNumber;
var selectBio;
var textBox = document.getElementById("keypress-input");

function crazyFunction(e) {
  if (13 == e.keyCode) { 
    textBox.value = "";
  }
else { selectBio.innerHTML = textBox.value;
}
    }

  document.getElementById("person").addEventListener("click", function(clickEvent) {

      //removes any previous borders
      for (i=0; i < allClassesPerson.length; i++) {
      allClassesPerson[i].classList.remove("dottedBorder");
      }

      //adds new border around clicked element
      clickEvent.target.classList.add("dottedBorder");

      //selects textbox when you click any element
      textBox.focus();

      //puts new value into global value sectionNumber
      sectionNumber = clickEvent.target.attributes["data"].value;
   
      //puts new value into global value selectBio
      selectBio = document.getElementById(`biography-${sectionNumber}`);

      //adds event listener to textBox when a key is pressed
      textBox.addEventListener("keyup", crazyFunction);
});