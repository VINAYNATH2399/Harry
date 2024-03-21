
// Q1 Create a navbar and change the color of its first element to red.
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"


// Q2 Create a table without tbody. Now use " view page sourse" button to check whether it has a tbody ot not?
// Ans: No

// Q3 Create an element with 3 children Now change the color of first and last element to green
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

// Q4 Write a javascript code to change background of all li tags to cyan?

Array.from(document.getElementsByTagName('li')).forEach(element => {
    element.style.background = "cyan"
});