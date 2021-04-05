function enter_button_function() {
    var error_message = "";
    var input = document.getElementById('messier_input').value;

    if(input > 110 || input < 1)
    {
        error_message = "You must enter a number from 1 - 110!";
    }
    else if (isNaN(input))
    {
        error_message = "That's not a number!";
    }
    else
    {
        $.getJSON("messier_catalogue.json", function(data){
            var number, detailed_type, name, magnitude, size;
            document.getElementById('error_message').innerHTML = data[input-1]["Common Name"];
            //document.getElementById('error_message').innerHTML = data[input-1].Magnitude;
        });
    } //input is valid

    document.getElementById('error_message').innerHTML = error_message;
}