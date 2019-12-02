// api key:
//  Ca2Kz91yFZHJQS0StMZLXGHYHm7tNaIRLqq4gvJK

// from the NYPD walkthrough lab:

// $('form').on('submit', (event)=>{
//     event.preventDefault();
//     const userInput = $('input[type = "text"]').val();

//     const apiParameter = 'Ca2Kz91yFZHJQS0StMZLXGHYHm7tNaIRLqq4gvJK';

//     const addressParameter = '&t=' +userInput;
//     const typeParameter = '&type='
//     console.log(userInput);

//     const url = 'http://www.omdbapi.com/?' + apiParameter + titleParameter;
//     const promise = $.ajax(url);

//     promise.then(
//         (data) => {
//             console.log(data);
//             console.log(data.Poster);
//             console.log(data.title);
//             $('#title').html(data.Title);
//             $('#year').html(data.Year);
//             $('#rated').html(data.Rated);
//             $('body').prepend('<img id="image" src=' + data.Poster +  '>');
//         }


//         (error) => {
//             console.log('Error: ', error);
//         }
//         );
//     })
// $('form').on('submit', (event) => {
//     event.preventDefault(); // cancels page refresh
//     const userInput = $('input[type = "text"]').val();
//     console.log(userInput);
//     const accessToken = 'Ca2Kz91yFZHJQS0StMZLXGHYHm7tNaIRLqq4gvJK';
// //    const name = '/search/' + userInput;
//     const url = 'https://api.propublica.org/congress/v1/102-116/senate/members.json';
//     console.log(url);

// from Daniel:
const response = $.ajax({
    url: "https://api.propublica.org/congress/v1/102-116/senate/members.json",
    headers: {
        "X-API-Key": "Ca2Kz91yFZHJQS0StMZLXGHYHm7tNaIRLqq4gvJK"
    }
})
response.then(data => 
    $('#senator').html(data.results[0].members[0].title));
    
    // console.log(data));
