/*

In JavaScript, the Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document 
as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text.

When you manipulate the DOM using JavaScript, you often work with collections of elements. A DOM collection is essentially 
an array-like object that contains a list of DOM elements. There are different types of DOM collections, 
and they are often returned by various DOM methods.


Here are some common types of DOM collections:

NodeList:

A NodeList is a collection of nodes, where each node can be an element, attribute, or other types of nodes.
NodeList is often returned by methods like querySelectorAll or properties like childNodes.

var nodeList = document.querySelectorAll('p'); // Returns a NodeList

HTMLCollection:

An HTMLCollection is similar to a NodeList but specifically contains HTML elements.
It is often returned by properties like getElementsByTagName or getElementsByClassName.


var htmlCollection = document.getElementsByClassName('example'); // Returns an HTMLCollection


Collection of Form Elements:

Form elements can be accessed as a collection using properties like elements on the form element.

var formElements = document.forms[0].elements; // Returns a collection of form elements


Children Collection:

The children property of an element returns a collection of its child elements.

var childrenCollection = parentElement.children; // Returns a collection of child elements
These collections are not true arrays, but they often have similar properties and methods. 
You can iterate over them using loops or use array methods like forEach after converting them to an array.


// Converting a NodeList to an array
var nodeList = document.querySelectorAll('p');
var arrayFromNodeList = Array.from(nodeList);

// Using forEach on a NodeList
nodeList.forEach(function (element) {
  // Do something with each element in the NodeList
});

// Using forEach on an HTMLCollection
var htmlCollection = document.getElementsByClassName('example');
Array.from(htmlCollection).forEach(function (element) {
  // Do something with each element in the HTMLCollection
});

*/