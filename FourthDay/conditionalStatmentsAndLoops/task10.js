//. Write a JavaScript program to construct the following pattern, using a nested for loop.

//*  
//* *  
//* * *  
//* * * *  
//* * * * *  

function rightAngle(){
    let char;
    for (let i=0;i<=6;i++)
    {
        for(let j=1 ;j<i;j++)
        {
           char =  char+('*')
        }
       console.log(char)
       char=''
    }
}

rightAngle();