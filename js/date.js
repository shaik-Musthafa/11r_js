// ASSIGNMENT 
// Task 1: Get Current Date and Time 
// - Input: None 
// - Output: Current date and time (e.g., "2024-08-28T14:30:00.000Z") Code: output: 
let dd=new Date(); 
console.log(dd); 
// 2024-09-04T10:34:55.407Z 
// Task 2: Add Days to Date 
// - Input: Date string (e.g., "2024-08-28"), number of days to add (e.g., 3) - Output: New date string (e.g., "2024-08-31") 
// Code: 
let dd1=new Date(); 
console.log("Today's date is:") 
console.log(dd1); 
let todayDate=dd.getDate(); 
dd.setDate(dd.getDate()+4); 
console.log("Adding 4 days to Today's date:"); 
console.log("then resultant date is:") 
console.log(dd); 
// output: 
// Today's date is: 
// 2024-09-04T10:39:40.926Z 
// Adding 4 days to Today's date: 
// then resultant date is: 
// 2024-09-08T10:39:40.926Z
// Task 3: Format Date as MM/DD/YYYY 
// - Input: Date string (e.g., "2024-08-28") 
// - Output: Formatted date string (e.g., "08/28/2024") 
// Code: 
let dff=new Date("2024-08-28"); 
let currentFormat=dff.toLocaleDateString(); 
console.log(currentFormat); 
let VaFormat=dff.toLocaleDateString("hi-IN"); 
console.log(VaFormat); 
// output: 08/28/2024 
// Task 4: Get Number of Days Between Dates 
// - Input: Two date strings (e.g., "2024-08-28", "2024-09-01") - Output: Number of days between dates (e.g., 4) 
// Code: 
let date= new Date(); 
let PrevDate=date.getDate(); 
let PreviousDate=PrevDate 
console.log(date) 
date.setDate(date.getDate()+4); 
let Presdate=date.getDate(); 
let PresentDate=Presdate; 
console.log(date); 
console.log(`difference between the dates is: ${PresentDate-PreviousDate}`); output:  
// 2024-09-05T09:41:13.544Z 
// 2024-09-09T09:41:13.544Z 
// difference between the dates is: 4
