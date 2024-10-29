const express = require('express');
const app = express();
const port = 3000;

// Create the computation endpoint
app.get('/computation', (req, res) => {
    // Generate a random value between -1 and 1 (since Math.asin requires this range)
    let x = Math.random() * 2 - 1; // Generates a number between -1 and 1
    
    // Check for query parameter 'x' and use that value if provided
    if (req.query.x) {
        x = parseFloat(req.query.x);
    }

    // Apply Math functions
    const cosValue = Math.cos(x);
    const asinValue = Math.asin(x);
    const asinhValue = Math.asinh(x);
    
    // Prepare the response string
    const response = `
        Math.cos() applied to ${x} is ${cosValue} <br>
        Math.asin() applied to ${x} is ${asinValue} <br>
        Math.asinh() applied to ${x} is ${asinhValue}
    `;
    
    // Send the response
    res.send(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});