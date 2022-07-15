// document.querySelector(".addSchool").addEventListener("click", addSchool)
document.querySelector(".addSchool").addEventListener("click", function() { location.assign("result.html") })

function formDataToJSON(formElement) {
    let formData = new FormData(formElement);

    const converted = Object.fromEntries(formData.entries());

    return converted;
}
async function addSchool() {
    const form = document.querySelector("form")
    const json = formDataToJSON(form);
    console.log(json)
        // const options = {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "name": "Brigham Young University - TestPost",
        //         "ID": "12",
        //         "city": "Clearlake",
        //         "state": "California",
        //         "description": "This is an example description...."
        //     })
        // }
        // return await fetch("https://course-tracker-byu.herokuapp.com/schools/" + options).then(res => res.json())
}