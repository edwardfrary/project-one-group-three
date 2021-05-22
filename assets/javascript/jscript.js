//VARIABLES
var taskTitle = "";
var taskBody = "";
var taskArr = [];
var traceID = 0;

//Handler for creating a new task by clicking the add task button
$("#tasksubmit").on("click", function () {

  //grab the inputted values from the modal textboxes
  taskTitle = $("#taskmodal-header").val();
  taskBody = $("#taskmodal-body").val();

  //Object creation to hold the inputted values
  var taskObj = {
    id: traceID,
    title: taskTitle,
    body: taskBody,
  };


  //render the modal task input then save the new data.
  renderTasks(traceID, taskObj);
  traceID++;
  saveTask(taskObj);
  //reset the modals text boxes
  $(".modal-text-title")
    .val("");

  $(".modal-text-body")
    .val("");

});

//Function to render the cards using the input from either the modal text boxes OR from local storage memory
function renderTasks(traceID, taskObj) {

  //handler to insert the "onClick" functionality to the delete button
  var deleteBtnHandler = "deleteTask(" + traceID + ")";


  //create the card container and then the other elements of the card
  var cardCellEl = $("<div>")
    .attr("id", traceID)
    .addClass("cell");
  var cardContainerEl = $("<div>")
    .addClass("card");
  var cardHeaderEl = $("<div>")
    .addClass("card-divider")
    .text(taskObj.title);
  var cardDeleteEl = $("<a>")
    .addClass("delete-button")
    .attr("onClick", deleteBtnHandler)
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

//function to handle deleting tasks from the DOM, the task array and localstorage
function deleteTask(deletionIndex) {
  var deleteTaskByID = "#" + deletionIndex;
  $(deleteTaskByID).remove();

  //removes the task from the array and then saves the new array
  console.log(taskArr);
  var index = $.inArray(deletionIndex, taskArr);
   taskArr.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(taskArr));

};

function saveTask(taskObj) {

  //first load up the previous data
  taskArr = JSON.parse(localStorage.getItem("data"));
  if (!taskArr) {
    taskArr = [];
  };
  //push in the new data and then save it to local storage
  taskArr.push(taskObj);
  localStorage.setItem("data", JSON.stringify(taskArr));
};

function loadTask() {

  //load the previously saved data
  taskArr = JSON.parse(localStorage.getItem("data"));
  if (!taskArr) {
    taskArr = [];
  };

  //for loop to render each object, increment the tracer by 1 to give each card a unique ID
  for (i = 0; i < taskArr.length; i++) {
    renderTasks(traceID, taskArr[i]);
    traceID++;
  };
};

loadTask();