// below is an array
let results;

const $senatorListElement = $('#senator-list');

const response = $.ajax({
    url: "https://api.propublica.org/congress/v1/116/senate/members.json",
    headers: {
        "X-API-Key": "Ca2Kz91yFZHJQS0StMZLXGHYHm7tNaIRLqq4gvJK"
    }
});
response.then(data => {
    results = data.results[0].members;
    filterResults();
});


function filterResults() {
    results = results.filter(function(element) {
        return element.gender === "F"
    });
    render();
}


function generateSenatorUI() {
    let html;
    html = results.map(function(element) {
        return`
        <div class="senator-info">
            <div class="senator-info-items">${element.title}</div>
            <div class="senator-info-items">${element.first_name}</div>
            <div class="senator-info-items">${element.last_name}</div>
            <div class="senator-info-items">${element.next_election}</div>
        </div>
        `;
    }).join("");
    return html
}

function render() {
    const senatorList = generateSenatorUI();
    $senatorListElement.html(senatorList);
}

// =============================================================

// let resultsRep;

// const $repListElement = $('#rep-list');

// const response = $.ajax({
//     url: "https://api.propublica.org/congress/v1/116/house/members.json",
//     headers: {
//         "X-API-Key": "Ca2Kz91yFZHJQS0StMZLXGHYHm7tNaIRLqq4gvJK"
//     }
// });
// response.then(data => {
//     result = data.results[0].members;
//     filterResults();
// });


// function filterResults() {
//     resultsRep = results.filter(function(element) {
//         return element.gender === "F"
//     });
//     render();
// }


// function generateRepUI() {
//     let html;
//     html = results.map(function(element) {
//         return`
//         <div class="rep-info">
//             <div class="rep-info-items">${element.title}</div>
//             <div class="rep-info-items">${element.first_name}</div>
//             <div class="rep-info-items">${element.last_name}</div>
//             <div class="rep-info-items">${element.next_election}</div>
//         </div>
//         `;
//     }).join("");
//     return html
// }

// function render() {
//     const repList = generateRepUI();
//     $repListElement.html(repList);
// }


// api key:
//  Ca2Kz91yFZHJQS0StMZLXGHYHm7tNaIRLqq4gvJK


// const response = $.ajax({
//     url: "https://api.propublica.org/congress/v1/116/senate/members.json",
//     headers: {
//         "X-API-Key": "Ca2Kz91yFZHJQS0StMZLXGHYHm7tNaIRLqq4gvJK"
//     }
// })
// response.then(data => {
//     // $('#senator').html(data.results[0].members[1].first_name));
    
//     console.log(data);
//     $('#senatorList').html(data.results.members)
// });

