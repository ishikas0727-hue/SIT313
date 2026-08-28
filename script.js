document.getElementById("subscribeForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    try {

        const response = await fetch("/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
        });

        const data = await response.json();

        document.getElementById("message").textContent = data.message;

    } catch (error) {

        console.error(error);

        document.getElementById("message").textContent =
            "Something went wrong.";

    }

});