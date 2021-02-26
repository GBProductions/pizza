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
        let size = $("input#size").val();
        let meat = $("input#meat").val();
        
        console.log(typeof name, typeof size, typeof meat);
    })
});