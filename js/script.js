// api key:
//  Ca2Kz91yFZHJQS0StMZLXGHYHm7tNaIRLqq4gvJK


const response = $.ajax({
    url: "https://api.propublica.org/congress/v1/102-116/senate/members.json",
    headers: {
        "X-API-Key": "Ca2Kz91yFZHJQS0StMZLXGHYHm7tNaIRLqq4gvJK"
    }
})
response.then(data => 
    $('#senator').html(data.results[0].members[0].title));
    
    // console.log(data));
