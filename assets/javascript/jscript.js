//Handler for creating a new task by clicking the add task button
$("#tasksubmit").on("click", function(){
    taskTitle = $("taskmodal-header").val();
    taskBody = $("taskmodal-body").val();
    console.log(taskTitle, taskBody);
});