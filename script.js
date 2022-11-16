const state = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'Tennessee', 'Texas', 'Utah', ' Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];



let s = 0
for(s=0; s <= state.length -1;s++){
console.log(state[s])
//Loop through the states array
const option = document.createElement('option')
const innerOption = document.createTextNode(`${state[s]}`)
option.appendChild(innerOption)
//Create an option element and append the state string from the STATES ARRAY through each iteration

const element = document.getElementById('state')
element.appendChild(option)
//Target the 'state' id in the form from sign-up.html to append the whole element <option> state[s] </option>
}

const proficiency = ['Novice', 'Intermediate', 'Girl', 'Girl Expert','Expert']
let p = 0
for(p=0;p<=proficiency.length-1;p++){
    console.log(proficiency[p])
    
    const check = $(document).createElement('input')
    const innerCheck = $(document).createTextNode(`${proficiency[p]}`)

    const elem = $(document).getElementById('proficiency')

    $(elem).after(check)
            .append(innerCheck)
}