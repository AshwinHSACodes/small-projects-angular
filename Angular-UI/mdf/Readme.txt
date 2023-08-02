This is angular project is for basic form submit action.

Steps:
1.npm install bootstrap --save (This command will install bootstrap in your project)
2.Copy custom css folder into src inside  angular application. (This folder contains the css used for the html page)
3.Add this line "node_modules/bootstrap/dist/css/bootstrap.min.css" into angular.json file inside styles array. (This will update angular.json file with needed changes to reflect bootstrap installation)
4.In app.module.ts 
	import { ReactiveFormsModule } from '@angular/forms';
	and update the same in imports[] array
	imports: [
		ReactiveFormsModule
	]
5.In app.component.ts import { FormGroup, FormControl, Validators } from '@angular/forms';
	Then create a form group called loginForm and then add onSubmit() function.
	Please follow the code in the app.component.ts file and replace contents where ever needed.
6.Replace the custom html file contents to app.component.html. (This will copy the login page created)

7.If page is loading up with text boxes and buttons but not as expected then , check out if anything is to be added in styles.css file.
8.Test the application, the console shold print the text entered in input username and password text boxes on clicking of submit button.

