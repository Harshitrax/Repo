document.querySelector("form").addEventListener("submit", loca);

let locationArr= JSON.parse(localStorage.getItem("location"))||[];
function loca(event) {
    event.preventDefault();

    let locasobj = {
        country: document.querySelector("#country").value,

        city: document.querySelector("#city").value,

        language:document.querySelector("#language").value,
            };

            locationArr.push(locasobj)
            localStorage.setItem("location", JSON.stringify(locationArr))
            // console.log(locationArr)
}
