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
addreview()