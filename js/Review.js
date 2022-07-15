import { getParam, formDataToJSON } from "./utils.js"


export default class review {

    async getReview() {
        const data = await fetch("https://course-tracker-byu.herokuapp.com/schools/").then(res => res.json())
        return data
    }

    async init() {
        const data = await this.getReview()
        console.log(data)
        const select = document.createElement("select")
        data.forEach(element => {
            const option = document.createElement("option")
            option.innerText = element.name
            option.value = element.name
            select.append(option)

        });
        document.querySelector(".courseForm").append(select)

        document.querySelector(".addreview").addEventListener("click", this.addreview())
        document.querySelector(".addreview").addEventListener("click", function() { location.assign("../reviews/result.html") })
        document.querySelector(".courseCode").value = getParam("code")


    }
    async displayReviews() {
        const a = document.createElement("a")
        const data = await this.getReview()
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
    async addreview() {
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
            //         "code": "WDD330",
            //         "school": "Brigham Young University - Idaho",
            //         "grade": "95",
            //         "tags": [
            //             "Helpful",
            //             "Challenging",
            //             "Amazing content"
            //         ],
            //         "review": "This is an example review...."
            //     })
            // }
            // return await fetch("https://course-tracker-byu.herokuapp.com/schools/" + options).then(res => res.json())
    }



}