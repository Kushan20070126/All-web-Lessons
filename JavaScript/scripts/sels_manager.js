let selsetot = parseFloat(prompt("Enter Sales Total : "))
let servic_charge = parseFloat(prompt("Enter Service charge : "))
let finaleamm = 0;
if(selsetot >= 10000.00){
 finaleamm = selsetot - (selsetot * 0.12) + servic_charge;
 alert(`Final Totale is (Discount Applyed) : ${finaleamm}`);
}else{
    finaleamm = selsetot + servic_charge;
    alert(`Final Totale is  : ${finaleamm}`);
}

