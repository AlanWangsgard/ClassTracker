const data = fetch("https://course-tracker-byu.herokuapp.com/schools/", {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
})


// console.log(data)