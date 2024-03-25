//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1


function sortNumbers(n1,n2,n3)
{
    if(n3>n2 && n3>n1)
    {
        if(n1>n2)
        {
            console.log(`${n3} , ${n1} ,${n2}`)
        }
        else{
            console.log(`${n3} , ${n2} ,${n1}`)
        }
    }
    else if(n2>n1 && n2>n3)
    {
        if(n1>n3)
        {
            console.log(`${n2} , ${n1} ,${n3}`)
        }
        else{
            console.log(`${n2} , ${n3} ,${n1}`)
        }
    }
    else if(x>y && x>z){
        if(y>z)
        {
            console.log(`${n1} , ${n2} ,${n3}`)
        }
        else{
            console.log(`${n1} , ${n3} ,${n2}`)
        }

    }
}


sortNumbers(0,-1,4)