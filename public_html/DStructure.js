/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function isPalindrome(str){
    return str.split('').reverse().join('') === str;
    } 




function getPalindrome()
{
    var inp=document.getElementById("txt1");
    var str=inp.value;
    if(isPalindrome(str)===true)
    {
        document.getElementById("strP").innerHTML="true";
    }
    else
    {
        document.getElementById("strP").innerHTML="false";
    }
    

}
