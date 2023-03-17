//funcção de add tarefa
function addTask(){

    //titulo da tarefa
    const tasktitle = document.querySelector("#task-title").value

    if(tasktitle){

        const template = document.querySelector(".template")

        const newtask = template.cloneNode(true)

        //add titulo
        newtask.querySelector(".task-title").textContent = tasktitle

        //remover as classes desnecessárias
        newtask.classList.remove("template")
        newtask.classList.remove("hide")

        //add tarefa na lista

        const list = document.querySelector("#task-list")

        list.appendChild(newtask)

        //adicionar evento de remover
        const removeBtn = newtask.querySelector(".remove-btn").addEventListener("click", function(){
            removetask(this)
        })

        //add evento de completar tarefa
        const donebtn = newtask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this)
        })

        //limpar texto
        document.querySelector("#task-title").value = ""

    }
}

//função de remover tarefa
function removetask(task){
    task.parentNode.remove(true)
}

//function completar a tarefa
function completeTask(task) {
    const taskcomplete = task.parentNode

    taskcomplete.classList.toggle("done")
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click", function(e){

    e.preventDefault()

    addTask()
})

