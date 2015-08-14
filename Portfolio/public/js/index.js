/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Parse.initialize("IDfYzMTWAIAzc5jmwiDJf9bNxrvxE7QZQjYC6Wdl", "qKGjumiYetRA8NjfyujrlIQMgjlL8cd3TEGOvJkh");

var senddetail = function(){
    var UserObject = Parse.Object.extend("User_information");
    var text = document.getElementsByName("message")[0].value;
    //alert(text);
    if(text === "")
    {
        alert("Enter the text");
        return false;
    }
    else{
  var userObject = new UserObject();
  userObject.save({Message: text}).then(function(object) {
  alert(" Message has been sent");
  document.getElementsByName("message")[0].value ="";
});
  return true;
    }
};