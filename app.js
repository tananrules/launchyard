var users = [
  {
  name: "Sanchez Hopkins",
  designation: "Founder and CEO",
  avatar: "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
  name: "Abigail Shields",
  designation: "Software Engineer",
  avatar: "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
  name: "Juliette Thompson",
  designation: "Frontend engineer",
  avatar: "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
  name: "Marks Whitehead",
  designation: "Accountant",
  avatar: "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
  name: "Ratliff Murphy",
  designation: "Software Engineer",
  avatar: "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
  name: "Alyce Hoffman",
  designation: "Frontend engineer",
  avatar: "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
  name: "Bauer Cantrell",
  designation: "Advisor",
  avatar: "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
  name: "Talley Hayden",
  designation: "Software Engineer",
  avatar: "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
  name: "Gonzalez Hurley",
  designation: "Lead Designer",
  avatar: "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
  name: "Trina Bishop",
  designation: "Designer",
  avatar: "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  }
];

function addNewField() {
  var styles = [];
  for(var i=1; i<users.length+1; i++) {
    styles.push(document.getElementById('list').children[i].style.display);
  }
  if(styles.indexOf("inline-block") === -1) {
    document.getElementById('new').style.display = "inline-block";
  } else {
    document.getElementById('new').style.display = "none";
  }
}

function removeNewField() {
  document.getElementById('new').style.display = "none";
}

function addNew() {
  var newUser = {
    name: document.getElementById('newName').value,
    designation: document.getElementById('newDesignation').value,
    avatar: document.getElementById('newAvatarUrl').value
  }

  users.push(newUser);
  
  var li = document.createElement("LI");
  var h3 = document.createElement("H3");
  var name = document.createTextNode(newUser.name);
  var p = document.createElement("P");
  var designation = document.createTextNode(newUser.designation);
  var img = document.createElement("IMG");
  img.setAttribute('src', newUser.avatar)
  h3.appendChild(name);
  p.appendChild(designation);
  li.setAttribute('id', users.length-1);
  li.style.cssText = 'display: inline-block;';
  li.appendChild(h3); li.appendChild(p); li.appendChild(img);
  document.getElementById('list').appendChild(li);

  removeNewField();

  document.getElementById('newName').value = document.getElementById('newDesignation').value = document.getElementById('newAvatarUrl').value = '';
}

function checkInput() {
  var inputValue = document.getElementById('search').value.toLowerCase();

  for(var i=0; i<users.length; i++) {
    var name = users[i].name.toLowerCase();
    if(name.indexOf(inputValue) === -1) {
      document.getElementById(i).style.display = "none";
    } else {
      document.getElementById(i).style.display = "inline-block";
      removeNewField();
    }
  }

  addNewField(users);
}

function writeToHTML(data) {
  var addNew;
  var inner = '';
  var sortedData = [];

  var names = data.map(function(item) {
    return item.name;
  });
  names = names.sort();
  names.forEach(function(name) {
    sortedData.push(data.find(function(item) {
      return item.name === name
    }));
  });

  users = sortedData
  
  for(var i=0; i<sortedData.length; i++) {
    inner += "<li id="+i+"><h3>"+sortedData[i].name+"</h3><p>"+sortedData[i].designation+"</p><img src="+sortedData[i].avatar+"></li>"
  }
  addNew = "<li id='new' style='display: none;'><h3><input class='form-control' id='newName' placeholder='Enter Name'></h3><p><input class='form-control' id='newDesignation' placeholder='Enter Designation'></p><input class='form-control' id='newAvatarUrl' placeholder='Enter URL'><p></p><button class='btn btn-success btn-sm' onclick='addNew()'>Add New User</button><p></p></li>"
  document.write("<ul id='list'>"+addNew+inner+"</ul>"); 
}

writeToHTML(users);