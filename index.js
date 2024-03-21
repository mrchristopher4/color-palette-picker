const selectBtnEl = document.getElementById("select-btn");

const colorSelectorEl = document.getElementById("color-selector");
const selectionMenuEl = document.getElementById('selection-menu');
const colorSelectionForm = document.getElementById('color-selection-form');

const colorColumnsSectionEl = document.getElementById('color-columns-section');
const colorCodesSectionEl = document.getElementById('color-codes-section');

selectBtnEl.addEventListener('click', function(event) {
    
})

colorSelectionForm.addEventListener('submit', function (event) {
    event.preventDefault();
    colorColumnsSectionEl.innerHTML = "";
    colorCodesSectionEl.innerHTML = "";
    console.log(colorSelectorEl.value);

    let hexcode = colorSelectorEl.value.replace('#', '');
    console.log(hexcode);
    let fetchPath = `https://www.thecolorapi.com/scheme?hex=${hexcode}&mode=${selectionMenuEl.value}`;
    
    fetch(`${fetchPath}`, {
         method: "GET",
         headers: {"Content-Type":"application/json"}
     })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.colors[0].hex.value);
            
            for (let i = 0; i < (data.colors).length; i++) {
                let indexColor = i;
                console.log(indexColor);
                
                colorColumnsSectionEl.innerHTML += `
                    <div class="color-column-display" id="color-column-${indexColor}"></div>
                `
                console.log(colorColumnsSectionEl);

                colorCodesSectionEl.innerHTML += `
                    <p>${data.colors[i].hex.value}</p>
                `
                
                document.getElementById(`color-column-${indexColor}`).style.backgroundColor = data.colors[i].hex.value;
            }    

        })
    
    
})