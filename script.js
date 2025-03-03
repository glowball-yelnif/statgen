
        // Card naming convention mapping
        const suitMap = {
            'S': 'spades',
            'H': 'hearts',
            'D': 'diamonds',
            'C': 'clubs'
        };
        
        const valueMap = {
            'A': 'ace',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            'T': '10',
            'J': 'jack',
            'Q': 'queen',
            'K': 'king'
        };
        
        // The stacks from your original code
        const masterArrays = {
            'A': ["JS", "KC", "5C", "2H", "9S", "AS", "3H", "6C", "8D", "AC", "TS", "5H", "2D", "KD", "7D", "8C", "3S", "AD", "7S", "5S", "QD", "AH", "8S", "3D", "7H", "QH", "5D", "7C", "4H", "KH", "4D", "TD", "JC", "JH", "TC", "JD", "4S", "TH", "6H", "3C", "2S", "9H", "KS", "6S", "4C", "8H", "9C", "QS", "6D", "QC", "2C", "9D"],
            'M': ["4C", "2H", "7D", "3C", "4H", "6D", "AS", "5H", "9S", "2S", "QH", "3D", "QC", "8H", "6S", "5S", "9H", "KC", "2D", "JH", "3S", "8S", "6H", "TC", "5D", "KD", "2C", "3H", "8D", "5C", "KS", "JD", "8C", "TS", "KH", "JC", "6S", "TH", "AD", "4S", "7H", "4D", "AC", "9C", "JS", "QD", "7C", "QS", "TD", "6C", "AH", "9D"],
            'W': ["6H", "AS", "8S", "9S", "KC", "JD", "5D", "AH", "3H", "9H", "3C", "7S", "7H", "2S", "QS", "2H", "QH", "6D", "2C", "KD", "4D", "4H", "JH", "6C", "4C", "TC", "4S", "JS", "2D", "3S", "9D", "7D", "AD", "JC", "8C", "5S", "AC", "QC", "QD", "5H", "7C", "TH", "9C", "TD", "8D", "3D", "8H", "5C", "6S", "KH", "TS", "KS"],
            'R': ["QH", "2S", "5D", "8C", "JH", "KS", "TH", "7C", "4D", "AS", "8H", "5C", "2D", "QS", "9H", "6C", "3D", "TS", "7H", "4C", "AD", "JS", "9S", "6H", "3C", "KD", "QD", "TD", "7S", "4H", "AC", "JD", "8S", "5H", "2C", "2H", "QC", "9D", "6S", "3H", "KC", "4S", "AH", "JC", "8D", "5S", "3S", "KH", "TC", "7D", "6D", "9C"],
            'S': ["8S", "JD", "AC", "4H", "7S", "TD", "KC", "3H", "6S", "9D", "QC", "2H", "5S", "8D", "JC", "AH", "4S", "7D", "TC", "KH", "3S", "6D", "9C", "QH", "2S", "5D", "8C", "JH", "AS", "4D", "7C", "TH", "KS", "3D", "6C", "9H", "QS", "2D", "5C", "8H", "JS", "AD", "4C", "7H", "TS", "KD", "3C", "6H", "9S", "QD", "2C", "5H"],
            'K': ["JS", "KC", "5C", "2H", "9S", "AS", "3H", "6C", "8D", "AC", "TS", "5H", "2D", "KD", "7D", "8C", "3S", "AD", "7S", "5S", "QD", "AH", "8S", "3D", "7H", "QH", "5D", "7C", "4H", "KH", "4D", "TD", "JC", "JH", "TC", "JD", "4S", "TH", "6H", "3C", "2S", "9H", "KS", "6S", "4C", "8H", "9C", "QS", "6D", "QC", "2C", "9D"],
            'T': ["4C", "5H", "2D", "AS", "QH", "5C", "8D", "TD", "3S", "KC", "JD", "3C", "TS", "9H", "5S", "QD", "6C", "3D", "7S", "4S", "6D", "JH", "4H", "9C", "JC", "4D", "6H", "6S", "JS", "7C", "2H", "KS", "8C", "2C", "AH", "TH", "QS", "7H", "9D", "KH", "QC", "8H", "AC", "8S", "TC", "2S", "AD", "9S", "5D", "KD", "3H", "7D"]
        };
        
        // Global variables for calculations
        const defHitIndicator = "N";
        const defFaceUp = "N";
        const defPlus1Hit = "N";
        const defBreatherCut = "9";
        const defBottomPosition = "88";
        const defBottomCard = "ZZ";

        let retHitIndicator;
        let retFaceUp;
        let retPlus1Hit;
        let retBreatherCut;
        let retBottomPosition;
        let retBottomCard;
        
        let tempDiff;
        let tempBottomPosition;
        let actualPosition; 
        let reverseActualPosition;
        
        let selectedCard = null;
        let selectedPosition = null;
        
        // Initialize the card grid
        function initCardGrid() {
            const cardGrid = document.getElementById('cardGrid');
            cardGrid.innerHTML = '';
            
            const suits = ['S', 'H', 'D', 'C'];
            const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
            
            suits.forEach(suit => {
                values.forEach(value => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.dataset.card = value + suit;
                    
                    const img = document.createElement('img');
                    // Convert to filename format
                    const fileName = `${valueMap[value]}_of_${suitMap[suit]}.png`;
                    img.src = `images/${fileName}`;
                    img.alt = `${valueMap[value]} of ${suitMap[suit]}`;
                    
                    card.appendChild(img);
                    card.addEventListener('click', () => selectCard(card));
                    
                    cardGrid.appendChild(card);
                });
            });
        }
        
        // Initialize the position grid
        function initPositionGrid() {
            const positionGrid = document.getElementById('positionGrid');
            positionGrid.innerHTML = '';
            
            for (let i = 1; i <= 52; i++) {
                const posBtn = document.createElement('div');
                posBtn.className = 'position-btn';
                posBtn.textContent = i;
                posBtn.dataset.position = i;
                posBtn.addEventListener('click', () => selectPosition(posBtn));
                
                positionGrid.appendChild(posBtn);
            }
        }
        
        // Open card modal
        function openCardModal() {
            initCardGrid();
            document.getElementById('cardModal').style.display = 'block';
            
            // If there's a previously selected card, highlight it
            if (selectedCard) {
                const cards = document.querySelectorAll('.card');
                cards.forEach(card => {
                    if (card.dataset.card === selectedCard) {
                        card.classList.add('selected');
                    }
                });
            }
        }
        
        // Close card modal
        function closeCardModal() {
            document.getElementById('cardModal').style.display = 'none';
        }
        
        // Open position modal
        function openPositionModal() {
            initPositionGrid();
            document.getElementById('positionModal').style.display = 'block';
            
            // If there's a previously selected position, highlight it
            if (selectedPosition) {
                const positions = document.querySelectorAll('.position-btn');
                positions.forEach(pos => {
                    if (pos.dataset.position === selectedPosition) {
                        pos.classList.add('selected');
                    }
                });
            }
        }
        
        // Close position modal
        function closePositionModal() {
            document.getElementById('positionModal').style.display = 'none';
        }
        
        // Select a card
        function selectCard(cardElement) {
            // Remove selected class from all cards
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => card.classList.remove('selected'));
            
            // Add selected class to clicked card
            cardElement.classList.add('selected');
            selectedCard = cardElement.dataset.card;
        }
        
        // Select a position
        function selectPosition(posElement) {
            // Remove selected class from all positions
            const positions = document.querySelectorAll('.position-btn');
            positions.forEach(pos => pos.classList.remove('selected'));
            
            // Add selected class to clicked position
            posElement.classList.add('selected');
            selectedPosition = posElement.dataset.position;
        }
        
        // Confirm card selection
        function confirmCardSelection() {
            if (selectedCard) {
                document.getElementById('guessedCard').value = selectedCard;
                document.getElementById('cardDisplay').textContent = `Selected Card: ${selectedCard}`;
                closeCardModal();
            } else {
                alert('Please select a card');
            }
        }
        
        // Confirm position selection
        function confirmPositionSelection() {
            if (selectedPosition) {
                document.getElementById('guessedPosition').value = selectedPosition;
                document.getElementById('positionDisplay').textContent = `Selected Position: ${selectedPosition}`;
                closePositionModal();
            } else {
                alert('Please select a position');
            }
        }
        
        // All the calculation functions from your original code
        function setInitialDefaults() {
            retHitIndicator = defHitIndicator;
            retFaceUp = defFaceUp;
            retPlus1Hit = defPlus1Hit;
            retBreatherCut = defBreatherCut;
            retBottomPosition = defBottomPosition;
            retBottomCard = defBottomCard;
        }

        function matchCardPosition(workArray, guessedCard) {
            actualPosition = workArray.indexOf(guessedCard) + 1; // 1-based
            reverseActualPosition = 53 - actualPosition;
        }

        function determineBottomCard(workArray, guessedPosition, actualPosition) {
            if (guessedPosition > actualPosition) {
                tempDiff = guessedPosition - actualPosition;
                tempBottomPosition = 52 - tempDiff;
            } else {
                tempDiff = actualPosition - guessedPosition;
                tempBottomPosition = tempDiff;
            }
            retBottomCard = workArray[tempBottomPosition - 1]; // Zero-based
            retBottomPosition = tempBottomPosition.toString().padStart(2, '0'); // Two digits
        }

        function detailSubroutine(workArray, guessedCard, guessedPosition, retBreatherCut) {
            retHitIndicator = defHitIndicator;
            retFaceUp = defFaceUp;
            retPlus1Hit = defPlus1Hit;

            matchCardPosition(workArray, guessedCard);

            if (guessedPosition === actualPosition || guessedPosition === actualPosition - 1) {
                retHitIndicator = "Y";
                retFaceUp = "N";
            }
            if (guessedPosition === reverseActualPosition || guessedPosition === reverseActualPosition - 1) {
                retHitIndicator = "Y";
                retFaceUp = "Y";
            }
            if (guessedPosition === actualPosition - 1 || guessedPosition === reverseActualPosition - 1) {
                retPlus1Hit = "Y";
            }

            if (retBreatherCut === "0") {
                determineBottomCard(workArray, guessedPosition, actualPosition);
            }
        }

        function intermediateSubroutine(workArray, guessedCard, guessedPosition) {
            let currentArray = [...workArray]; // Copy to avoid modifying original

            retBreatherCut = 0;
            // First call, pristine array
            detailSubroutine(currentArray, guessedCard, guessedPosition, "0");

            if (retHitIndicator === "N") {
                // Shift by 13 and call three more times
                for (let i = 1; i <= 3; i++) {
                    retBreatherCut = i;
                    currentArray = currentArray.slice(13).concat(currentArray.slice(0, 13));
                    detailSubroutine(currentArray, guessedCard, guessedPosition, i.toString());
                    if (retHitIndicator === "Y") {
                        i = 9; // Exit the loop early
                    }
                }
            }
        }
        
        // Main form submission handler
        document.getElementById("calcForm").addEventListener("submit", function(e) {
            e.preventDefault();
            const stackType = document.getElementById("stackType").value;
            const guessedCard = document.getElementById("guessedCard").value.toUpperCase();
            const guessedPosition = parseInt(document.getElementById("guessedPosition").value);

            if (!masterArrays[stackType] || !guessedCard || isNaN(guessedPosition) || guessedPosition < 1 || guessedPosition > 52) {
                document.getElementById("result").innerHTML = "Invalid input. Please check stack type, card format (e.g., 9S), and position (1-52).";
                return;
            }

            const workArray = masterArrays[stackType];
            
            // Set defaults and run calculations
            setInitialDefaults();
            intermediateSubroutine(workArray, guessedCard, guessedPosition);
            
            // Format results
            let Bogus1 = "6"; // Default for miss
            let Bogus2 = "1";
            let Bogus3 = "7";
            let Bogus4 = "7";
            let Bogus5 = "??";

            Bogus5 = retBottomCard; // bottom card to make it work
            
            // Check for hits
            if (retHitIndicator === "Y") {
                Bogus1 = "0"; // Hit
                Bogus2 = retFaceUp === "Y" ? "3" : "0";
                Bogus3 = retBreatherCut;
                Bogus4 = retPlus1Hit === "Y" ? "2" : "0";
            } else {
                // No hit, use first result's bottom position
                Bogus2 = "0";
                Bogus3 = retBottomPosition[0]; // First digit
                Bogus4 = retBottomPosition[1]; // Second digit
            }
            
            const fudgePct = `${Bogus1}.${Bogus2}${Bogus3}${Bogus4}--${Bogus5}`;
            document.getElementById("result").innerHTML = `Fudge Percentage: ${fudgePct}`;
        });
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Close modals when clicking outside
            window.onclick = function(event) {
                if (event.target.className === 'modal') {
                    closeCardModal();
                    closePositionModal();
                }
            };
            
            // Make sure the hidden fields are properly set
            if (selectedCard) {
                document.getElementById('guessedCard').value = selectedCard;
                document.getElementById('cardDisplay').textContent = `Selected Card: ${selectedCard}`;
            }
            
            if (selectedPosition) {
                document.getElementById('guessedPosition').value = selectedPosition;
                document.getElementById('positionDisplay').textContent = `Selected Position: ${selectedPosition}`;
            }
        });
  