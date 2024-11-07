function segregateNames() {
  const inputNames = document.getElementById("inputArea").value;
  const namesArray = inputNames.split("\n");
  let almarhumList = [];
  let almarhumahList = [];

  for (let name of namesArray) {
    // Remove hidden characters and normalize spaces
    let cleanedName = name.trim().replace(/[^\w\s]/gi, '').replace(/\s+/g, ' '); 
    if (/\b(bin|S\/O)\b/i.test(cleanedName)) { // Added S/O to almarhumList condition
      almarhumList.push(name);
    } else if (/\b(binti|D\/O)\b/i.test(cleanedName)) { 
      almarhumahList.push(name);
    } 
    // Additional check for 'binte' (without removing the existing code)
    else if (/\bbinte\b/i.test(cleanedName)) {
      almarhumahList.push(name);
    }
  }

  document.getElementById("almarhumOutput").innerText = almarhumList.join("\n");
  document.getElementById("almarhumahOutput").innerText = almarhumahList.join("\n");
}
