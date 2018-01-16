# MyHealth
**MyHealth** is a project to administer your personal health data (blood pressure, heart frequency, body weight) and view your data as a table or a chart.

It uses an Angular frontend and Microsoft .NET Core 2 / Entity Framework Core 2 for it's backend.

## Features

* Basic authentication using Json Web Tokens (JWT)
* User administration: add, edit and delete users
* User profile
* Add and delete health data
* View health data as table or chart

## Technical details
### Backend ###
* Microsoft .Net Core 2
* Microsoft Entity Framework Core 2
* MS-SQL database using Code First Migrations

**Local installation:**
The backend files are in the subfolder 'MyHealth'. In this folder run:
```
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend:
* Angular 5 (with Angular-CLI)
* Bootstrap 4 for Layout/CSS and some components (npm-package: 'ngx-bootstrap')
* i18n: UI languages english/german (npm-package: nxg-translate)
* charts for data evalutation: chart.js

**Local installation:**
All files of the client side (frontend) are in the subfolder 'Client'. In this folder run:
```
npm start
```
## Usage
After the installation, there is one admin user predefined. User the following credentials for the first login:
```
Email: admin@admin.org
Password: Admin.Admin
```

After the first login you should change your credentials within the user administration or your personal profile.
Then you (the administrator) can create new user accounts by entering their name and email address.

Every user can login by entering:
```
Email: [the email entered by the admin]
Password: [first name].[last name]
```
Then you can enter your health data (blood pressures, heart rates and body weight) and view these as tables and charts.
## ToDo
* Better securing with real password management.
* Data pagination resp. define a date range for the table and chart views