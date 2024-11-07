function segregateNames() {
  const inputNames = document.getElementById("inputArea").value;
  const namesArray = inputNames.split("\n");
  let almarhumList = [];
  let almarhumahList = [];

  for (let name of namesArray) {
    // Remove hidden characters and normalize spaces
    let cleanedName = name.trim().replace(/[^\w\s]/gi, '').replace(/\s+/g, ' '); 
    if (/\bbin\b/i.test(cleanedName)) {
      almarhumList.push(name);
    } else if (/\bbinte\b/i.test(cleanedName)) {
      almarhumahList.push(name);
    }
  }

  document.getElementById("almarhumOutput").innerText = almarhumList.join("\n");
  document.getElementById("almarhumahOutput").innerText = almarhumahList.join("\n");
}