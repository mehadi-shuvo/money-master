function getInputeElementBuId(elementId) {
    const element = document.getElementById(elementId);
    return element;
}
function getValueFromInputById(idName) {
    const element = document.getElementById(idName);
    const elementValue = element.value;
    const cost = parseFloat(elementValue);
    return cost;
}



    const income = getValueFromInputById('income');
const food = getValueFromInputById('food-cost');
const rent = getValueFromInputById('rent-cost');
const clothes = getValueFromInputById('clothes-cost');
const totalExpenses = food + rent + clothes;
const balanceAfterCost = income - totalExpenses;




    document.getElementById('calculate').addEventListener('click', function() {
        const income = getValueFromInputById('income');
        const food = getValueFromInputById('food-cost');
        const rent = getValueFromInputById('rent-cost');
        const clothes = getValueFromInputById('clothes-cost');
        const totalExpenses = food + rent + clothes;
        const balanceAfterCost = income - totalExpenses;
        if (income > totalExpenses) {
            getInputeElementBuId('total-expenses').innerText = totalExpenses;
            getInputeElementBuId('balance-after-cost').innerText = balanceAfterCost;
        }else{
            alert("Expenses are too many!! please try to less cost.")
        }
    
    
    });
    
    document.getElementById('save').addEventListener('click', function(){
        const income = getValueFromInputById('income');
        const food = getValueFromInputById('food-cost');
        const rent = getValueFromInputById('rent-cost');
        const clothes = getValueFromInputById('clothes-cost');
        const totalExpenses = food + rent + clothes;
        const balanceAfterCost = income - totalExpenses;
        const savingRate = getValueFromInputById('saveing-rate');
        const amountOfsaveing = (savingRate*income) / 100;
        if(savingRate<100){
            console.log(amountOfsaveing);
            if(balanceAfterCost > amountOfsaveing){
                getInputeElementBuId('saving-amount').innerText = amountOfsaveing;
                getInputeElementBuId('remaining-balance').innerText = balanceAfterCost - amountOfsaveing;
    
            }
            else{
                console.log(0)
            }
        }
        else{
            alert("NO!! YOU CAN NOT SAVE FULL OF YOUR INCOME. GOT IT?" )
        }
    });
