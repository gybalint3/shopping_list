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
        console.log(item)
        console.log(item.name)
        console.log(item.name)

        row.innerHTML = `<td>${item.name}</td>  <td>${item.qty}</td>  <td>${item.price}</td> <td>${calculateSubtotal(item)}</td>`
      
        tbody.appendChild(row);
      });

      document.getElementById('totalAmount').textContent = calculateTotal();
    }

  
    document.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addItem();
      }
    });