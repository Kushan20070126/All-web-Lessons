$('#cal').on('click' , function(){
// Read inputs
let customer = $('#Customer').val();
let address = $('#Delivary').val();
let branch = $('#branch').val();
let weight = $('#weight').val();
let rate = 0.00;

if(branch == 'CMB'){
    rate = 300.00;
}else if(branch = 'KD' || branch == 'GL'){
    rate = 450.00;
}else if(branch = 'MNG' || branch == 'VV'){
    rate = 700.00;

}

let delivary_fee = rate * weight;

let content = `
    <h3>Order Summary</h3>
    <h4>
            Customer : ${customer} <br>
            Delivary Address : ${address} <br>
            Weight (kg) : ${weight} <br>
            <span class ="text-danger">Delivary Fee : LKR. ${delivary_fee.toFixed(2)} </span>
    </h4>
`;

$("#result").html(content);
$('form').hide();
});