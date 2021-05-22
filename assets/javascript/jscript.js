//VARIABLES
var taskTitle = "";
var taskBody = "";
var taskArr = [];
var taskNumber = 0;

//Handler for creating a new task by clicking the add task button
$("#tasksubmit").on("click", function(){
    
    //grab the inputted values from the modal textboxes
    taskTitle = $("#taskmodal-header").val();
    taskBody = $("#taskmodal-body").val();

    //Object creation to hold the inputted values
    var taskObj = {
        title: taskTitle,
        body: taskBody
    };
    
    //push the Object into the array for storage
    taskArr.push(taskObj);

    renderTasks(taskObj);
});

//Function to render the cards using the inputs from the modal text boxes

function renderTasks(taskObj){
    //create the card container and then the other elements of the card
    var cardCellEl = $("<div>")
    .addClass("cell");
    var cardContainerEl = $("<div>")
    .addClass("card");
    var cardHeaderEl = $("<div>")
    .addClass("card-divider")
    .text(taskObj.title);
    var cardBodyEl = $("<div>")
    .addClass("card-section")
    .text(taskObj.body);
    
    $(cardContainerEl).append(cardHeaderEl);
    $(cardContainerEl).append(cardBodyEl);
    $(cardCellEl).append(cardContainerEl);
    $("#noticeboard-body").append(cardCellEl);

};