//Business Logic

function Pizza(size, meat) {
    this.size = size;
    this.meat = meat;
}

Pizza.prototype.price = function() {

}

//User Logic


$(document).ready(function() {
    $("form#order").submit(function(event) {
        event.preventDefault();
        const nameInput = $("input#name").val().split("");
        let sizeInput = $("#size").val().split("");
        let meatInput = $("#meat").val().split("");
        

        const size = sizeInput.slice(0, -1).join('');
        const sizeCost = parseInt(sizeInput.slice(-1));
        const meat = meatInput.slice(0, -1).join('');
        const meatCost = parseInt(meatInput.slice(-1));
        console.log(size, sizeCost, meat, meatCost);
    })
});