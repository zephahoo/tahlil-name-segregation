function segregateNames() {
  const inputNames = document.getElementById("inputArea").value;
  const namesArray = inputNames.split(/\r?\n/); 
  let almarhumList = [];
  let almarhumahList = [];

  for (let name of namesArray) {
    let cleanedName = name.trim().replace(/[^\w\s\/]/gi, '').replace(/\s+/g, ' ');
    cleanedName = cleanedName.toLowerCase(); 

    // Use a single regex with all the patterns
    if (/\b(bin|s\/o)\b/.test(cleanedName)) {
      almarhumList.push(name);
    } else if (/\b(binti|d\/o|binte)\b/.test(cleanedName)) {
      almarhumahList.push(name);
    }
  }

  document.getElementById("almarhumOutput").innerText = almarhumList.join("\n");
  document.getElementById("almarhumahOutput").innerText = almarhumahList.join("\n");
}
