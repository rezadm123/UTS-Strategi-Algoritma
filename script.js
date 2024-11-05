function mulaiPengurutan() {
  let inputArray = document.getElementById("inputArray").value.split(",").map(Number);
  if (inputArray.some(isNaN)) {
    alert("Masukkan angka yang valid, dipisahkan dengan koma.");
    return;
  }
  document.getElementById("stepsContainer").innerHTML = "";
  document.getElementById("finalResult").innerHTML = "";

  selectionSort(inputArray);
}

function selectionSort(arr) {
  let n = arr.length;
  let langkah = 0;
  let perbandingan = 0;

  for (let i = 0; i < n - 1; i++) {
    let indeksTerkecil = i;

    for (let j = i + 1; j < n; j++) {
      perbandingan++;
      if (arr[j] < arr[indeksTerkecil]) {
        indeksTerkecil = j;
      }
    }

    if (indeksTerkecil !== i) {
      [arr[i], arr[indeksTerkecil]] = [arr[indeksTerkecil], arr[i]];
    }

    langkah++;
    tampilkanLangkah(`Langkah ${langkah}: ${arr.join(", ")}`);
  }

  tampilkanHasilAkhir(`Array terurut: ${arr.join(", ")}<br>Total perbandingan (T(n)): ${perbandingan}`);
}

function tampilkanLangkah(teksLangkah) {
  const stepElement = document.createElement("div");
  stepElement.className = "step";
  stepElement.innerHTML = teksLangkah;
  document.getElementById("stepsContainer").appendChild(stepElement);
}

function tampilkanHasilAkhir(teksHasil) {
  document.getElementById("finalResult").innerHTML = teksHasil;
}
