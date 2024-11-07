function segregateNames() {
  const inputNames = document.getElementById("inputArea").value;
  const namesArray = inputNames.split(/\r?\n/); 
  let almarhumList = [];
  let almarhumahList = [];

  for (let i = 0; i < namesArray.length; i++) { 
    let name = namesArray[i];

    let cleanedName = name.trim().replace(/^[0-9\.\s]+/, '').replace(/[^\w\s\/]/gi, '').replace(/\s+/g, ' ');
    cleanedName = cleanedName.toLowerCase(); 

    if (/\b(bin|s\/o)\b/.test(cleanedName)) {
      almarhumList.push((almarhumList.length + 1) + ". " + cleanedName); 
    } else if (/\b(binti|d\/o|binte|bte)\b/.test(cleanedName)) {
      almarhumahList.push((almarhumahList.length + 1) + ". " + cleanedName); 
    }
  }

  document.getElementById("almarhumOutput").innerText = almarhumList.join("\n");
  document.getElementById("almarhumahOutput").innerText = almarhumahList.join("\n");

  document.getElementById("outputArea").style.display = "block"; 
}
