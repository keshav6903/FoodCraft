document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const calories = parseInt(document.getElementById('calories').value);
    
    fetch('/get-recipes', {
        method: 'POST',
        headers: 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ calories: calories }),
    })
    .then(response => response.json())
    .then(data => {
        const recipeList = document.getElementById('recipeList');
        recipeList.innerHTML = data.map(recipe => `
            <div class="recipe-card">
                <h3>${recipe.name}</h3>
                <p><strong>Calories:</strong> ${recipe.calories}</p>
                <p><strong>Recipe:</strong> ${recipe.recipe}</p>
            </div>
        `).join('');
    })
    .catch(error => console.error('Error:', error));
});
