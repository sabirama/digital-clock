let format12hr = false;
let formatter = 0;
const formatText = document.getElementById('format-text');

setInterval(()=> {
    const date = new Date();
    let hours = [...(date.getHours() > 12 ? date.getHours()-formatter : date.getHours()).toFixed(0).toString()];
    let minutes = [...(date.getMinutes()).toString()];
    let seconds = [...(date.getSeconds()).toString()];

    document.querySelector('.hours').innerHTML = `
        ${ hours.length == 2 ? 
            `
            <p class='number'>${hours[0]}</p>
            <p class='number'>${hours[1]}</p>
            ` :
            `
            <p class='number'>0</p>
            <p class='number'>${hours[0]}</p>
            `

        }
    `;
    document.querySelector('.minutes').innerHTML = `
        ${minutes.length == 2 ? 
            `
            <p class='number'>${minutes[0]}</p>
            <p class='number'>${minutes[1]}</p>
            ` :
            `
            <p class='number'>0</p>
            <p class='number'>${minutes[0]}</p>
            ` 
        }
    `;
    document.querySelector('.seconds').innerHTML = `
        ${seconds.length == 2 ? 
            `
            <p class='number'>${seconds[0]}</p>
            <p class='number'>${seconds[1]}</p>` :
            `
            <p class='number'>0</p>
            <p class='number'>${seconds[0]}</p>
            `
        }
       
    `;
    document.querySelectorAll('.am-pm').forEach(item => {
        item.textContent = date.getHours() >= 12 ? 'PM' : 'AM';
    })
}, 1000);

document.getElementById('format').addEventListener('click', ()=> {
    setTimeFormat();
})

window.addEventListener('DOMContentLoaded', () => {
    resize();
    formatText.textContent = '24hr'
});

window.addEventListener('resize', () => {
    resize();
});


const resize = () => {
    document.getElementById('root').style = `transform: scale(${70 * window.innerWidth/70}%)`
}   

function setTimeFormat () {
    if(format12hr == true) {
        format12hr = false;
        formatter = 0;
        formatText.textContent = '24hr'
    } else {
        format12hr = true;
        formatter = 12;
        formatText.textContent = '12hr'
    }
}