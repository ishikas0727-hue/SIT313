const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

app.post("/subscribe", (req, res) => {

    const email = req.body.email;

    console.log("Subscriber:", email);

    if (!email) {
        return res.status(400).json({
            message: "Email is required."
        });
    }

    console.log("Subscription received successfully.");

    res.status(202).json({
        message: "Subscription successful!"
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/WEB.HTML");
});