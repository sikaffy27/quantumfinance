const selectPrompts = document.querySelectorAll(".selectPrompt")

selectPrompts.forEach( selectPrompt => {
    console.log(selectPrompt);
        selectPrompt.addEventListener('change', ()=>{
        selectPrompt.classList.add("txtgrey")
    })
})

