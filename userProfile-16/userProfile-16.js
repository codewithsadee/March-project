var profile, cover, Name;

cover = prompt("Cover Type => Tree | Sky | Sea").toLowerCase();
profile = prompt("Choose Gander").toLowerCase();
Name = prompt("Your Full Name");
switch (cover) {
  case "tree":
    document.write("<div cover coverTree></div>");
    break;
  case "sky":
    document.write("<div cover coverSky></div>");
    break;
  case "sea":
    document.write("<div cover coverSea></div>");
  default:
    document.write("<div cover coverDefault></div>");
}

if (profile == "male") {
  document.write("<div profile profileMale></div>");
} else if (profile == "female") {
  document.write("<div profile profileFemale></div>");
} else {
  document.write("<div profile profileDefault");
}

document.write("<div Name>" + Name + "</div>");
