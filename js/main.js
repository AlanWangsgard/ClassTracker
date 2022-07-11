async function getData() {
    info = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "fname": "John",
            "lname": "Doe",
            "major": "Computer Science",
            "school": "Brigham Young University",
            "school_id": "1234567890"
        }
    }
    const data = fetch("https://course-tracker-byu.herokuapp.com/users/")
    return data
}

async function main() {
    var user = await getData()
    console.log(user)
}
main()