const container = document.querySelector(".container");
const count= document.getElementById('no_seats')
const total = document.getElementById('total_price')
const selectmovie = document.getElementById('movies')

let ticketPrice = parseInt(selectmovie.value);

function updatetheseats(){
    const selectedseats = document.querySelectorAll(".row .selected");
    const countselectedseats = selectedseats.length;
    count.innerHTML = countselectedseats;
    total.innerHTML = countselectedseats * ticketPrice;
}

selectmovie.addEventListener("change", (e) => {
    ticketPrice = parseInt(e.target.value);
    updatetheseats();

});

container.addEventListener("click", function(e){
    
        e.target.classList.toggle("selected");
        updatetheseats();
    }
});