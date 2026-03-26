let items = [];

    function addItem() {
      
      const name = document.getElementById('itemName').value.trim();
      const qty = parseFloat(document.getElementById('quantity').value);
      const price = parseFloat(document.getElementById('price').value);





      if (!name || !qty || !price) {
        alert("Please fill in all fields!");
        return;
      }

      items.push({ name, qty, price });

      document.getElementById('itemName').value = '';
      document.getElementById('quantity').value = '1';
      document.getElementById('price').value = '';

      renderList();
    }

    function removeItem(index) {
      items.splice(index, 1);
      renderList();
    }

    

    function calculateSubtotal(item) {
      return (item.qty * item.price).toFixed(2);
    }

    function calculateTotal() {
      return items.reduce((sum, item) => sum + (item.qty * item.price), 0).toFixed(2);
    }

    function renderList() {
      const tbody = document.getElementById('itemList');
      tbody.innerHTML = '';

      items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML =
      `<td>${item.name}</td>` +
      `<td>${item.qty}</td>` +
      `<td>${item.price.toFixed(2)}</td>` +
      `<td>${calculateSubtotal(item)}</td>` +
      `<td><span class="remove" data-index="${index}" style="cursor:pointer;">\u00d7</span></td>`;

    tbody.appendChild(row);
      });

      document.getElementById('totalAmount').textContent = calculateTotal();
    }

  
    document.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addItem();
      }
    });


    document.getElementById('itemList').addEventListener('click', function (e) {
  const target = e.target;
  if (target && target.classList.contains('remove')) {
    const idx = parseInt(target.dataset.index, 10);
    if (!Number.isNaN(idx)) {
      removeItem(idx);
      // if you have saveData(), call it here:
      // saveData();
    }
  }
});