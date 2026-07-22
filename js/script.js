"use strict";

const categories = {
  breakfast: { label: "Breakfast", emoji: "🥞" },
  bakery: { label: "Bakery", emoji: "🍩" },
  chocolate: { label: "Chocolate", emoji: "🍫" },
  drinks: { label: "Drinks", emoji: "☕" },
  savory: { label: "Savory", emoji: "🌯" },
  chilled: { label: "Chilled", emoji: "🍨" }
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

const puzzlePieces = [
  {
    "id": "pancakes",
    "recipe": "Cinnamony Cinnamon Maple Buttermilk Pancakes",
    "emoji": "🥞",
    "clue": "Find the warm cloud stacked with cinnamon and maple.",
    "line": "Morning rises in a cinnamon cloud,"
  },
  {
    "id": "rolls",
    "recipe": "Microwave Cinnamon Rolls",
    "emoji": "🌀",
    "clue": "Find the tiny spiral that turns warmth into courage.",
    "line": "a soft spiral of courage turns warm,"
  },
  {
    "id": "donuts",
    "recipe": "Clear-Glaze Microwave Donuts",
    "emoji": "🍩",
    "clue": "Find the little rings shining beneath a clear glaze.",
    "line": "glazed moons glow on a berry-colored sky,"
  },
  {
    "id": "toast",
    "recipe": "Cinnamon Greek Yogurt French Toast",
    "emoji": "🍞",
    "clue": "Find the bread that remembers how to become custardy.",
    "line": "and bread remembers how to become soft again."
  },
  {
    "id": "mocha",
    "recipe": "Chili Mocha Latte",
    "emoji": "☕",
    "clue": "Find cocoa, coffee, and one tiny spark of heat.",
    "line": "Coffee wakes the page with a cocoa sun,"
  },
  {
    "id": "brownie",
    "recipe": "Brownie Batter Cake",
    "emoji": "🍫",
    "clue": "Find the cake that keeps its center deliciously gooey.",
    "line": "while chocolate keeps the brave parts gooey."
  },
  {
    "id": "oreo",
    "recipe": "Oreo Frozen Yogurt Bowl",
    "emoji": "🍨",
    "clue": "Find cold cream carrying crunchy cookie stars.",
    "line": "Cold cookie stars crackle inside cream,"
  },
  {
    "id": "bagel",
    "recipe": "Egg and Avocado Bagel Sandwich",
    "emoji": "🥯",
    "clue": "Find the golden circle holding a whole morning together.",
    "line": "and a golden bagel holds the day together."
  },
  {
    "id": "pizza",
    "recipe": "Mini Tortilla Pizza",
    "emoji": "🍕",
    "clue": "Find the tortilla dreaming of becoming a tiny pizza.",
    "line": "A tortilla dreams itself into pizza,"
  },
  {
    "id": "wrap",
    "recipe": "Spinach Chicken Wrap",
    "emoji": "🌯",
    "clue": "Find the green fold wrapped around a savory afternoon.",
    "line": "while green folds around a savory afternoon."
  },
  {
    "id": "mousse",
    "recipe": "Avocado Chocolate Mousse",
    "emoji": "🥑",
    "clue": "Find the unexpected ingredient that disappears into chocolate silk.",
    "line": "Silk appears where nobody expected it,"
  },
  {
    "id": "cakepops",
    "recipe": "CCD Cake Pop Bites",
    "emoji": "🍭",
    "clue": "Find the smallest celebration in the recipe tray.",
    "line": "and every tiny bite becomes a bright beginning."
  }
];

const tileTray = document.querySelector("#tile-tray");
const quiltBoard = document.querySelector("#quilt-board");
const poemList = document.querySelector("#poem-lines");
const scoreNumber = document.querySelector("#score-number");
const progressFill = document.querySelector("#progress-fill");
const statusMessage = document.querySelector("#status-message");
const recipeDialog = document.querySelector("#recipe-vault");
const recipeGrid = document.querySelector("#recipe-grid");
const filterButtons = document.querySelector("#filter-buttons");
const recipeSearch = document.querySelector("#recipe-search");
const victoryScreen = document.querySelector("#victory-screen");

// Always begin with the victory popup closed
victoryScreen.hidden = true;
let selectedTile = null;
let solvedIds = new Set();
let pointerTile = null;
let pointerId = null;
let pointerStartX = 0;
let pointerStartY = 0;
let dragGhost = null;
let didDrag = false;
let activeFilter = "all";

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function setStatus(message) {
  statusMessage.textContent = message;
}

function updateProgress() {
  const solved = solvedIds.size;
  scoreNumber.textContent = String(solved);
  progressFill.style.width = `${(solved / puzzlePieces.length) * 100}%`;

  document.querySelectorAll(".poem-line").forEach((line, index) => {
    line.classList.toggle("revealed", solvedIds.has(puzzlePieces[index].id));
  });

  if (solved === puzzlePieces.length) {
    setStatus("Every recipe is stitched into place. The poem is complete!");
    window.setTimeout(() => {
      victoryScreen.hidden = false;
    }, 450);
  }
}

function renderPoem() {
  poemList.innerHTML = "";
  puzzlePieces.forEach((piece) => {
    const item = document.createElement("li");
    item.className = "poem-line";
    item.textContent = piece.line;
    poemList.appendChild(item);
  });
}

function renderSlots() {
  quiltBoard.innerHTML = "";

  puzzlePieces.forEach((piece, index) => {
    const slot = document.createElement("article");
    slot.className = "quilt-slot";
    slot.tabIndex = 0;
    slot.setAttribute("role", "button");
    slot.setAttribute("aria-label", `Quilt space ${index + 1}. ${piece.clue}`);
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
      if ((event.key === "Enter" || event.key === " ") && selectedTile) {
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
  tile.style.setProperty("--tilt", `${((index % 5) - 2) * 0.8}deg`);
  tile.innerHTML = `
    <span class="tile-emoji" aria-hidden="true">${piece.emoji}</span>
    <span class="tile-name">${piece.recipe}</span>
    <span class="tile-hint">Drag me to my riddle</span>
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
  shuffle(puzzlePieces.filter((piece) => !solvedIds.has(piece.id))).forEach((piece, index) => {
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
      : `${tile.querySelector(".tile-name").textContent} selected. Choose its quilt riddle.`
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

  document.querySelectorAll(".quilt-slot").forEach((slot) => slot.classList.remove("drag-over"));
  const slot = document.elementFromPoint(event.clientX, event.clientY)?.closest(".quilt-slot");
  if (slot) slot.classList.add("drag-over");
}

function endPointerDrag(event) {
  const tile = pointerTile;
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".quilt-slot");
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
  document.querySelectorAll(".quilt-slot").forEach((slot) => slot.classList.remove("drag-over"));
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
    setStatus("That recipe does not answer this riddle. Try another quilt space.");
    window.setTimeout(() => slot.classList.remove("wrong-flash"), 450);
    return;
  }

  const piece = puzzlePieces.find((item) => item.id === tileId);
  solvedIds.add(tileId);
  slot.classList.add("solved", "correct-flash");
  slot.querySelector(".slot-answer").innerHTML = `<strong>${piece.emoji} ${piece.recipe}</strong>`;
  slot.setAttribute("aria-label", `${piece.recipe} correctly stitched into quilt space.`);

  if (selectedTile === tile) selectedTile = null;
  tile.remove();

  setStatus(`${piece.recipe} fits! Another poem line has appeared.`);
  updateProgress();
}

function restartPuzzle() {
  solvedIds = new Set();
  selectedTile = null;
  victoryScreen.hidden = true;
  renderSlots();
  renderTiles();
  updateProgress();
  setStatus("The quilt is empty again. Choose a recipe tile.");
}

function showHint() {
  document.querySelectorAll(".hint-glow").forEach((element) => element.classList.remove("hint-glow"));

  let id;
  if (selectedTile) {
    id = selectedTile.dataset.id;
  } else {
    const remaining = puzzlePieces.filter((piece) => !solvedIds.has(piece.id));
    if (!remaining.length) return;
    id = remaining[Math.floor(Math.random() * remaining.length)].id;
  }

  const slot = document.querySelector(`.quilt-slot[data-id="${id}"]`);
  slot?.classList.add("hint-glow");
  slot?.scrollIntoView({ behavior: "smooth", block: "center" });
  setStatus("BerryBelle highlighted the matching quilt space.");
  window.setTimeout(() => slot?.classList.remove("hint-glow"), 1800);
}

function renderRecipeFilters() {
  filterButtons.innerHTML = "";
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
    button.classList.toggle("active", filter.key === activeFilter);
    button.textContent = `${filter.emoji} ${filter.label}`;
    button.addEventListener("click", () => {
      activeFilter = filter.key;
      renderRecipeFilters();
      renderRecipeVault();
    });
    filterButtons.appendChild(button);
  });
}

function renderRecipeVault() {
  const query = recipeSearch.value.trim().toLowerCase();
  recipeGrid.innerHTML = "";

  const visibleRecipes = allRecipes.filter((recipe) => {
    const matchesFilter = activeFilter === "all" || recipe.category === activeFilter;
    const matchesSearch =
      recipe.name.toLowerCase().includes(query) ||
      recipe.flavor.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  if (!visibleRecipes.length) {
    recipeGrid.innerHTML = "<p>No recipes matched that search.</p>";
    return;
  }

  visibleRecipes.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.innerHTML = `
      <h3>${categories[recipe.category].emoji} ${recipe.name}</h3>
      <p>${recipe.flavor}</p>
      <p class="recipe-category">${categories[recipe.category].label}</p>
    `;
    recipeGrid.appendChild(card);
  });
}

document.querySelector("#restart-button").addEventListener("click", restartPuzzle);
document.querySelector("#shuffle-button").addEventListener("click", () => {
  renderTiles();
  setStatus("The loose recipe tiles were shuffled.");
});
document.querySelector("#hint-button").addEventListener("click", showHint);
document.querySelector("#vault-button").addEventListener("click", () => {
  renderRecipeFilters();
  renderRecipeVault();
  recipeDialog.showModal();
});
document.querySelector("#close-vault").addEventListener("click", () => recipeDialog.close());
document.querySelector("#play-again-button").addEventListener("click", restartPuzzle);
recipeSearch.addEventListener("input", renderRecipeVault);

recipeDialog.addEventListener("click", (event) => {
  const bounds = recipeDialog.getBoundingClientRect();
  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;
  if (outside) recipeDialog.close();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".recipe-tile") && !event.target.closest(".quilt-slot") && selectedTile) {
    selectedTile.classList.remove("is-selected");
    selectedTile.setAttribute("aria-pressed", "false");
    selectedTile = null;
  }
});

renderSlots();
renderTiles();
renderPoem();
renderRecipeFilters();
renderRecipeVault();
updateProgress();
