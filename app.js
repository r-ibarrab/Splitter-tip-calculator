const billInput = document.querySelector("#bill-input")
const peopleInput = document.querySelector("#number-of-people")
const textAmountPerPerson = document.querySelector("#total-per-person")
const textTipPerPerson = document.querySelector("#tip-per-person")


function validateNumber(numb){
    if(isNaN(numb)) return false
    return parseFloat(numb)
}

function Bill(){ 
    let bill=0;
    let percentage=0;
    let numberPeople=1;

    function BillReset(){
        bill=0;
        percentage=0;
        numberPeople=1;

    }

    function setBill(newBill){
        if(newBill === "") return
        if(!validateNumber(newBill)) return alert("Error")
        bill = validateNumber(newBill)
        if(percentage && numberPeople) calculate()
            
        
    }

    function getBill(){
        return bill
    }

    function setPercentage(newPercentage){
        percentage = newPercentage
        if(bill && numberPeople) calculate()
    }

    function getPercentage(){
        return percentage
    }

    function setPeople(newPeople){
        if(newPeople === "0") return alert("error")
        if(!validateNumber(newPeople)) return alert("Error")
        numberPeople = parseInt(newPeople)
        if(bill && percentage) calculate()
    }

    function getPeople(){
        return numberPeople
    }

    function calculate(){
     
        let tip = bill * (percentage/100);
        let final = tip+bill;
        let tipPerClient = tip/numberPeople;
        let totalPerClient = final/numberPeople

        textTipPerPerson.textContent=`$${tipPerClient}`
        textAmountPerPerson.textContent=`$${totalPerClient}`
    }

    return {
        getPercentage,
        setPercentage,
        setBill,
        getBill,
        setPeople,
        getPeople
    }
}

const Billf = Bill();


const tipButtons = document.querySelectorAll(".tip-button")

function removeSelected(){
    tipButtons.forEach((button)=>{
        button.classList.remove("selected")
    })
}

function changePercentage(num){
    Billf.setPercentage(num)
}

function customPercentage(){

}

tipButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
         removeSelected()
        button.classList.add("selected")
    })
})

function handleChange(e){
    Billf.setBill(e.target.value)
}

function changePeople(event){
    Billf.setPeople(event.target.value)
}

function reset(){

billInput.value=""
billInput.placeholder="0.00"

peopleInput.value=1
textAmountPerPerson.textContent="$0.00"
textTipPerPerson.textContent="$0.00"
removeSelected()
Billf.BillReset()

}