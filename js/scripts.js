//Business Logic

function Pizza(size, meat) {
    this.size = size;
    this.meat = meat;
}


//User Logic


$(document).ready(function() {
    $("form#order").submit(function(event) {
        event.preventDefault();
        let name = $("input#name").val();
        let size = $("#size").val();
        let meat = $("#meat").val();
        
    })
});