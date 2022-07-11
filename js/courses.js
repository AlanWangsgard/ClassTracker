async function getschools() {
    const data = await fetch("https://course-tracker-byu.herokuapp.com/courses/valid").then(res => res.json())
    return data
}

function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

async function main() {
    const school = getParam("schoolName")
    console.log(school)
    const data = await getschools()
    console.log(data)
    const main = document.querySelector("main")


    data.forEach(element => {
        var p = document.createElement("p")
            // p.textContent = element._id + " " + element.name + " " + element.description
        if (element.school == school) {
            var template = `<div class="school-info">
            <section class="school-header">
                <h3><span class="school-title">"${element.name}"</span></h3>
                <button>More Info</button>
            </section>
            <hr>
            <p><span class="school-description">"${element.description}"</span></p>
        </div>`;
            main.innerHTML += template
        }
    });

}

main()