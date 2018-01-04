using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MyHealth.Migrations
{
   public partial class SeedAdmin : Migration
   {
      protected override void Up(MigrationBuilder migrationBuilder)
      {
         migrationBuilder.Sql("INSERT INTO Users (FirstName, LastName, Email, Admin) VALUES ('Admin', 'Admin', 'admin@admin.org', 'true')");
      }

      protected override void Down(MigrationBuilder migrationBuilder)
      {
         migrationBuilder.Sql("DELETE FROM Users WHERE Email='admin@admin.org'");
      }
   }
}