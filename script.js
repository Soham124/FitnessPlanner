document.getElementById('bmiForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = weight / (height * height);
    sessionStorage.setItem('bmi', bmi.toFixed(2));
    window.location.href = 'home.html';
  });
