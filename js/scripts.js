//Business Logic
function Pizza(size, meat, sizeCost, meatCost) {
    this.size = size;
    this.meat = meat;
    this.sizeCost = sizeCost;
    this.meatCost = meatCost;
}

Pizza.prototype.order = function() {
    return this.sizeCost + this.meatCost;
};

// Pizza.prototype.list = function() {
//     return this.size + " " + this.meat;
// };



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

        let newPizza = new Pizza(size, meat, sizeCost, meatCost);
        let final = newPizza.order();
        console.log(final);
    })
});