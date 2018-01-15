# MyHealth
**MyHealth** is a project to administer your personal health data (blood pressure, heart frequency, body weight) and view your data as a table or a chart.

It uses an Angular frontend and Microsoft .NET Core 2 / Entity Framework Core 2 for it's backend.

## Technical details
### Backend ###
* Microsoft .Net Core 2
* Microsoft Entity Framework Core 2
* MS-SQL database using Code First Migrations

**Local installation:**
The backend files are in the subfolder 'MyHealth'. In this folder run:
`dotnet restore
dotnet ef database update
dotnet run`

### Frontend:
* Angular 5 (with Angular-CLI)
* Bootstrap 4 for Layout/CSS and some components (npm-package: 'ngx-bootstrap')
* i18n: UI languages english/german

**Local installation:**
All files of the client side (frontend) are in the subfolder 'Client'. In this folder run:
`npm start`