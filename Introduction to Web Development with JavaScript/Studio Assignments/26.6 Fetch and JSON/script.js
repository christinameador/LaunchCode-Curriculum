window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        console.log(response);

        response.json().then(function(json) {
            console.log(json);

            for (let i=0; i < json.length; i++){
                const astronaut = document.getElementById("container");
                astronaut.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `;

                //Bonus 2
                let elements = document.querySelectorAll("li:nth-child(2)");
                console.log(elements);
                if(json[i].active){
                    elements[i].style.color = "green";
                 }

            }
        
            //Bonus 1

            
            //Bonus 3
        
        });
    });
 });