function search() {
  var name = document.getElementById('input').value;


  var agentNames=["Gerald Fero","Bona Oma","Sivo Kato","Gaga Javo","Aggy Tana","Eric Doro","Angie Komi","Merah Jana","Tommy Vero","Veida Obi","Steve Kari","Mandi Sato","Mimo Sive","Naomi Cotte","Ton Wawi"];

  for(var index=0; index < agentNames.length; index+= 1) {

    if (name === agentNames[index]) {
      //salert (agentNames[index] + ' is an agent');
      alert(agentNames[index] + ' is a listed agent');
      document.getElementById('output').innerHTML="A certified listed agent.";
    }
    else  {
      alert(name + ' is not a listed agent');
      break;
      document.getElementById('output').innerHTML="Not a certified listed agent.";

    }
  }


}
