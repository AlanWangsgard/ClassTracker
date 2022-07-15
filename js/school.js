 export default class Schools {
     async getschools() {
         const data = await fetch("https://course-tracker-byu.herokuapp.com/schools/").then(res => res.json())
         return data
     }
     async init() {
         document.querySelector(".addSchool").addEventListener("click", this.addSchool)
         document.querySelector(".addSchool").addEventListener("click", function() { location.assign("result.html") })
     }
     async displaySchools() {
         const data = await this.getschools()
         console.log(data)
         const main = document.querySelector("main")


         data.forEach(element => {
             var p = document.createElement("p")
                 // p.textContent = element._id + " " + element.name + " " + element.description
             var template = `<div class="school-info">
            <section class="school-header">
                <h3><span class="school-title">"${element.name}"</span></h3>
                <button>More Info</button>
                <a class="button" href="../courses/index.html?schoolName=${element.name}">Courses</a>
            </section>
            <hr>
            <p><span class="school-description">"${element.description}"</span></p>
        </div>`;
             main.innerHTML += template

         });
         //  document.querySelector(".add").addEventListener("click", function() { addSchool() })

     }

     async addSchool() {

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
     }
 }