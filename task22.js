// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. 

function removechar(str){
    removeAtpositiion= 5;
   newstring = str.substring(0,removeAtpositiion-1) + str.substring(removeAtpositiion,str.length)
   console.log(newstring);
   
}


removechar("Aliraza");