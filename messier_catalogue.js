function enter_button_function() {
    var error_message = "";
    var input = document.getElementById('messier_input').value;
    var number, name, type, magnitude, size;

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
            number = data[input-1]["M Number"];
            name = data[input-1]["Common Name"];
            type = data[input-1]["Detailed Type"];
            magnitude = data[input-1].Magnitude;
            size = data[input-1]["Size (arcminutes)"];

            var table = document.getElementById("messier_table");
            table.style.visibility = "visible"
            var row = table.insertRow(1);
            var cell_number = row.insertCell(0);
            var cell_name = row.insertCell(1);
            var cell_type = row.insertCell(2);
            var cell_magnitude = row.insertCell(3);
            var cell_size = row.insertCell(4);

            cell_number.innerHTML = number;
            cell_name.innerHTML = name;
            cell_type.innerHTML = type;
            cell_magnitude.innerHTML = magnitude;
            cell_size.innerHTML = size;
        });
    } //input is valid

    document.getElementById('error_message').innerHTML = error_message;
}