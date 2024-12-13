let languageCode = prompt("Choose the language code (es, de, fr): ");

function helloWorld(languageCode) {
  switch (languageCode) {
    case 'es':
      return "Hola, Mundo";
    case 'de':
      return "Hallo, Welt";
    case 'fr':
      return "Bonjour, Monde";
    default:
      return "Hello, World";
  }
}

alert(helloWorld(languageCode));

