function validateForm() {
  var x = document.forms["myForm"]["Name"].value;
  if (x == "") {
    alert("This is required");
    return false;
  }
//business logic
function agent (AgentName, phonenumber, license_){
  this.AgentName = AgentName;
  this.Phonenumber = Phonen;
  this.License = License;
}
//user interface logic
$(document).ready(function)(){
  $(form#new-Agent).submit(function(event){
    event.preventDefault();
    var inputtedAgentName = $("input#new-Agent").val();
    var inputtedPhonenumber = $("input#Phonenumber").val();
    var inputtedLicense = $("input#new-License").val();

    var newAgent = new Agent(inputtedAgentName,inputtedPhonenumber,inputtedLicense);

    $("ul#Agents").append("<li><span class='Agent>'" +newAgent.AgentName +"</span></li>");

    $("input#new-Agentname").val("");
    $("input#new-Phonenumber").val("");
    $("input#new-License").val("");
  });
});
