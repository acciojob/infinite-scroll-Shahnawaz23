// Get the list container by ID
const listContainer = document.getElementById("infi-list");

// Function to add items to the list
function addItems(count) {
  const currentItems = listContainer.children.length; // Number of current list items
  for (let i = 1; i <= count; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${currentItems + i}`; // Dynamic numbering
    listContainer.appendChild(listItem);
  }
}

// Add initial 10 items on page load
addItems(10);

// Event listener to handle scrolling
listContainer.addEventListener("scroll", () => {
  // Check if the user has scrolled to the bottom of the container
  if (
    Math.ceil(listContainer.scrollTop + listContainer.clientHeight) >=
    listContainer.scrollHeight
  ) {
    // Add 2 more items when at the bottom
    addItems(2);
  }
});
