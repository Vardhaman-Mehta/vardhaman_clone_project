document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission on Enter key
        document.getElementById('search-form').submit(); // Manually submit the form
    }
});

async function searchGoogle(query) {
    const apiKey = 'AIzaSyAXsXa4n2NqaP8uoEGbgP4wj7HVa0uFn1w';
    const cx = '405ad8c2117ae434e';
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // Process and display the search results as needed
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
};  
