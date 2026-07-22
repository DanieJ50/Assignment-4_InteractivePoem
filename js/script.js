"use strict";

const categories = {
  breakfast: { label: "Breakfast", emoji: "🥞" },
  bakery: { label: "Bakery", emoji: "🍩" },
  chocolate: { label: "Chocolate", emoji: "🍫" },
  drinks: { label: "Drinks", emoji: "☕" },
  savory: { label: "Savory", emoji: "🌯" },
  chilled: { label: "Chilled", emoji: "🍨" }
};

const moodLabels = {
  cozy: "Cozy Dream",
  playful: "Playful Game",
  bold: "Bold Designer"
};

const allRecipes = [
  {
    "name": "Fluffy CCD Pancakes",
    "category": "breakfast",
    "flavor": "Cloud-soft, warm, and softly sweet."
  },
  {
    "name": "Cinnamony Cinnamon Maple Buttermilk Pancakes",
    "category": "breakfast",
    "flavor": "Diner-style fluff with cinnamon-maple comfort."
  },
  {
    "name": "Pumpkin Flaxseed Cinnamon Pancakes",
    "category": "breakfast",
    "flavor": "Tender, spiced, and gently nutty without nuts."
  },
  {
    "name": "Kefir Pancakes",
    "category": "breakfast",
    "flavor": "Tangy buttermilk-style lift and a pillowy center."
  },
  {
    "name": "Cottage Cheese Pancakes",
    "category": "breakfast",
    "flavor": "Creamy, structured, and extra tender."
  },
  {
    "name": "McDonald's-Style CCD Hotcakes",
    "category": "breakfast",
    "flavor": "Soft golden stacks with nostalgic sweetness."
  },
  {
    "name": "Cinnamon Greek Yogurt French Toast",
    "category": "breakfast",
    "flavor": "Custardy inside with cinnamon warmth."
  },
  {
    "name": "Pumpkin Cinnamon French Toast",
    "category": "breakfast",
    "flavor": "Autumn-spiced, soft, and golden-edged."
  },
  {
    "name": "Pancake Bake",
    "category": "breakfast",
    "flavor": "A sliceable pancake with a tender baked crumb."
  },
  {
    "name": "French Toast Bake",
    "category": "breakfast",
    "flavor": "Cozy casserole energy in a compact bake."
  },
  {
    "name": "Chocolate Chip Breakfast Cake",
    "category": "breakfast",
    "flavor": "Breakfast-soft with little melted chocolate pockets."
  },
  {
    "name": "Maple Vanilla Baked Oats",
    "category": "breakfast",
    "flavor": "Cake-like baked oats with maple-vanilla warmth."
  },
  {
    "name": "Mocha Breakfast Loaf",
    "category": "breakfast",
    "flavor": "Coffee-cocoa aroma with a soft loaf texture."
  },
  {
    "name": "Clear-Glaze Microwave Donuts",
    "category": "bakery",
    "flavor": "Fluffy quick donuts under a glossy sweet glaze."
  },
  {
    "name": "Glazed Vanilla Donuts",
    "category": "bakery",
    "flavor": "Classic vanilla bakery sweetness, soft and bright."
  },
  {
    "name": "Chocolate Glaze Donuts",
    "category": "bakery",
    "flavor": "Tender donuts with a smooth cocoa finish."
  },
  {
    "name": "Cinnamon Sugar Donut Holes",
    "category": "bakery",
    "flavor": "Warm, sparkly, bite-sized cinnamon clouds."
  },
  {
    "name": "Sour Cream Flaxseed Cinnamon Rolls",
    "category": "bakery",
    "flavor": "Tangy-soft spirals with a cinnamon center."
  },
  {
    "name": "Kefir Cinnamon Rolls",
    "category": "bakery",
    "flavor": "Pillowy rolls with gentle cultured tang."
  },
  {
    "name": "Microwave Cinnamon Rolls",
    "category": "bakery",
    "flavor": "Fast, fluffy spirals made for immediate joy."
  },
  {
    "name": "Cinnamon Roll Bowl Cake",
    "category": "bakery",
    "flavor": "Swirled cinnamon-roll flavor in spoonable cake form."
  },
  {
    "name": "Pumpkin Spice Muffins",
    "category": "bakery",
    "flavor": "Moist domes with cozy pumpkin spice."
  },
  {
    "name": "Mocha Crumb Muffins",
    "category": "bakery",
    "flavor": "Coffee-shop cocoa flavor with crumbly tops."
  },
  {
    "name": "Chocolate Marble Muffins",
    "category": "bakery",
    "flavor": "Vanilla and chocolate ribbons in every bite."
  },
  {
    "name": "Cinnamon Swirl Oat-Flour Mug Cake",
    "category": "bakery",
    "flavor": "Warm cinnamon ribbons and a soft mug-cake crumb."
  },
  {
    "name": "Fudgy CCD Brownies",
    "category": "chocolate",
    "flavor": "Dense, chocolatey, and softly gooey."
  },
  {
    "name": "Spinach Brownies",
    "category": "chocolate",
    "flavor": "Deep cocoa hides a smooth green secret."
  },
  {
    "name": "Oreo Powder Brownies",
    "category": "chocolate",
    "flavor": "Cookies-and-cream cocoa richness."
  },
  {
    "name": "Lava Brownie Cake",
    "category": "chocolate",
    "flavor": "A molten center inside a soft chocolate shell."
  },
  {
    "name": "Brownie Batter Cake",
    "category": "chocolate",
    "flavor": "Thick batter-like softness with baked edges."
  },
  {
    "name": "Double Chocolate Cake",
    "category": "chocolate",
    "flavor": "Cocoa crumb plus melted chocolate drama."
  },
  {
    "name": "Chocolate Mug Cake",
    "category": "chocolate",
    "flavor": "Fast, warm, fluffy chocolate comfort."
  },
  {
    "name": "Classic Chocolate Chip Cookies",
    "category": "chocolate",
    "flavor": "Soft centers, cozy vanilla, and chocolate pockets."
  },
  {
    "name": "Double Chocolate Cookies",
    "category": "chocolate",
    "flavor": "Brownie-cookie energy with extra cocoa."
  },
  {
    "name": "Brookie Bars",
    "category": "chocolate",
    "flavor": "Cookie meets brownie in one chewy square."
  },
  {
    "name": "Oreo Crumble Bars",
    "category": "chocolate",
    "flavor": "Creamy cookie crumble over a soft base."
  },
  {
    "name": "CCD Cake Pop Bites",
    "category": "chocolate",
    "flavor": "Tiny frosted cake bites with party energy."
  },
  {
    "name": "Hot Mocha Coffee",
    "category": "drinks",
    "flavor": "Cocoa, coffee, cinnamon, and mellow milkiness."
  },
  {
    "name": "Chili Mocha Latte",
    "category": "drinks",
    "flavor": "Chocolate-coffee warmth with a tiny spicy glow."
  },
  {
    "name": "Cinnamon Roll Latte",
    "category": "drinks",
    "flavor": "Vanilla-cinnamon steam with bakery-shop vibes."
  },
  {
    "name": "Cookies and Cream Coffee",
    "category": "drinks",
    "flavor": "Coffee with a playful cookies-and-cream finish."
  },
  {
    "name": "Café Mocha Shake",
    "category": "drinks",
    "flavor": "Cold, thick, chocolate-coffee café energy."
  },
  {
    "name": "Chocolate Milkshake",
    "category": "drinks",
    "flavor": "Creamy, frosty, and straightforwardly chocolate."
  },
  {
    "name": "Vanilla Latte",
    "category": "drinks",
    "flavor": "Soft vanilla, gentle coffee, and cozy foam."
  },
  {
    "name": "Hot Lemon Turmeric Chili Cinnamon Tea",
    "category": "drinks",
    "flavor": "Bright lemon, warm spice, and a lively finish."
  },
  {
    "name": "Avocado Toast",
    "category": "savory",
    "flavor": "Creamy, lemony, and lightly savory."
  },
  {
    "name": "Egg and Avocado Bagel Sandwich",
    "category": "savory",
    "flavor": "Warm egg, creamy avocado, and chewy bagel comfort."
  },
  {
    "name": "Spinach Egg Toast",
    "category": "savory",
    "flavor": "Garlicky greens and soft egg on crisp toast."
  },
  {
    "name": "Mozzarella Breakfast Quesadilla",
    "category": "savory",
    "flavor": "Melty cheese, crisp tortilla, cozy breakfast center."
  },
  {
    "name": "Pizza Eggs",
    "category": "savory",
    "flavor": "Saucy, cheesy, and playful breakfast pizza flavor."
  },
  {
    "name": "Chicken Burrito",
    "category": "savory",
    "flavor": "Warm seasoned chicken wrapped into a hearty pocket."
  },
  {
    "name": "Arrabbiata Chicken Tortilla Melt",
    "category": "savory",
    "flavor": "Tomato-chili warmth with melty cheese and chicken."
  },
  {
    "name": "Protein Pizza Tortilla",
    "category": "savory",
    "flavor": "Crisp edges, melty center, personal-pizza energy."
  },
  {
    "name": "Mini Tortilla Pizza",
    "category": "savory",
    "flavor": "Crunchy, cheesy, and perfectly snack-sized."
  },
  {
    "name": "BBQ Flatbread Pizza",
    "category": "savory",
    "flavor": "Sweet-smoky sauce, chicken, and crisp flatbread."
  },
  {
    "name": "Spinach Chicken Wrap",
    "category": "savory",
    "flavor": "Fresh greens and savory chicken in a soft wrap."
  },
  {
    "name": "Greek Chicken Bowl",
    "category": "savory",
    "flavor": "Herby, creamy, bright, and filling."
  },
  {
    "name": "Arroz con Pollo",
    "category": "savory",
    "flavor": "Savory seasoned rice and tender chicken comfort."
  },
  {
    "name": "Fried Rice with Chicken",
    "category": "savory",
    "flavor": "Toasty rice, savory chicken, and skillet warmth."
  },
  {
    "name": "BBQ Chicken Drumsticks",
    "category": "savory",
    "flavor": "Sticky-sweet, smoky, and deeply savory."
  },
  {
    "name": "Garlic Toasted Tortilla Chips",
    "category": "savory",
    "flavor": "Crisp, garlicky, and built for dipping."
  },
  {
    "name": "Spinach Yogurt Dip",
    "category": "savory",
    "flavor": "Cool, creamy, green, and lightly tangy."
  },
  {
    "name": "CCD Yogurt Ice-Cream Bowl",
    "category": "chilled",
    "flavor": "Cold, thick, creamy, and dessert-shop cozy."
  },
  {
    "name": "Oreo Frozen Yogurt Bowl",
    "category": "chilled",
    "flavor": "Creamy tang with crunchy cookie pieces."
  },
  {
    "name": "Chocolate Pudding Bowl",
    "category": "chilled",
    "flavor": "Silky, thick, and deeply cocoa-rich."
  },
  {
    "name": "Cookies and Cream Yogurt Whip",
    "category": "chilled",
    "flavor": "Airy creaminess with cookie speckles."
  },
  {
    "name": "Avocado Chocolate Mousse",
    "category": "chilled",
    "flavor": "Ultra-smooth, rich, and chocolate-forward."
  },
  {
    "name": "Mocha Cream Cup",
    "category": "chilled",
    "flavor": "Cold coffee-cocoa cream with a soft finish."
  },
  {
    "name": "Chocolate Soft-Serve Bowl",
    "category": "chilled",
    "flavor": "Frosty, whipped, and chocolate-swirled."
  },
  {
    "name": "Cinnamon Toast Yogurt Fluff",
    "category": "chilled",
    "flavor": "Thick vanilla-cinnamon cream with toast vibes."
  },
  {
    "name": "Vanilla Cheesecake Cup",
    "category": "chilled",
    "flavor": "Tangy vanilla cream with cheesecake energy."
  },
  {
    "name": "Frozen Chocolate Shell Yogurt Bowl",
    "category": "chilled",
    "flavor": "Creamy yogurt beneath a crackly chocolate shell."
  }
];

const signatureNames = [
  "Cinnamony Cinnamon Maple Buttermilk Pancakes",
  "Microwave Cinnamon Rolls",
  "Clear-Glaze Microwave Donuts",
  "Cinnamon Greek Yogurt French Toast",
  "Chili Mocha Latte",
  "Brownie Batter Cake",
  "Oreo Frozen Yogurt Bowl",
  "Egg and Avocado Bagel Sandwich",
  "Mini Tortilla Pizza",
  "Spinach Chicken Wrap",
  "Avocado Chocolate Mousse",
  "CCD Cake Pop Bites"
];

const builderPanel = document.querySelector("#builder-panel");
const gameArea = document.querySelector("#game-area");

const selectionCount = document.querySelector("#selection-count");
const selectedRecipesList = document.querySelector("#selected-recipes");
const recipePickerGrid = document.querySelector("#recipe-picker-grid");
const pickerSearch = document.querySelector("#picker-search");
const pickerFilters = document.querySelector("#picker-filters");
const poemMoodSelect = document.querySelector("#poem-mood");
const buildQuiltButton = document.querySelector("#build-quilt-button");
const builderMessage = document.querySelector("#builder-message");

const tileTray = document.querySelector("#tile-tray");
const quiltBoard = document.querySelector("#quilt-board");
const poemList = document.querySelector("#poem-lines");
const scoreNumber = document.querySelector("#score-number");
const progressFill = document.querySelector("#progress-fill");
const statusMessage = document.querySelector("#status-message");
const currentMoodTitle = document.querySelector("#current-mood-title");

const customizeButton = document.querySelector("#customize-button");
const restartButton = document.querySelector("#restart-button");
const editPoemButton = document.querySelector("#edit-poem-button");
const celebrationButton = document.querySelector("#celebration-button");
const victoryScreen = document.querySelector("#victory-screen");

const poemEditor = document.querySelector("#poem-editor");
const poemEditorFields = document.querySelector("#poem-editor-fields");

let selectedRecipes = [];
let activePickerFilter = "all";
let currentMood = "cozy";
let currentPuzzle = [];
let solvedIds = new Set();
let selectedTile = null;

let pointerTile = null;
let pointerId = null;
let pointerStartX = 0;
let pointerStartY = 0;
let dragGhost = null;
let didDrag = false;

victoryScreen.hidden = true;
gameArea.hidden = true;
restartButton.hidden = true;
editPoemButton.hidden = true;

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function lowerFirst(value) {
  if (!value) return "";
  return value.charAt(0).toLowerCase() + value.slice(1);
}

function flavorFragment(recipe) {
  return lowerFirst(recipe.flavor.replace(/[.!?]+$/, ""));
}

function generatePoemLine(recipe, mood) {
  const name = recipe.name;
  const flavor = flavorFragment(recipe);

  const templates = {
    cozy: {
      breakfast: `${name} opens the morning—${flavor}.`,
      bakery: `${name} curls through the room—${flavor}.`,
      chocolate: `${name} keeps a dark little center—${flavor}.`,
      drinks: `${name} pours warmth across the page—${flavor}.`,
      savory: `${name} folds the afternoon together—${flavor}.`,
      chilled: `${name} cools the noise into a softer moment—${flavor}.`
    },
    playful: {
      breakfast: `${name} wins the breakfast round with ${flavor}.`,
      bakery: `${name} spins through the board—${flavor}.`,
      chocolate: `${name} unlocks a cocoa power-up—${flavor}.`,
      drinks: `${name} casts a sip-sized spell—${flavor}.`,
      savory: `${name} builds a delicious little fortress—${flavor}.`,
      chilled: `${name} freezes the chaos into a bonus round—${flavor}.`
    },
    bold: {
      breakfast: `${name} teaches the morning to take up space—${flavor}.`,
      bakery: `${name} turns softness into a visible choice—${flavor}.`,
      chocolate: `${name} refuses to make comfort quiet—${flavor}.`,
      drinks: `${name} wakes the page and changes its color—${flavor}.`,
      savory: `${name} proves ordinary food can still feel designed—${flavor}.`,
      chilled: `${name} slows the noise without shrinking joy—${flavor}.`
    }
  };

  return templates[mood][recipe.category];
}

function createPuzzlePiece(recipe, index) {
  return {
    id: `${slugify(recipe.name)}-${index}`,
    recipe: recipe.name,
    category: recipe.category,
    emoji: categories[recipe.category].emoji,
    flavor: recipe.flavor,
    clue: `Which recipe promises: ${recipe.flavor}`,
    line: generatePoemLine(recipe, currentMood)
  };
}

function setBuilderMessage(message) {
  builderMessage.textContent = message;
}

function setStatus(message) {
  statusMessage.textContent = message;
}

function renderPickerFilters() {
  pickerFilters.innerHTML = "";

  const filters = [
    { key: "all", label: "All recipes", emoji: "🍓" },
    ...Object.entries(categories).map(([key, value]) => ({
      key,
      label: value.label,
      emoji: value.emoji
    }))
  ];

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.classList.toggle("active", activePickerFilter === filter.key);
    button.textContent = `${filter.emoji} ${filter.label}`;

    button.addEventListener("click", () => {
      activePickerFilter = filter.key;
      renderPickerFilters();
      renderRecipePicker();
    });

    pickerFilters.appendChild(button);
  });
}

function getSelectionIndex(recipeName) {
  return selectedRecipes.findIndex((recipe) => recipe.name === recipeName);
}

function toggleRecipe(recipe) {
  const existingIndex = getSelectionIndex(recipe.name);

  if (existingIndex >= 0) {
    selectedRecipes.splice(existingIndex, 1);
    setBuilderMessage(`${recipe.name} was removed.`);
  } else {
    if (selectedRecipes.length >= 12) {
      setBuilderMessage("Your quilt already has twelve recipes. Remove one before adding another.");
      return;
    }

    selectedRecipes.push(recipe);
    setBuilderMessage(`${recipe.name} became poem line ${selectedRecipes.length}.`);
  }

  updateBuilder();
}

function renderRecipePicker() {
  const query = pickerSearch.value.trim().toLowerCase();

  const visibleRecipes = allRecipes.filter((recipe) => {
    const matchesFilter =
      activePickerFilter === "all" ||
      recipe.category === activePickerFilter;

    const matchesSearch =
      recipe.name.toLowerCase().includes(query) ||
      recipe.flavor.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  recipePickerGrid.innerHTML = "";

  if (!visibleRecipes.length) {
    recipePickerGrid.innerHTML =
      '<p class="empty-picker-message">No recipes matched that search.</p>';
    return;
  }

  visibleRecipes.forEach((recipe) => {
    const selectionIndex = getSelectionIndex(recipe.name);
    const isSelected = selectionIndex >= 0;
    const selectionFull = selectedRecipes.length >= 12;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "picker-card";
    button.classList.toggle("selected", isSelected);
    button.classList.toggle("unavailable", selectionFull && !isSelected);
    button.setAttribute("aria-pressed", String(isSelected));

    button.innerHTML = `
      ${isSelected
        ? `<span class="picker-card-number">${selectionIndex + 1}</span>`
        : ""}
      <h3>${categories[recipe.category].emoji} ${recipe.name}</h3>
      <p>${recipe.flavor}</p>
      <p class="picker-category">${categories[recipe.category].label}</p>
    `;

    button.addEventListener("click", () => toggleRecipe(recipe));
    recipePickerGrid.appendChild(button);
  });
}

function removeSelectedRecipe(recipeName) {
  selectedRecipes = selectedRecipes.filter((recipe) => recipe.name !== recipeName);
  updateBuilder();
  setBuilderMessage("Recipe removed. Choose another one or change the order.");
}

function renderSelectedRecipes() {
  selectedRecipesList.innerHTML = "";

  selectedRecipes.forEach((recipe) => {
    const item = document.createElement("li");
    item.className = "selected-chip";

    const label = document.createElement("span");
    label.textContent = `${categories[recipe.category].emoji} ${recipe.name}`;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "chip-remove";
    removeButton.setAttribute("aria-label", `Remove ${recipe.name}`);
    removeButton.textContent = "×";
    removeButton.addEventListener("click", () => removeSelectedRecipe(recipe.name));

    item.append(label, removeButton);
    selectedRecipesList.appendChild(item);
  });

  if (!selectedRecipes.length) {
    const emptyItem = document.createElement("li");
    emptyItem.textContent = "No recipes chosen yet.";
    emptyItem.className = "empty-selected";
    selectedRecipesList.appendChild(emptyItem);
  }
}

function updateBuilder() {
  selectionCount.textContent = String(selectedRecipes.length);
  buildQuiltButton.disabled = selectedRecipes.length !== 12;

  renderSelectedRecipes();
  renderRecipePicker();

  if (selectedRecipes.length === 12) {
    setBuilderMessage("Your twelve-recipe quilt is ready to build.");
  } else {
    const remaining = 12 - selectedRecipes.length;
    setBuilderMessage(
      `Choose ${remaining} more recipe${remaining === 1 ? "" : "s"}.`
    );
  }
}

function selectRandomRecipes() {
  selectedRecipes = shuffle(allRecipes).slice(0, 12);
  updateBuilder();
  setBuilderMessage("BerryBelle selected twelve surprise recipes.");
}

function selectSignatureRecipes() {
  selectedRecipes = signatureNames
    .map((name) => allRecipes.find((recipe) => recipe.name === name))
    .filter(Boolean);

  updateBuilder();
  setBuilderMessage("The signature favorite quilt is ready.");
}

function clearSelection() {
  selectedRecipes = [];
  updateBuilder();
  setBuilderMessage("The recipe basket is empty again.");
}

function buildCustomQuilt() {
  if (selectedRecipes.length !== 12) {
    setBuilderMessage("Choose exactly twelve recipes before building.");
    return;
  }

  currentMood = poemMoodSelect.value;
  currentPuzzle = selectedRecipes.map(createPuzzlePiece);

  builderPanel.hidden = true;
  gameArea.hidden = false;
  restartButton.hidden = false;
  editPoemButton.hidden = false;
  currentMoodTitle.textContent = `${moodLabels[currentMood]} poem`;

  restartCurrentQuilt();

  window.setTimeout(() => {
    gameArea.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}

function showCustomizer() {
  victoryScreen.hidden = true;
  builderPanel.hidden = false;

  window.setTimeout(() => {
    builderPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}

function renderPoem() {
  poemList.innerHTML = "";

  currentPuzzle.forEach((piece) => {
    const item = document.createElement("li");
    item.className = "poem-line";
    item.textContent = piece.line;
    item.classList.toggle("revealed", solvedIds.has(piece.id));
    poemList.appendChild(item);
  });
}

function renderSlots() {
  quiltBoard.innerHTML = "";

  currentPuzzle.forEach((piece, index) => {
    const slot = document.createElement("article");
    slot.className = "quilt-slot";
    slot.tabIndex = 0;
    slot.setAttribute("role", "button");
    slot.setAttribute(
      "aria-label",
      `Quilt space ${index + 1}. ${piece.clue}`
    );
    slot.dataset.id = piece.id;

    slot.innerHTML = `
      <div>
        <span class="slot-number">${String(index + 1).padStart(2, "0")}</span>
        <p class="slot-clue">${piece.clue}</p>
      </div>
      <div class="slot-answer">Drop the matching recipe here</div>
    `;

    slot.addEventListener("click", () => {
      if (selectedTile) attemptPlacement(selectedTile, slot);
    });

    slot.addEventListener("keydown", (event) => {
      if (
        (event.key === "Enter" || event.key === " ") &&
        selectedTile
      ) {
        event.preventDefault();
        attemptPlacement(selectedTile, slot);
      }
    });

    quiltBoard.appendChild(slot);
  });
}

function createTile(piece, index) {
  const tile = document.createElement("div");
  tile.className = "recipe-tile";
  tile.tabIndex = 0;
  tile.setAttribute("role", "button");
  tile.setAttribute("aria-pressed", "false");
  tile.setAttribute("aria-label", `${piece.recipe} recipe tile`);
  tile.dataset.id = piece.id;
  tile.style.setProperty("--tilt", `${((index % 5) - 2) * .8}deg`);

  tile.innerHTML = `
    <span class="tile-emoji" aria-hidden="true">${piece.emoji}</span>
    <span class="tile-name">${piece.recipe}</span>
    <span class="tile-hint">${categories[piece.category].label} recipe</span>
  `;

  tile.addEventListener("click", (event) => {
    if (didDrag) return;
    event.stopPropagation();
    selectTile(tile);
  });

  tile.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectTile(tile);
    }
  });

  tile.addEventListener("pointerdown", beginPointerDrag);
  return tile;
}

function renderTiles() {
  tileTray.innerHTML = "";

  shuffle(
    currentPuzzle.filter((piece) => !solvedIds.has(piece.id))
  ).forEach((piece, index) => {
    tileTray.appendChild(createTile(piece, index));
  });
}

function selectTile(tile) {
  if (selectedTile && selectedTile !== tile) {
    selectedTile.classList.remove("is-selected");
    selectedTile.setAttribute("aria-pressed", "false");
  }

  const deselecting = selectedTile === tile;
  selectedTile = deselecting ? null : tile;

  tile.classList.toggle("is-selected", !deselecting);
  tile.setAttribute("aria-pressed", String(!deselecting));

  setStatus(
    deselecting
      ? "Recipe tile deselected."
      : `${tile.querySelector(".tile-name").textContent} selected. Choose its riddle.`
  );
}

function beginPointerDrag(event) {
  if (event.button > 0) return;

  pointerTile = event.currentTarget;
  pointerId = event.pointerId;
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
  didDrag = false;

  pointerTile.setPointerCapture(pointerId);
  pointerTile.addEventListener("pointermove", movePointerDrag);
  pointerTile.addEventListener("pointerup", endPointerDrag);
  pointerTile.addEventListener("pointercancel", cancelPointerDrag);
}

function movePointerDrag(event) {
  if (!pointerTile || event.pointerId !== pointerId) return;

  const distance = Math.hypot(
    event.clientX - pointerStartX,
    event.clientY - pointerStartY
  );

  if (!didDrag && distance < 7) return;

  if (!didDrag) {
    didDrag = true;
    pointerTile.classList.add("is-dragging");
    dragGhost = pointerTile.cloneNode(true);
    dragGhost.className = "recipe-tile drag-ghost";
    dragGhost.removeAttribute("tabindex");
    document.body.appendChild(dragGhost);
  }

  dragGhost.style.left = `${event.clientX + 15}px`;
  dragGhost.style.top = `${event.clientY + 15}px`;

  document
    .querySelectorAll(".quilt-slot")
    .forEach((slot) => slot.classList.remove("drag-over"));

  const slot =
    document
      .elementFromPoint(event.clientX, event.clientY)
      ?.closest(".quilt-slot");

  if (slot) slot.classList.add("drag-over");
}

function endPointerDrag(event) {
  const tile = pointerTile;

  const target =
    document
      .elementFromPoint(event.clientX, event.clientY)
      ?.closest(".quilt-slot");

  cleanupPointerDrag();

  if (didDrag && tile && target) {
    attemptPlacement(tile, target);
  }

  window.setTimeout(() => {
    didDrag = false;
  }, 0);
}

function cancelPointerDrag() {
  cleanupPointerDrag();

  window.setTimeout(() => {
    didDrag = false;
  }, 0);
}

function cleanupPointerDrag() {
  if (pointerTile) {
    pointerTile.classList.remove("is-dragging");
    pointerTile.removeEventListener("pointermove", movePointerDrag);
    pointerTile.removeEventListener("pointerup", endPointerDrag);
    pointerTile.removeEventListener("pointercancel", cancelPointerDrag);
  }

  if (dragGhost) dragGhost.remove();

  dragGhost = null;
  pointerTile = null;
  pointerId = null;

  document
    .querySelectorAll(".quilt-slot")
    .forEach((slot) => slot.classList.remove("drag-over"));
}

function attemptPlacement(tile, slot) {
  const tileId = tile.dataset.id;
  const slotId = slot.dataset.id;

  if (solvedIds.has(slotId)) {
    setStatus("That quilt space is already stitched.");
    return;
  }

  if (tileId !== slotId) {
    slot.classList.remove("wrong-flash");
    void slot.offsetWidth;
    slot.classList.add("wrong-flash");

    setStatus(
      "That recipe does not match this flavor riddle. Try another space."
    );

    window.setTimeout(
      () => slot.classList.remove("wrong-flash"),
      450
    );

    return;
  }

  const piece = currentPuzzle.find((item) => item.id === tileId);

  solvedIds.add(tileId);
  slot.classList.add("solved", "correct-flash");

  slot.querySelector(".slot-answer").innerHTML =
    `<strong>${piece.emoji} ${piece.recipe}</strong>`;

  slot.setAttribute(
    "aria-label",
    `${piece.recipe} correctly stitched into the quilt.`
  );

  if (selectedTile === tile) selectedTile = null;
  tile.remove();

  setStatus(
    `${piece.recipe} fits! Its custom poem line is now visible.`
  );

  updateProgress();
}

function updateProgress() {
  const solved = solvedIds.size;

  scoreNumber.textContent = String(solved);
  progressFill.style.width =
    `${(solved / currentPuzzle.length) * 100}%`;

  document.querySelectorAll(".poem-line").forEach((line, index) => {
    line.classList.toggle(
      "revealed",
      solvedIds.has(currentPuzzle[index].id)
    );
  });

  if (solved === currentPuzzle.length && currentPuzzle.length === 12) {
    setStatus(
      "Your custom quilt is complete. Read your full poem below, then celebrate when you are ready!"
    );

    celebrationButton.hidden = false;

    window.setTimeout(() => {
      document
        .querySelector("#poem-title")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
  } else {
    celebrationButton.hidden = true;
  }
}

function restartCurrentQuilt() {
  solvedIds = new Set();
  selectedTile = null;
  victoryScreen.hidden = true;
  celebrationButton.hidden = true;

  renderSlots();
  renderTiles();
  renderPoem();
  updateProgress();

  setStatus("Your custom quilt is ready. Choose a recipe tile.");
}

function showHint() {
  document
    .querySelectorAll(".hint-glow")
    .forEach((element) => element.classList.remove("hint-glow"));

  let id;

  if (selectedTile) {
    id = selectedTile.dataset.id;
  } else {
    const remaining =
      currentPuzzle.filter((piece) => !solvedIds.has(piece.id));

    if (!remaining.length) return;

    id = remaining[Math.floor(Math.random() * remaining.length)].id;
  }

  const slot =
    document.querySelector(`.quilt-slot[data-id="${id}"]`);

  slot?.classList.add("hint-glow");
  slot?.scrollIntoView({ behavior: "smooth", block: "center" });

  setStatus("BerryBelle highlighted the matching riddle.");

  window.setTimeout(
    () => slot?.classList.remove("hint-glow"),
    1800
  );
}

function openPoemEditor() {
  poemEditorFields.innerHTML = "";

  currentPuzzle.forEach((piece, index) => {
    const row = document.createElement("div");
    row.className = "poem-edit-row";

    row.innerHTML = `
      <span class="poem-edit-number">${index + 1}</span>
      <label>
        <span>${piece.emoji} ${piece.recipe}</span>
        <textarea
          data-piece-id="${piece.id}"
          maxlength="220"
        >${piece.line}</textarea>
      </label>
    `;

    poemEditorFields.appendChild(row);
  });

  poemEditor.showModal();
}

function savePoemEdits() {
  poemEditorFields
    .querySelectorAll("textarea")
    .forEach((textarea) => {
      const piece =
        currentPuzzle.find(
          (item) => item.id === textarea.dataset.pieceId
        );

      const value = textarea.value.trim();

      if (piece && value) piece.line = value;
    });

  renderPoem();
  poemEditor.close();

  setStatus(
    "Your custom poem wording was saved. Solved lines remain visible."
  );
}

function regeneratePoem() {
  currentMood = poemMoodSelect.value;

  currentPuzzle.forEach((piece) => {
    const recipe =
      allRecipes.find((item) => item.name === piece.recipe);

    piece.line = generatePoemLine(recipe, currentMood);
  });

  currentMoodTitle.textContent = `${moodLabels[currentMood]} poem`;
  openPoemEditor();
}

pickerSearch.addEventListener("input", renderRecipePicker);

poemMoodSelect.addEventListener("change", () => {
  setBuilderMessage(
    `${moodLabels[poemMoodSelect.value]} will shape your poem.`
  );
});

document
  .querySelector("#random-recipes-button")
  .addEventListener("click", selectRandomRecipes);

document
  .querySelector("#signature-recipes-button")
  .addEventListener("click", selectSignatureRecipes);

document
  .querySelector("#clear-recipes-button")
  .addEventListener("click", clearSelection);

buildQuiltButton.addEventListener("click", buildCustomQuilt);
customizeButton.addEventListener("click", showCustomizer);
document
  .querySelector("#change-recipes-button")
  .addEventListener("click", showCustomizer);

restartButton.addEventListener("click", restartCurrentQuilt);
document
  .querySelector("#shuffle-button")
  .addEventListener("click", () => {
    renderTiles();
    setStatus("The remaining recipe tiles were shuffled.");
  });

document
  .querySelector("#hint-button")
  .addEventListener("click", showHint);

editPoemButton.addEventListener("click", openPoemEditor);

document
  .querySelector("#close-poem-editor")
  .addEventListener("click", () => poemEditor.close());

document
  .querySelector("#save-poem-button")
  .addEventListener("click", savePoemEdits);

document
  .querySelector("#regenerate-poem-button")
  .addEventListener("click", regeneratePoem);

celebrationButton.addEventListener("click", () => {
  victoryScreen.hidden = false;
});

document
  .querySelector("#play-again-button")
  .addEventListener("click", restartCurrentQuilt);

document
  .querySelector("#new-quilt-button")
  .addEventListener("click", showCustomizer);

document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".recipe-tile") &&
    !event.target.closest(".quilt-slot") &&
    selectedTile
  ) {
    selectedTile.classList.remove("is-selected");
    selectedTile.setAttribute("aria-pressed", "false");
    selectedTile = null;
  }
});

poemEditor.addEventListener("click", (event) => {
  const bounds = poemEditor.getBoundingClientRect();

  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (outside) poemEditor.close();
});

renderPickerFilters();
updateBuilder();
