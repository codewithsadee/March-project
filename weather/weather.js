var farhn, cels, q;
alert("Check Weather update");
q = prompt("What do want to convert ?").toLocaleLowerCase();
if (q == "fahrenheit") {
  cels = Number(prompt("Enter Celsius :"));
  farhn = cels * (9 / 5) + 32;
  document.write("Fahrenheit = " + farhn);
} else if (q == "celsius") {
  farhn = Number(prompt("Enter Fahrnheit :"));
  cels = (farhn - 32) * (5 / 9);
  document.write("Celsius = " + cels);
} else {
  document.write("What do you want to convert ?");
}
