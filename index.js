// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"],
  };
  
  // Function to display menu items by category
  function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    let menuContainer = document.getElementById("menu");
    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
      // Create an element to represent the category
      const menuCategory = document.createElement("h3");
      // Set the text content of the category element to the category name
      menuCategory.textContent = category;
      // Append the category element to the menu container
      menuContainer.appendChild(menuCategory);
  
      // Create an element to represent a list of items
      const menuItems = document.createElement("ul");
      // Append a list of items element to the menu container
      menuContainer.appendChild(menuItems);
  
      // Loop through the items in the category and create list items
      items.forEach((item) => {
        // Create a list item element
        const listItemElement = document.createElement("li");
        // Set the text content of the list item element to the item name
        listItemElement.textContent = item;
        // console.log(item);
  
        // Attach a click event listener to the list item to add it to the order
        // Append the list item to the list of items
        listItemElement.onclick = () => addToOrder(item);
        console.log("Child has been added");
        menuItems.appendChild(listItemElement);
      });
    }
  }
  
  displayMenuItems(menu);
  
  let currentTotal = 60;
  // Callback function for adding an item to the order
  function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsElem = document.getElementById("order-items");
    console.log(orderItemsElem);
    const orderTotalElem = document.getElementById("order-total");
  
    // Create a list item for the order
    const orderList = document.createElement("li");
    // Set the text content of the list item to the item name
    orderList.textContent = itemName;
    // Append the list item to the order items list
    orderItemsElem.appendChild(orderList);
  
    // Calculate and update the total price
    // Update the text content of the order total element with the new total
    // let currentTotal = parseFloat(orderTotalElem.textContent);
    currentTotal += 60;
    orderTotalElem.textContent = currentTotal;
  }
  
  // Function to initialize the menu system
  function initMenuSystem(menu) {
    // Call the function to display menu items
  }
  
  // Start the menu system by calling the init function
  initMenuSystem(menu);