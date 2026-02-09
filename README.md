ERP System Backend (ASP.NET Core + EF Core)
==========================================

How to run (Visual Studio):
1. Open ERPSystem.csproj in Visual Studio 2022+.
2. Restore NuGet packages.
3. Update database using EF Core tools (Package Manager Console):
   - Add-Migration InitialCreate
   - Update-Database
   These commands will create the database specified in appsettings.json (LocalDB).

How to run (dotnet CLI):
1. From project folder: dotnet restore
2. dotnet ef migrations add InitialCreate
3. dotnet ef database update
