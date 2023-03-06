console.log("Basic Grid");

/*
    function createelement - ami visszatér egy tagName, cssName, content
        .grid-row sor 
        .grid-cell cella(mező)
        #grid-container


*/

function createElement(tagName, cssName, content) {
    const element = document.createElement(tagName);
    //element.classList.add(cssName);  //ez már létezőhöz adja hozzá a CSS stílust
    //element.setAttribute("class", cssName); //ez felülírja az eredetit 
    element.className = cssName; //ez a 3 sor mind ugyanaz //ez is felülírja az eredetit,ezzel 1-nél több css classt is hozzá lehet adni
    if(content){
        const text = document.createTextNode(content);
        element.appendChild(text);
    }
    return element;
}

/*
a createelement segítségével hozzunk létre egy div-et amely a 
basic-grid css osztállyal bír, és a tartalma egy tetszőleges szöveg 
az így létrehozott elemet a grid containerbe 

*/

// const firstElement = createElement("div",  "basic-grid", "Első szöveg");

// document.getElementById("grid-container").appendChild(firstElement);

// const secElement = createElement("div",  "basic-grid", "Második szöveg");

// document.getElementById("grid-container").appendChild(secElement);

// const thirdElement = createElement("div",  "basic-grid", "Harmadik szöveg");

// document.getElementById("grid-container").appendChild(thirdElement);


//bármilyen adatstruktúrából (USERs pl objectként), bármilyen Json képes lesz táblázat formájában megjeleníteni
// headers vagy options - -> string tömb, ami a users azon kulcsait ami a táblázat oszlapaiként akarunk látni
// azt a szelektort megadni, amibe bele kell renderelni (grid-container)
//grid létrehozásának első lépése
function renderGrid(data, headers, renderTo, titleText = "Basic Grid" ) {
    const grid = createElement("div", "basic-grid");

    //szöveg létrehozása címként

    let title = createElement("div", "basic-grid-title", titleText);
    grid.appendChild(title);

    let row, cell;



    /*
        Készítsük el a táblázatunk(grid) fejlécét
        - létrehozunk egy sor elemet(row)
        - végig iterálunk a fejlécen
            - létrehozzuk a fejléc oszlopait
            - majd ezeket hozzáadjuk a fejlécsorhoz
    */

    row = createElement("div", "grid-row grid-head");
    grid.appendChild(row);

    headers.forEach( head => {
        cell = createElement("div", "grid-cell", head);
        row.appendChild(cell);
    } );


    //külső ciklus áltlaában a sorok száma, belső a celláké
    for(const d of data){
        row = createElement("div", "grid-row");
        grid.appendChild(row);
        for(const key of headers){
            cell = createElement("div", "grid-cell", d[key]);
            row.appendChild(cell);
        }
    }

    document.querySelector(renderTo).appendChild(grid);


}

renderGrid(
    USERS,
     ["id", "username", "lastName", "firstName", "email", "status"],
      "#grid-container",
      "Felhasználók listája"
      );




