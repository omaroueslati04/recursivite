const leapyear = function (year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
};

const weather =function(temp)
{
    if (temp<17)
        return "the weather is cold at "+temp+"you should wear a coat ,gloves and probably consider adding a scarf "
    else 
return "the weather is hot at "+temp+"° you should wear a t-shirt ,troncs  and probably consider adding flip-flops "
}


const palindrome =function(str)
{
    if (str.length<=1)
        return true ;
    else 
    {
       if (str[0]===str[str.length-1])
       {
        return(palindrome(str.substring(1,str.length-1)));
       }
       else 
       return false;

    }

}

const power =function(x,n)
{
    
    if (n===0)
        return 1;
    else 
    {
        if (n<0)
            return 1/power(x,-n);
        else
        {
            return x*power(x,n-1);
        }
        
    }
}