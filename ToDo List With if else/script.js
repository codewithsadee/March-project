/* ======== ToDo List With Conditional Statement =========
    Date : 27/3/2021
*/

var toDo, complete;
toDo = prompt("What's your today's plan?");
complete = prompt("ToDo Status").toLowerCase();

if (complete == "yes") {
  document.write(
    "<div container><div content><h1>ToDo List</h1><ul><li><del>" +
      toDo +
      "</del></li>"
  );
  toDo = prompt("What's your today's plan?");
  complete = prompt("ToDo Status").toLowerCase();

  if (complete == "yes") {
    document.write("<li><del>" + toDo + "</del></li>");
    toDo = prompt("What's your today's plan?");
    complete = prompt("ToDo Status").toLowerCase();

    if (complete == "yes") {
      document.write("<li><del>" + toDo + "</del></li>");
    } else {
      document.write("<li>" + toDo + "</li>");
    }
  } else {
    document.write("<li>" + toDo + "</li>");
  }
} else if (complete == "no") {
  document.write(
    "<div container><div content><h1>ToDo List</h1><ul><li>" +
      toDo +
      "</li></div></div>"
  );
}
