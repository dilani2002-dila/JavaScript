
function Calculator(amount, monthlyInterestRate) {
    
    let Interest = amount * (monthlyInterestRate / 100) * 12;
    return Interest;
    }

function main() {
    
    let Amount =400;         
    let monthlyInterestRate = 5;     

    let interest =Calculator(Amount, monthlyInterestRate);

    console.log();
}

main();
