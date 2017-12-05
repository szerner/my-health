using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace MyHealth.Migrations
{
    public partial class AddWeight : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BloodPressures_Users_UserId",
                table: "BloodPressures");

            migrationBuilder.DropForeignKey(
                name: "FK_BodyWeights_Users_UserId",
                table: "BodyWeights");

            migrationBuilder.DropForeignKey(
                name: "FK_PulseRates_Users_UserId",
                table: "PulseRates");

            migrationBuilder.DropIndex(
                name: "IX_PulseRates_UserId",
                table: "PulseRates");

            migrationBuilder.DropIndex(
                name: "IX_BodyWeights_UserId",
                table: "BodyWeights");

            migrationBuilder.DropIndex(
                name: "IX_BloodPressures_UserId",
                table: "BloodPressures");

            migrationBuilder.AddColumn<float>(
                name: "Weight",
                table: "Users",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Weight",
                table: "Users");

            migrationBuilder.CreateIndex(
                name: "IX_PulseRates_UserId",
                table: "PulseRates",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_BodyWeights_UserId",
                table: "BodyWeights",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_BloodPressures_UserId",
                table: "BloodPressures",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_BloodPressures_Users_UserId",
                table: "BloodPressures",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BodyWeights_Users_UserId",
                table: "BodyWeights",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PulseRates_Users_UserId",
                table: "PulseRates",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
