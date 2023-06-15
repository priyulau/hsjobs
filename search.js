//array of available keywords in search results box
let availableKeywords = [
    `Summer Internship`,
    `Hourly Job`,
    `Summer Camp Job`,
    `Coffee Shop Job`,
    `Paid Internship`,
    `Boba Tea Shop Job`,
    `Library Job`,
    `Volunteering in an Animal Shelter`,
];

//grabs HTML DOM results box
const resultsBox = document.querySelector("#result-box");
//grabs HTML DOM input box (what user types into)
const inputBox = document.querySelector("#input-box");

//adds event listener when user is typing into the input box, something happens
inputBox.onkeyup = function() {
    //assigning variable to array passed into function
    let result = [];
    //assigning variable input to value typed into inputBox
    let input = inputBox.value;
    //if typed input is any length greater than nothing
    if (input.length) {
        //produce an array from availableKeywords based on user typed content
        result = availableKeywords.filter((keyword) => {
            //changes keyword strings and typed input to lowercase so can compare in a way that isn't case sensitive
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        display(result);
        //if there is no result that matches what is typed in
        if (!result.length) {
            //clear out the resultsbox HTML DOM
            resultsBox.innerHTML=``;
        }
    }
}

//creating function that will update the keyword list based on what is typed in
function display(result){
    //creating a variable that returns an array of matching keywords
    const content = result.map((list) => {
        //returns individual list items for each thing in the list
        return "<li onclick=selectInput(this)>" + list + "<li>";
    });

    //updates the resultsBox HTML with a list of strings / list items based on matching keywords
    resultsBox.innerHTML = "<ul>" + content.join(``) + "</ul>";
}

function selectInput (list) {
    //makes it so that the selected item is placed in the inputbox
    inputBox.value = list.innerHTML;
    //makes it so that the results box becomes clear once selection is chosen
    resultsBox.innerHTML=``;
}