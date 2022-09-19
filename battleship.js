const view = {
  displayMessage: function (msg) {
    const messageArea = document.getElementById("messageArea")
    messageArea.innerHTML = msg
  },
  displayHit: function (location){
    const field = document.getElementById(location)
    field.setAttribute("class", "hit" )
  },
  displayMiss: function (location){
    const field = document.getElementById(location)
    field.setAttribute("class", "miss" )
  },
};

view.displayMiss("00")
view.displayHit("34")
view.displayMiss("55")
view.displayHit("12")
view.displayMiss("25")
view.displayHit("26")

view.displayMessage("bla bla")