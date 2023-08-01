This is basic angular project with custom html file taken from free website.

This angular application contains one single html page for basic login(with out any submit button working).

The way to make use of this application code.

First create an angular application in your local using the follwoing command
	ng new <your_new_application_name> (ex : ng new hello_angular_project) 

Follow the following steps mentioned below and make changes in your above newly created project. 


Changes made to basic angular project to reflect the changes.

1.npm install bootstrap --save (This command will install bootstrap in your project)
2.Copy custom css folder into src inside  angular application. (This folder contains the css used for the html page)
3.Replace the custom html file contents to app.component.html. (This will copy the login page created)
5.Add this line "node_modules/bootstrap/dist/css/bootstrap.min.css" into angular.json file inside styles array. (This will update angular.json file with needed changes to reflect bootstrap installation)
6.If page is loading up with text boxes and buttons but not as expected then , check out if anything is to be added in styles.css file.





