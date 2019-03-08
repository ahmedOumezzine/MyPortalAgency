﻿using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MyPortalAgency_API.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PageView",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageView", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PageContentView",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Logo = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    More = table.Column<string>(nullable: true),
                    PageViewModelId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PageContentView", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PageContentView_PageView_PageViewModelId",
                        column: x => x.PageViewModelId,
                        principalTable: "PageView",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "PageView",
                columns: new[] { "Id", "Description", "Title", "Type" },
                values: new object[] { new Guid("58121566-f3f8-4bac-841a-e0996798da0a"), "Shine Infosoft is a leading service provider with extensive experience in IT outsourcing services to enterprises across the globe. We are specialist in mobile application development, web development, software development, e-commerce, hybrid application development, SEO (Search Engine Optimization).", "ABOUT SHINE INFOSOFT", "AboutUs" });

            migrationBuilder.InsertData(
                table: "PageContentView",
                columns: new[] { "Id", "Description", "Logo", "More", "PageViewModelId", "Title", "Type" },
                values: new object[,]
                {
                    { new Guid("dabe0395-04cb-4f68-9ade-704b52115f53"), " for Qaulity Assurance in recently 2017. Since our founding in 2014, we have been among India's most influential and successful IT Companies, with strong year on year growth, a multitude of awards and a growing reputation as the India’s leading independent agency. ", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAYAAADD2FojAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGOTEyMkY0NEQ4OTJFNzExQjU3NEZCQzM3MDc3NzFBNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4Mjc4NkIzQjkyRTgxMUU3QTA4OEZCRThGMzAxMkZCRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4Mjc4NkIzQTkyRTgxMUU3QTA4OEZCRThGMzAxMkZCRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5NTk5RjQ5RTc5MkU3MTFBOERBOEU0MThEMjgzQkQ2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY5MTIyRjQ0RDg5MkU3MTFCNTc0RkJDMzcwNzc3MUE0Ii8+IDwvcmRmOkRlc2NyaXB0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", "", new Guid("58121566-f3f8-4bac-841a-e0996798da0a"), "2017", "OurStory" },
                    { new Guid("7a8daff9-efee-41a3-97e8-31cca18acd8a"), "Jitesh Joshi inaugurated Shine Infosoft with a dynamic team of 40, since then we have delivered the best IT solutions. we thoroughly pay attention to detail, provide excellent support and customer service. Our process and hard work are appreciated by our clients who strongly recommend us as a reliable custom CMS and e-commerce web development company in India.", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAYAAADD2FojAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGOTEyMkY0NEQ4OTJFNzExQjU3NEZCQzM3MDc3NzFBNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI4Njk1QzkyRTgxMUU3QTcxRUVDNzkyRUQ1RDBBRSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5ODI4Njk1QjkyRTgxMUU3QTcxRUVDNzkyRUQ1RDBBRSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNTk5RjQ5RTc5MkU3MTFBOERBOEU0MThEMjgzQkQ2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY5MTIyRjQ0RDg5MkU3MTFCNTc0RkJDMzcwNzc3MUE0Ii8+IDwvcmRmOkRlc2NyaXB0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", "", new Guid("58121566-f3f8-4bac-841a-e0996798da0a"), "2018", "OurStory" },
                    { new Guid("26a00059-5f00-4764-b7e7-6e06a0335f07"), "Acting ethically direct, honest and trustworthy through what we convey, matching our actions to our commitments and taking ownership of expected outcomes.", "fa fa-bookmark", "", new Guid("58121566-f3f8-4bac-841a-e0996798da0a"), "Integrity ", "PillarsofOurSuccess" },
                    { new Guid("d8b46498-3194-4459-bf47-a89df149bb66"), "Delivering industry’s best and innovative solutions by enabling customers to turn into high-performance business units by our team.", "fa fa-users", "", new Guid("58121566-f3f8-4bac-841a-e0996798da0a"), "Excellent Team ", "PillarsofOurSuccess" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_PageContentView_PageViewModelId",
                table: "PageContentView",
                column: "PageViewModelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "PageContentView");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "PageView");
        }
    }
}
