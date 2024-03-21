//Write a JavaScript program to find the largest of three given integers.  


function findLargest(n1,n2,n3)
{
    if(n1>n2 && n1>n3)
    {
        return n1;
    }
    else if(n2>n3  && n2>n1)
    {
        return n2;
    } 
   
    else{
        return n3;
    }

}


console.log("largest Number is ;" + findLargest(9,4,5))