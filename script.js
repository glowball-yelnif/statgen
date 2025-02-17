// script.js
document.addEventListener("DOMContentLoaded", function () {
  let selectedDropdownValue = null;
  let selectedCardValue = null;

  // Populate the dropdown with options 1 through 52.
  const cardNumberSelect = document.getElementById("cardNumberSelect");
  for (let i = 1; i <= 52; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    cardNumberSelect.appendChild(option);
  }

  // When a number is selected, save the value and close Modal 1 immediately.
  cardNumberSelect.addEventListener("change", function () {
    if (cardNumberSelect.value !== "") {
      selectedDropdownValue = cardNumberSelect.value;
      document.getElementById("selectedDropdownDisplay").textContent =
        "Dropdown selection: " + selectedDropdownValue;
      // Close Modal 1.
      const dropdownModalEl = document.getElementById("dropdownModal");
      let modalInstance = bootstrap.Modal.getInstance(dropdownModalEl);
      if (!modalInstance) {
        modalInstance = new bootstrap.Modal(dropdownModalEl);
      }
      modalInstance.hide();
    }
  });

  // Populate Modal 2 with 52 card images.
  const cardsContainer = document.getElementById("cardsContainer");
  for (let i = 1; i <= 52; i++) {
    const cardValue = ((i - 1) % 13) + 1;
    const col = document.createElement("div");
    col.className = "col-3 mb-3";
    const img = document.createElement("img");
    img.src = `https://via.placeholder.com/100x150?text=Card+${i}`;
    img.alt = `Card ${i} (Value: ${cardValue})`;
    img.className = "img-fluid card-img";
    img.dataset.value = cardValue;
    
    // When a card is clicked, save its value, highlight it, update the display, and close Modal 2.
    img.addEventListener("click", function () {
      document.querySelectorAll(".card-selected").forEach(card =>
        card.classList.remove("card-selected")
      );
      img.classList.add("card-selected");
      selectedCardValue = parseInt(img.dataset.value, 10);
      document.getElementById("selectedCardValueDisplay").textContent =
        "Card selection value: " + selectedCardValue;
      const cardsModalEl = document.getElementById("cardsModal");
      let modalInstance = bootstrap.Modal.getInstance(cardsModalEl);
      if (!modalInstance) {
        modalInstance = new bootstrap.Modal(cardsModalEl);
      }
      modalInstance.hide();
    });
    
    col.appendChild(img);
    cardsContainer.appendChild(col);
  }

  // Calculation button multiplies the dropdown selection by the card value.
  const calcButton = document.getElementById("calcButton");
  calcButton.addEventListener("click", function () {
    if (!selectedDropdownValue) {
      alert("Please select a number using the first button.");
      return;
    }
    if (selectedCardValue === null) {
      alert("Please select a card from the second modal.");
      return;
    }
    const result = selectedDropdownValue * selectedCardValue;
    alert(`Calculation result: ${selectedDropdownValue} x ${selectedCardValue} = ${result}`);
  });
});
