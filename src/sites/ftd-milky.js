/*

    EtherealScripts for FootDistrict
    Created on May 28th 2021
    Written by milkyway

    --------------------------------------

    [AVAILABLE MODES]:
    - Normal mode

    [ATC MODES]:
    - Random ATC
    - Specific size
    - Random ATC (from size range)

*/

// You know what this does
async function successnotification(message) {
    iziToast.success({
        message: message,
        color: "#2ce98e",
        position: 'topLeft',
    });
}

// Function to wait (in milliseconds)
async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// You know what this does
const errornotification = (message) => {
    iziToast.error({
        displayMode: "once",
        message: message,
        position: 'topLeft',
    });
}

// Will return array of objects
async function getAvailableSizes (){
    var container = document.querySelector("#confirm-premium")
    // will check if site is loaded
    async function checkContainer() {
        if (container.querySelectorAll(".swatch-option")) {
            if (container.querySelectorAll(".swatch-option").length < 1) {
                await timeout(100)
                await checkContainer() 
            }
        }
        
    }
    await checkContainer() 
    var result = []
    var sizes = container.querySelectorAll(".swatch-option")
    for (var i = 0; i < sizes.length; i++) {
        var option = sizes[i]
        var y = {
            variant: option.getAttribute("option-label"),
            id: option.getAttribute("option-id"),
            simpleId: option.getAttribute("simple-id"),
            element: option
        }
        result.push(y)  
    }
    return result
}


// Function to perform ATC after fetching sizes
async function ftdAtc(mode,userSize) {
    
    switch (mode) {
        case "random":
            var sizes = await getAvailableSizes()
            var randomSize = sizes[Math.floor(Math.random() * sizes.length)]
            randomSize["element"].click()
            var atcbtn = document.querySelector("#confirm-premium").querySelector(`[type="submit"]`)
            await timeout(3000) // atc delay
            atcbtn.click()
            break
        case "specific":
            var sizes = await getAvailableSizes()
            console.log(userSize)
            await timeout(4000)
            // gets random size & checks if it is included in the size range of the user
            async function getUserSelectedSize() {
                var randomSize = sizes[Math.floor(Math.random() * sizes.length)]
                if (!userSize.includes(randomSize.variant)) {
                    await timeout(25)
                    await getUserSelectedSize()
                }
                else {
                    randomSize["element"].click()
                }
            }
            await getUserSelectedSize()
            
            
            var atcbtn = document.querySelector("#confirm-premium").querySelector(`[type="submit"]`)
            atcbtn.click()
            break
        default:
            break
    }
}




async function runFootdistrict() {
    chrome.storage.local.get(['userSettings'], async function(result) {
        if (result.userSettings) {
            if (result.userSettings.footdistrict) {
                if (result.userSettings.footdistrictAutocart) {
                    if (result.userSettings.footdistrictSelectedSizes.length == 0) {
                        errornotification("[Footdistrict] No size[s] selected")
                        return
                    }
                    if (result.userSettings.footdistrictSelectedSizes.includes("random")) {
                        ftdAtc("random",result.userSettings.footdistrictSelectedSizes)
                    } else {
                        ftdAtc("specific",result.userSettings.footdistrictSelectedSizes)
                    }
                    
                    autofillFootdistrict()
                }
            }
        }
    })
}
runFootdistrict()



// This will fill all input elements
async function autofillFootdistrict() {
    fillelem(document.getElementById("adyen_cc_cc_owner"),"Cornelius Loew")
    fillelem(document.getElementById("adyen_cc-number"),"5354 5631 9050 4611")
    fillelem(document.getElementById("adyen_cc-cvc"),"097")
    fillelem(document.getElementById("adyen_cc-expiryMonth"),"10")
    fillelem(document.getElementById("adyen_cc-expiryYear"),"25")
    fillelem(document.getElementById("encryptedExpiryDate"),"10/25")
    fillelem(document.getElementById("expiryMonth"),"10")
    fillelem(document.getElementById("expiryYear"),"2025")

    await timeout(100)
    await autofillFootdistrict()
}

async function fillElement(elem, input) {
    if (elem) {
        if(elem.value == "") {
            elem.dispatchEvent(new Event("focus", { bubbles: true ,cancelable: true}));
            elem.dispatchEvent(new Event("keydown", { bubbles: true ,cancelable: true}));
            elem.value = input
            elem.dispatchEvent(new Event("change", { bubbles: true ,cancelable: true}));
            elem.dispatchEvent(new Event("input", { bubbles: true ,cancelable: true}));
            elem.dispatchEvent(new Event("blur", { bubbles: true ,cancelable: true}));
        }
        
    } else {
       
        await timeout(250)
        fillElement(elem, input)
    }
}
