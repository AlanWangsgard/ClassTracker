import { formDataToJSON, getParam } from "./utils.js"

export default class Course {
    async getSchools() {
        const data = await fetch("https://course-tracker-byu.herokuapp.com/schools/").then(res => res.json())
        return data
    }

    async getCourses() {
        const data = await fetch("https://course-tracker-byu.herokuapp.com/courses/valid").then(res => res.json())
        return data
    }


    async init() {
        const data = await this.getSchools()
        console.log(data)
        const select = document.createElement("select")
        data.forEach(element => {
            const option = document.createElement("option")
            option.innerText = element.name
            option.value = element.name
            select.append(option)

        });
        document.querySelector(".courseForm").append(select)
        document.querySelector(".addCourse").addEventListener("click", this.addCourse)
        document.querySelector(".addCourse").addEventListener("click", function() { location.assign("result.html") })


    }
    async displayCourses() {
        const school = getParam("schoolName")
        console.log(school)
        const data = await this.getCourses()
        console.log(data)
        const main = document.querySelector("main")


        data.forEach(element => {
            var p = document.createElement("p")
                // p.textContent = element._id + " " + element.name + " " + element.description
            if (element.school == school) {
                var template = `<div class="school-info">
            <section class="school-header">
                <h3><span class="school-title">"${element.name}"</span></h3>
                <span class="reviewButton"><a href="../reviews/index.html?code=${element.code}"><input type="button" value="Review"></a></span>
            </section>
            <hr>
            <p><span class="school-description">"${element.description}"</span></p>
        </div>`;
                main.innerHTML += template
            }
        });
    }
    async addCourse() {
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


}