document.getElementById('ventaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const producto = document.getElementById('producto').value;
    const cantidad = document.getElementById('cantidad').value;
    const precio = document.getElementById('precio').value;

    // Crear un objeto con los datos de la venta
    const ventaData = {
        producto: producto,
        cantidad: parseInt(cantidad),
        precio: parseFloat(precio)
    };

    // Enviar la venta al backend utilizando fetch
    fetch('http://localhost:3001/ventas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ventaData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Venta registrada correctamente');
        document.getElementById('ventaForm').reset();  // Limpiar el formulario
    })
    .catch(error => {
        console.error('Error al registrar la venta:', error);
        alert('Hubo un error al registrar la venta');
    });
});
