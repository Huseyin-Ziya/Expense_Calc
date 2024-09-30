var form = document.querySelector("#expense-form");

var harcamaInput = document.querySelector("#expense-name");

var fiyatInput = document.querySelector("#expense-amount");

var harcamaKapsayıcısı = document.querySelector("#expense");

function harcamaEkle(e) {
    e.preventDefault();
    if(harcamaInput.value === "" || fiyatInput.value === "" ){
        alert("İnputları Doldurunuz!")
        return;
    }
    var harcamaAdı = harcamaInput.value;

    var harcamaFiyat = fiyatInput.value;

    var harcamaDiv = document.createElement("div");

    harcamaDiv.classList.add("harcama");

    harcamaDiv.innerHTML= `
    <h2>
    ${harcamaAdı} </h2>
    <h3> ${harcamaFiyat} TL</h3>
    <img id="delete-btn" src="images/trash.png" alt="trash-img" />
    `;

    harcamaKapsayıcısı.appendChild(harcamaDiv);

    harcamaInput.value = "";
    fiyatInput.value ="";
}
form.addEventListener("submit", harcamaEkle);

    function elemanSil(e) {
        var element = e.target;
        if (element.id === "delete-btn") {
          element.parentElement.remove();
        }
}
harcamaKapsayıcısı.addEventListener("click", elemanSil);
