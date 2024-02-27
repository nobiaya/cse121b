// URL of the JSON file on GitHub
const jsonUrl = 'https://github.com/nobiaya/cse121b/blob/main/w02-task/scripts/otown.json';

// Fetch the JSON data
fetch('https://github.com/nobiaya/cse121b/blob/main/w02-task/scripts/otown.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(photo => {
    // Display the data on the dashboard
    displayData(photo);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
    // Handle error
  });

// Function to display the data on the dashboard
function displayData(photo) {
  // Example: Display data in console
  console.log(photo);
  // Example: Render data in HTML
  const container = document.getElementById('photo');
  container.textContent = JSON.stringify(photo, null, 2); // Convert data to formatted JSON string
}
