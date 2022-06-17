var taskIndex = 0;

function addTask() {
    const newTask = $("#metaInput").val() //resgata a task digitada pelo usuário

    if (newTask == '') {
        alert('Digite a tarefa primeiro!')
    } else {
        var cardTask = "<li class='list-group-item d-flex justify-content-between task" + taskIndex + "'>" + newTask + " <div id='task" + taskIndex + "' class='btn-remove'onclick='deleteTask(this.id)'><i class='fa fa-trash-o'></i></div></li>"

        $('#addNewTask').append(cardTask) //adiciona o card da task
        $("#metaInput").val('') //limpa o campo de digitação
        $('.card').show()

        taskIndex += 1 //controla os id (para não serem o mesmo)
    }
}

//deleta a task clicada a partir do seu id
function deleteTask(classTask) {
    $('.' + classTask).remove(); //jquery para remover o id específico

    if ($('#addNewTask li').length <= 0) {
        $('.card').hide()
    }
}