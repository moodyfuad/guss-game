// fetch the file contents
fetch('words.txt')
  .then(response => response.text())
  .then(text => {
    // split the text into an array
    const textArray = text.split(',');
    console.log(textArray);
  });