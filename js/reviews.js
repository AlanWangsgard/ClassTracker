async function addreview() {
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "code": "WDD330",
            "school": "Brigham Young University - Idaho",
            "grade": "95",
            "tags": [
                "Helpful",
                "Challenging",
                "Amazing content"
            ],
            "review": "This is an example review...."
        })
    }
    return await fetch("https://course-tracker-byu.herokuapp.com/schools/" + options).then(res => res.json())
}

function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

async function getschools() {
    const data = await fetch("https://course-tracker-byu.herokuapp.com/schools/").then(res => res.json())
    return data
}

function formDataToJSON(formElement) {
    let formData = new FormData(formElement);

    const converted = Object.fromEntries(formData.entries());

    return converted;
}

async function main() {
    const data = await getschools()
    console.log(data)
    const select = document.createElement("select")
    data.forEach(element => {
        const option = document.createElement("option")
        option.innerText = element.name
        option.value = element.name
        select.append(option)

    });
    document.querySelector(".courseForm").append(select)
        // document.querySelector(".addreview").addEventListener("click", function() { location.assign("result.html") })

    document.querySelector(".addreview").addEventListener("click", function() { addreview() })
    document.querySelector(".courseCode").value = getParam("code")


}
async function addreview() {
    const form = document.querySelector("form")
    const json = formDataToJSON(form);
    json.school = document.querySelector("select").value
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


// document.querySelector(".addCourse").addEventListener("click", function() { addCourse() })

main()