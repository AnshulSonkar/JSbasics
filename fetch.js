// let title = document.getElementById("title");
// let body = document.getElementById("body");

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(res => res.json())
//   .then(data => {
//     title.textContent = data.title;
//     body.textContent = data.body;
//   });
// fetch.js


// fetch.js

// // 1. Define the API endpoint (Using a free placeholder API for this example)
// const API_URL = 'https://typicode.com';

// async function loadData() {
//     try {
//         // 2. Fetch the data from the API
//         const response = await fetch(API_URL);

//         // Check if the server response is okay (status 200-299)
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // 3. Convert the response data to a JavaScript object
//         const data = await response.json();

//         // 4. Select your HTML elements by their unique IDs
//         const titleElement = document.getElementById('title');
//         const bodyElement = document.getElementById('body');

//         // 5. Inject the data into the elements, replacing the "Loading..." text
//         titleElement.textContent = data.title;
//         bodyElement.textContent = data.body;

//     } catch (error) {
//         // 6. Handle network or server errors gracefully
//         console.error('Error fetching data:', error);
        
//         document.getElementById('title').textContent = 'Failed to load content';
//         document.getElementById('body').textContent = 'Please check your connection or try again later.';
//     }
// }

// // 7. Execute the function as soon as the file loads
// loadData();

