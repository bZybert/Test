using Microsoft.EntityFrameworkCore.Migrations;

namespace Core.API.Migrations
{
    public partial class addedSurnameField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Surname",
                table: "Values",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Surname",
                table: "Values");
        }
    }
}
