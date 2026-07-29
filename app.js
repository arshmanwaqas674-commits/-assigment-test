
```javascript
let form = document.getElementById("cardForm");
let cardContainer = document.getElementById("cardContainer");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let city = document.getElementById("city").value;

    cardContainer.innerHTML = `
        <div class="card">

            <h2>${name}</h2>

            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>City: ${city}</p>

        </div>
    `;
});
```
