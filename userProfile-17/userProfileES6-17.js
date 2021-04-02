var cover, profile, Name;

cover = prompt("Your Cover Image URL :");
profile = prompt("Your Profile Image URL :");
Name = prompt("Your Full Name :");

document.write(`<div class="coverImg"><img src="${cover}"></div>`);
document.write(`<div class="profileImg"><img src="${profile}"></div>`);
document.write(`<div class="Name">${Name}</div>`);
