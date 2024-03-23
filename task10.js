//  Write a JavaScript function which returns the n rows by n columns identity matrix.

function identityMatrix(n,m)
{
    for(let i=0;i<n;i++)
    {
        let row=''
        for(let j=0;j<m;j++)
        {
            if(i===j)
         {
            row+=1
         }
         else{
            row +=0
         }
        }
        console.log(row)
        
        
    }
}

console.log(identityMatrix(3,3))