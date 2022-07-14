function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

async function getreviews() {
    const data = await fetch("https://course-tracker-byu.herokuapp.com/reviews/valid").then(res => res.json())
    return data
}

async function main() {
    const a = document.createElement("a")
    const data = await getreviews()
    const code = getParam("code")
    console.log(data)
    a.href = "addReview.html?code=" + code
    a.innerText = "Review"
    const main = document.querySelector("main")
    const div = document.querySelector(".addReview")
    var number = 0
    data.forEach(element => {
        if (element.course_code == code) {
            var p = document.createElement("p")
            p.textContent = element.review + " " + element.grade
            main.append(p)
            number += 1
        } else {
            console.log(number)
        }
    });
    if (number < 1) {
        var p = document.createElement("p")
        p.textContent = "There are no reviews for this course, be the first!"
        main.append(p)
    }
    div.append(a)

}
main()