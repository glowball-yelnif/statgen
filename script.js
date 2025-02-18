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
// Array of card codes in new deck order.
const cardCodes = [
  "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "TC", "JC", "QC", "KC",
  "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "TD", "JD", "QD", "KD",
  "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "TH", "JH", "QH", "KH",
  "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "TS", "JS", "QS", "KS"
];

// Mapping objects for display names.
const rankMap = {
  'A': 'Ace',
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '5': 'Five',
  '6': 'Six',
  '7': 'Seven',
  '8': 'Eight',
  '9': 'Nine',
  'T': 'Ten',
  'J': 'Jack',
  'Q': 'Queen',
  'K': 'King'
};

const suitMap = {
  'C': 'Clubs',
  'D': 'Diamonds',
  'H': 'Hearts',
  'S': 'Spades'
};

// Helper function to convert a card code to its full name for display.
function getCardName(cardCode) {
  const rank = cardCode.charAt(0);
  const suit = cardCode.charAt(1);
  return `${rankMap[rank]} of ${suitMap[suit]}`;
}

// Helper function to convert a card code to its corresponding image filename.
function getImageFilename(cardCode) {
  const rank = cardCode.charAt(0);
  const suit = cardCode.charAt(1);
  let rankFilename = '';
  if (rank === 'A') rankFilename = 'ace';
  else if (rank === 'T') rankFilename = '10';
  else if (rank === 'J') rankFilename = 'jack';
  else if (rank === 'Q') rankFilename = 'queen';
  else if (rank === 'K') rankFilename = 'king';
  else rankFilename = rank; // For '2' through '9'
  
  let suitFilename = '';
  if (suit === 'C') suitFilename = 'clubs';
  else if (suit === 'D') suitFilename = 'diamonds';
  else if (suit === 'H') suitFilename = 'hearts';
  else if (suit === 'S') suitFilename = 'spades';
  
  return `${rankFilename}_of_${suitFilename}.png`;
}

// Populate Modal 2 with card images from the "./images" folder.
const cardsContainer = document.getElementById("cardsContainer");

for (let i = 0; i < cardCodes.length; i++) {
  const cardCode = cardCodes[i];
  const cardName = getCardName(cardCode);
  const filename = getImageFilename(cardCode);
  
  // Create a column container for the card.
  const col = document.createElement("div");
  col.className = "col-3 mb-3";
  
  // Create the image element.
  const img = document.createElement("img");
  img.src = `./images/${filename}`;
  img.alt = cardName;
  img.className = "img-fluid card-img";
  
  // Store the card code and name as data attributes.
  img.dataset.cardCode = cardCode;
  img.dataset.cardName = cardName;
  
  // When a card is clicked, update the display and close Modal 2.
  img.addEventListener("click", function () {
    // Remove the 'card-selected' class from any previously selected card.
    document.querySelectorAll(".card-selected").forEach(card => {
      card.classList.remove("card-selected");
    });
    
    // Highlight the clicked card.
    img.classList.add("card-selected");
    
    // Update the display with the full card name.
    document.getElementById("selectedCardValueDisplay").textContent =
      "Card: " + cardName;
    
    // Close Modal 2.
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
