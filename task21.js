// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

function addstring(str)
{
    if(str.substring(0,2)==='Py')
    {
        return str;
    }
    else{
        return 'Py' + str;
    }
}


console.log(addstring("PyHello"));