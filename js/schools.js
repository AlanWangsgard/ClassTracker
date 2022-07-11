async function getschools() {
    const data = await fetch("https://course-tracker-byu.herokuapp.com/schools/").then(res => res.json())
    return data
}

async function main() {
    const data = await getschools()
    console.log(data)
    const main = document.querySelector("main")


    data.forEach(element => {
        var p = document.createElement("p")
        p.textContent = element._id
        main.append(p)

    });

}

main()