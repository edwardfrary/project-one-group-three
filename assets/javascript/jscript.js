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
    body: taskBody
  };

  //load previous task array, push the new object into it then save the array into local storage
  taskArr = loadTask()
  renderTasks(taskArr);
  saveTask(taskObj);
  
});

//Function to render the cards using the inputs from the modal text boxes

function renderTasks(taskObj) {


  //create the card container and then the other elements of the card
  var cardCellEl = $("<div>")
    .addClass("cell");
  var cardContainerEl = $("<div>")
    .addClass("card");
  var cardHeaderEl = $("<div>")
    .addClass("card-divider")
    .text(taskObj[i].title);
  var cardBodyEl = $("<div>")
    .addClass("card-section")
    .text(taskObj[i].body);

  $(cardContainerEl).append(cardHeaderEl);
  $(cardContainerEl).append(cardBodyEl);
  $(cardCellEl).append(cardContainerEl);
  $("#noticeboard-body").append(cardCellEl);
};

function saveTask(taskObj) {
  //first load up the previous data
  dataArr = JSON.parse(localStorage.getItem("data"));
  if (!dataArr) {
    dataArr = [];
  };
  //push in the new data and then save it to local storage
  dataArr.push(taskObj);
  localStorage.setItem("data", JSON.stringify(dataArr));

  //load all the previously saved tasks and render them to the browser

};