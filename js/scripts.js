//Business Logic
function Pizza(nameInput, size, meat, sizeCost, meatCost) {
    this.nameInput = nameInput
    this.size = size;
    this.meat = meat;
    this.sizeCost = sizeCost;
    this.meatCost = meatCost;
}

Pizza.prototype.price = function() {
    return this.sizeCost + this.meatCost;
};

Pizza.prototype.order = function() {
    return this.nameInput + ", " + "you ordered a " + this.size + " pizza with " + this.meat + ".";
};



//User Logic

$(document).ready(function() {
    $("form#order").submit(function(event) {
        event.preventDefault();
        const nameInput = $("input#name").val();
        let sizeInput = $("#size").val().split("");
        let meatInput = $("#meat").val().split("");
        
        const size = sizeInput.slice(0, -1).join('');
        const sizeCost = parseInt(sizeInput.slice(-1));
        const meat = meatInput.slice(0, -1).join('');
        const meatCost = parseInt(meatInput.slice(-1));

        let newPizza = new Pizza(nameInput, size, meat, sizeCost, meatCost);
        let finalPrice = newPizza.price();
        let finalOrder = newPizza.order();

        $("#finalPrice").text("Final Price: $" + finalPrice);
        $("#finalOrder").text(finalOrder);
    })
});