const textEl = document.getElementById("text");
// Holen des Elements mit der ID "text" aus dem HTML-Dokument und Speichern es in der Variable "textEl".
// Dieses Element wird verwendet, um den Text, der nach und nach angezeigt wird, auf der Webseite anzuzeigen.

const speedEl = document.getElementById("speed");
// Holen des Elements mit der ID "speed" aus dem HTML-Dokument und Speichern in der Variablen "speedEl".
// Obwohl hier "speedEl" erwähnt wird, handelt es sich um ein Input-Element,
// mit dem der Benutzer die Geschwindigkeit steuern kann, wie schnell der Text angezeigt werden soll.

const text = "We Love Programming, By Akin Kale";
// Speichern des anzuzeigenden Textes in der Variablen "text".
// Dieser Text wird später Zeichen für Zeichen auf der Seite angezeigt.

let idx = 1;
// Initialisieren einer Variablen "idx" mit dem Wert 1. Diese Variable gibt an, wie viele Zeichen des Textes
// aktuell angezeigt werden. Anfangs wird nur das erste Zeichen angezeigt.

let speed = 300 / speedEl.value;
// Berechnen der anfänglichen Geschwindigkeit für die Textanzeige basierend auf dem Wert des "speedEl"-Elements.
// Der Wert von "speedEl" bestimmt die Geschwindigkeit: Je höher der Wert, desto schneller wird der Text angezeigt.
// Die Berechnung teilt 300 durch den aktuellen Wert, um die Verzögerung zwischen den Zeichen zu bestimmen.

writeText();
// Starten der Funktion "writeText", die den Text Zeichen für Zeichen anzeigt.

function writeText() {
  textEl.innerText = text.slice(0, idx);
  // Diese Zeile zeigt eine Teilmenge des Textes an, die vom ersten Zeichen bis zum aktuellen Index "idx" reicht.
  // Zunächst wird nur das erste Zeichen angezeigt, dann das zweite, und so weiter.

  idx++;
  // Erhöht den Index "idx" um 1, sodass beim nächsten Aufruf der Funktion ein weiteres Zeichen angezeigt wird.

  if (idx > text.length) {
    idx = 1;
    // Wenn der Index "idx" größer als die Länge des Textes ist, bedeutet dies, dass der gesamte Text angezeigt wurde.
    // In diesem Fall wird der Index zurückgesetzt, sodass der Text von vorne beginnt.
  }

  setTimeout(writeText, speed);
  // Die Funktion "writeText" wird nach einer bestimmten Verzögerung (definiert durch die "speed"-Variable) erneut aufgerufen.
  // Dadurch entsteht der Effekt, dass der Text langsam und in einem bestimmten Rhythmus Zeichen für Zeichen angezeigt wird.
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);
// Fügt einen Event-Listener hinzu, der auf Änderungen im "speedEl"-Element reagiert.
// Jedes Mal, wenn der Benutzer den Wert des "speedEl"-Elements (z.B. durch Bewegen eines Sliders) ändert,
// wird die Geschwindigkeit der Textanzeige neu berechnet. Dies ermöglicht es dem Benutzer, die Geschwindigkeit
// der Textanzeige in Echtzeit anzupassen.