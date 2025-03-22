document.addEventListener("DOMContentLoaded", () => {
    const inventoryTable = document.getElementById("inventory-table");

    function loadInventory() {
        inventoryTable.innerHTML = "";
        Object.values(inventory).forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
            `;
            inventoryTable.appendChild(row);
        });
    }

    loadInventory();
});
