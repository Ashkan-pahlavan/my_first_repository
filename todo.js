
document.addEventListener('DOMContentLoaded', (event) => {
    aufgabenLaden(); // Ruft die Funktion auf, um gespeicherte Aufgaben zu laden
});
// function changeContent() {
//     // Kalame ra az input gerefte va dar poshe namayesh dade shavad
//     var userInput = document.getElementById("neueAufgabe").value;
//     var myDiv = document.getElementById("myDiv");
//     myDiv.innerHTML = userInput;

//     // Aks ra be poshe ezafe konim (mesle masalan link-e sabt shode)
//     myDiv.style.backgroundImage = "url('\IMG_5806.JPG')";
// }

function aufgabenLaden() {
    let aufgaben = JSON.parse(localStorage.getItem('aufgaben')) || [];

    let aufgabenListe = document.getElementById('todoListe');
    aufgabenListe.innerHTML = ''; // Leert die aktuelle Liste, um sie neu zu befüllen

    aufgaben.forEach((aufgabe, index) => {
        let li = document.createElement('li'); // Erstellt ein neues Listenelement
        li.textContent = aufgabe.text; // Setzt den Text der Aufgabe in das Listenelement
        aufgabenListe.appendChild(li); // Fügt das Listenelement zur Liste im HTML hinzu
        // if(li === "AA"){
        //     let a = ("hahaha")
        //     let AF3 = document.getElementById('AA')
        //         AF3.textContent = a;
        // };
        // Erstellt einen Löschbutton für jede Aufgabe
        let loeschButton = document.createElement('button');
        loeschButton.textContent = 'Löschen';
        // Fügt einen Event-Listener hinzu, der die Aufgabe löscht, wenn der Button geklickt wird
        loeschButton.onclick = function() {
            aufgabeLoeschen(index);
        };
        li.appendChild(loeschButton); // Fügt den Löschbutton zum Listenelement hinzu
    });
}


function aufgabeLoeschen(index) {
    let aufgaben = JSON.parse(localStorage.getItem('aufgaben')) || []; //Liest vorhandene Aufgabe
    aufgaben.splice(index, 1); // Entfernt die Aufgabe am spezifizierten Index
    localStorage.setItem('aufgaben', JSON.stringify(aufgaben)); // Speichert das aktualisierte Array
    aufgabenLaden();
}

function neueAufgabeHinzufuegen() {
    let aufgabeInput = document.getElementById('neueAufgabe'); // Greift auf das Eingabefeld zu
    let aufgabeText = aufgabeInput.value; // Holt den eingegebenen Text aus dem Eingabefeld
    if (aufgabeText === '') {
        alert('Bitte eine Aufgabe eingeben!'); // Zeigt eine Warnung, falls das Feld leer ist
        return; // Beendet die Funktion frühzeitig, falls kein Text eingegeben wurde
    }
    let aufgaben = JSON.parse(localStorage.getItem('aufgaben')) || []; // Liest vorhandene Aufgaben
    aufgaben.push({text: aufgabeText}); // Fügt die neue Aufgabe zum Array hinzu
    localStorage.setItem('aufgaben', JSON.stringify(aufgaben)); // Speichert das aktualisierte Array
    aufgabeInput.value = ''; // Leert das Eingabefeld
    aufgabenLaden();
}
