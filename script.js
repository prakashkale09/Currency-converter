const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  const dropdown = document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("form button");
  const fromCurr= document.querySelector(".from select");
  const toCurr= document.querySelector(".to select");
 
    1.//add multiple countrycode
  for(let select of dropdown)
  {
    for(let currCode in countryList )
    {
        let newOption = document.createElement("option");
        newOption.innerText=currCode;
        newOption.value = currCode;   
       
         
        if(select.name==="from" && currCode==="USD")
        {
            newOption.selected = "selected";
        }
        else if(select.name==="to" && currCode==="INR")
        {
            newOption.selected="selected";
        }
        select.append(newOption);
    }
  


  2.//change the flag
    select.addEventListener("change",(evt)=>
    {
        updateFlag(evt.target);
    });
}
    const updateFlag = (element)=>
    {
        console.log(element);
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
       let img= element.parentElement.querySelector("img");
       img.src = newSrc;
    };

    //3.exchange rate
    btn.addEventListener("click",async (evt)=>
    {
        evt.preventDefault();
        let amount = document.querySelector("form input");
        let amtval = amount.value;
        console.log(amtval);
        if(amount.value===""||amtval<1)
        {
            amtval=1;
            amount.value=1;
          
        }

        const URL =`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
        let response = await fetch(URL);
        console.log
    }); 