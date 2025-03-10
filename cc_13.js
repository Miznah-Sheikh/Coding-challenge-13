document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer");

    // Task 2: Function to create and add an employee card dynamically
    function createEmployeeEntry(name, position) {
        const card = document.createElement("div");
        card.classList.add("employee-profile");

        const nameElement = document.createElement("h3");
        nameElement.textContent = name;
        
        const positionElement = document.createElement("p");
        positionElement.textContent = position;
        
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-button");

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-button");

        card.append(nameElement, positionElement, editBtn, removeBtn);
        employeeContainer.appendChild(card);
    }

    // Task 3: Function to highlight all employee cards
    function highlightEmployeeProfiles() {
        document.querySelectorAll(".employee-profile").forEach(card => {
            card.style.border = "2px solid blue";
            card.style.backgroundColor = "#e6f7ff";
        });
    }

    // Task 4: Event listener to remove an employee card using delegation
    employeeContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-button")) {
            event.target.closest(".employee-profile").remove();
        }
    });

    // Task 5: Inline editing for employee details
    employeeContainer.addEventListener("dblclick", (event) => {
        const card = event.target.closest(".employee-profile");
        if (!card) return;

        const nameElement = card.querySelector("h3");
        const positionElement = card.querySelector("p");
        const editBtn = card.querySelector(".edit-button");
        const removeBtn = card.querySelector(".remove-button");

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = nameElement.textContent;

        const positionInput = document.createElement("input");
        positionInput.type = "text";
        positionInput.value = positionElement.textContent;

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList.add("save-button");

        card.innerHTML = "";
        card.append(nameInput, positionInput, saveBtn);

        saveBtn.addEventListener("click", () => {
            nameElement.textContent = nameInput.value;
            positionElement.textContent = positionInput.value;
            
            card.innerHTML = "";
            card.append(nameElement, positionElement, editBtn, removeBtn);
        });
    });

    // Example Usage: Task 2 - Adding employee cards
    createEmployeeEntry("Musa Malhi", "Industrial Engineer");
    createEmployeeEntry("Akbar Younus", "Data Analyst");

    // Task 3 - Highlight employee cards after 2 seconds
    setTimeout(highlightEmployeeProfiles, 2000);
});
