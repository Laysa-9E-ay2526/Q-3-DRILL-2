function calculateArea() {
    const radius = document.getElementById('radius').value;
    const area = Math.PI * Math.pow(radius, 2);
    document.getElementById('Area').value = area.toFixed(2);
}   