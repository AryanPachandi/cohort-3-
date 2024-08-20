
        let todos = [];

        function addTodo() {
            const input = document.querySelector("#todo-input");
            todos.push({ title: input.value });
            input.value = '';
            render();
        }

        function deleteLastTodo() {
            todos.pop(); 
            render();
        }
        
        function deleteFirstTodo() {
            todos.splice(0, 1);
            render();
        }
        function edit_todo(index) {
          const newtodo= prompt("enter your new TODO",) 
                  if (newtodo!==null&&newtodo!=="") {
                    todos[index].title=newtodo;
                    render();
                  }
        }
        function completetodo(index) {
            todos[index].completed = !todos[index].completed;
            render();
            
            
        }
        function todocomponent(todos, index) {
            const div = document.createElement("div");
            const h1 = document.createElement("h1");
            const button = document.createElement("button");
            const editbnt =document.createElement("button");
            const completebtn =document.createElement("button")
            h1.innerHTML = todos[index].title;
            h1.className = todos[index].completed ? "completed" : "";
     
          completebtn.innerHTML = todos[index].completed ? "Undo" : "Complete";
             completebtn.className = "completebtn-btn";
           completebtn.onclick = () => completetodo(index);

            editbnt.innerHTML="edit";
            editbnt.onclick=()=>edit_todo(index);
              
            completebtn.className="compt";
            editbnt.className="edit-button"
            div.className="addedtodo";
            button.innerHTML = "Delete";
            button.className="butt"
            button.onclick = () => {
                todos.splice(index, 1);
                render(); 
            };
            
            
            div.append(h1);
            div.append(button);
            div.append(editbnt)
            div.append(completebtn);
            return div;
        }

        function render() {
            const todosContainer = document.querySelector("#todos");
            todosContainer.innerHTML = "";
            for (let i = 0; i < todos.length; i++) {
                const element = todocomponent(todos, i);
                todosContainer.appendChild(element);
            }
        }
   