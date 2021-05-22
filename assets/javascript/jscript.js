//VARIABLES
var taskTitle = "";
var taskBody = "";
var taskArr = [];
var taskNumber = 0;

//Handler for creating a new task by clicking the add task button
$("#tasksubmit").on("click", function () {

  //grab the inputted values from the modal textboxes
  taskTitle = $("#taskmodal-header").val();
  taskBody = $("#taskmodal-body").val();

  //Object creation to hold the inputted values
  var taskObj = {
    title: taskTitle,
    body: taskBody,
  };
 
  //load previous task array, push the new object into it then save the array into local storage
  renderTasks(taskObj);
  saveTask(taskObj);
  
  //reset the modals text boxes
 $(".modal-text-title")
 .val("");

 $(".modal-text-body")
 .val("");

});

//Handler for the delete tasks button
$(document).on("click", ".delete-button", function () {
  $(this).closest(".cell").remove();
});

//Function to render the cards using the input from either the modal text boxes OR from local storage memory
function renderTasks(taskObj) {
  //create the card container and then the other elements of the card
  var cardCellEl = $("<div>")
    .addClass("cell");
  var cardContainerEl = $("<div>")
    .addClass("card");
  var cardHeaderEl = $("<div>")
    .addClass("card-divider")
    .text(taskObj.title);
  var cardDeleteEl = $("<a>")
    .addClass("delete-button")
    .attr("style", "color:red;")
    .html("<i class='material-icons'>clear</i>");
  var cardBodyEl = $("<div>")
    .addClass("card-section")
    .text(taskObj.body);

  $(cardContainerEl).append(cardHeaderEl);
  $(cardHeaderEl).append(cardDeleteEl);
  $(cardContainerEl).append(cardBodyEl);
  $(cardCellEl).append(cardContainerEl);
  $("#noticeboard-body").append(cardCellEl);
};

function saveTask(taskObj) {

  //first load up the previous data
  var dataArr = JSON.parse(localStorage.getItem("data"));
  if (!dataArr) {
    dataArr = [];
  };
  //push in the new data and then save it to local storage
  dataArr.push(taskObj);
  localStorage.setItem("data", JSON.stringify(dataArr));
};

function loadTask() {
  //load the previously saved tasks
  var dataArr = JSON.parse(localStorage.getItem("data"));
  if (!dataArr) {
    dataArr = [];
  };
  //for loop to render each object, increment the tracer by 1 to give each card a unique ID
  for (i = 0; i < dataArr.length; i++) {
    renderTasks(dataArr[i]);
  };
};

loadTask();