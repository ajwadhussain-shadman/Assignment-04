# Assignment-04

Ans of Q-1:

Difference between getElementById,getElementsByClassName,querySelector ,querySelectorAll
are given in 4 points below:
i. getElementById is used to pick or select a single unique element using an id. 
it returns only a single element.

ii. getElementsByClassName is used to select elements by their class name.it can be single or multiple elements ,depending on how many elements have the same class. it returns an array like html collection.And auto update it self.

iii. querySelector is used to select or pick the first matched element, we can use css  selectors like id,class or tag to use it.

iv. querySelectorAll select all the matched elements by the selector we used.

Ans of Q-2:

The step by which i create and insert a new element into the dom are:
i. first i call  the document.createElement() function and pass the element tag i want to create.and then store it to any variable like newElement=document.createElement('div');
ii.Then i add any HTML,class,id or Text if i want to . like example:                        newElement.innerText="Hello";
iii.And at last i insert it into the dom, append it into a parent element like 
    parentElement.append(NewElement);

Ans of Q-3:

Event bubbling means upward propagation of the event object or trigger until it reached the document. 
When a specific event happen to a element like a button element , the event first went to the element that called the event and then it go to its parent ,grand parent until it reaches the document.

Ans of Q-4: 
Event Delegation is a process where we use the event bubbling technique efficiently to handle an event. Instead of using multiple event listener to child elements, we add one event listener to the parent element and use event bubbling to handle the event.
Its useful because we don't have to use multiple event listener,so 
                  i.the code looks cleaner
                  ii.memory efficient

Ans of Q-5: 
Difference between preventDefault() and stopPropagation() are:
i.preventDefault() stop the browser to do some specific works for an event like  : stop refresh, stop link navigation, page scrolling etc.
ii. stopPropagation() prevents the event from bubbling to parents elements .This method stop the propagation from the current event.   


