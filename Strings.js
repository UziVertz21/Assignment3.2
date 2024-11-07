/*George Seals-Ramos
11-5-2024
Assignment 3.1 & 3.2*/
function strings()
{
    var string1 = document.getElementById("firstStr").value; 
    /* Recieves info from string1 on html */
   
    var spellCheck1 = "spellCheck1";
    /* Connection to the HTML to split the word */
    var spellCheck2 = "spellCheck2";
    /* Connection tot the HTML to reverse the spelling*/

    /*First looping method for spell check*/
    var splitStr = string1.split(""); 
    document.getElementById(splitStr);
    var reverseStr = splitStr.reverse();
    document.getElementById(reverseStr);
    var joinStr = reverseStr.join("");
    document.getElementById(joinStr);

    if (string1 == joinStr)
        {
            document.getElementById("checker").innerHTML = "YES";
        }
        else
        {
            document.getElementById("checker").innerHTML = "NO";
        }

    /*Splitting and reversing the word in spellCheck*/
    var spellCheck1 = string1.split("");
    document.getElementById("spellCheck1").innerHTML = spellCheck1;
    var spellCheck2 = spellCheck1.reverse("");
    document.getElementById("spellCheck2").innerHTML = spellCheck2;
}
    /* Function and verifcation process of 2nd form*/
function validate()
{
    var usersname = document.getElementById("nameString").value;
    var zipcode = document.getElementById("numberString").value;
    var lastname = document.getElementById("nameString2").value;
    var fullname = usersname+" "+lastname;   /*Cancatinate of the first and last names*/
    var image = image("fooky.jpeg"); /* Secret message */

   if (fullname.length >=20)
    {
        alert("This is my son, Fukushima Cheetoh Seals-Ramos");
        document.getElementById("formStatus").innerHTML = image;
    }
    else
    {
        document.getElementById("formStatus").innerHTML = "Name is less than 20 characters";
    }

   /*if ((zipcode <=99999) || (zipcode >=9999))
    {
        document.getElementById("formStatus").innerHTML = "Zipcode is correct";
    }*/
}