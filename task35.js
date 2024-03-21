// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string. 


function checkSpecifiedChar(str,ch)
{
    specifiedposition = str.substring(2,5);
    console.log(specifiedposition)
    for(let i=0;i<specifiedposition.length;i++)
    {
        if(ch=== specifiedposition[i])
        {
            console.log(`specified character  ${ch} exist bt 2 nad 4th position at ${i +3 } position`)
            return;
        }
        else{
            console.log(`specified character  ${ch} not exist bt 2 nad 4th position`)
            return;

        }
    }

}

checkSpecifiedChar("aliraza",'i')