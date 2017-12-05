﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using MyHealth.Core.Models;
using MyHealth.Persistence;
using System;

namespace MyHealth.Migrations
{
    [DbContext(typeof(MyHealthDbContext))]
    [Migration("20171123174816_AddUserHeight")]
    partial class AddUserHeight
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MyHealth.Core.Models.BloodPressure", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<byte>("Diastolic");

                    b.Property<byte>("Systolic");

                    b.Property<DateTime>("Time");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("BloodPressures");
                });

            modelBuilder.Entity("MyHealth.Core.Models.BodyWeight", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Time");

                    b.Property<int>("UserId");

                    b.Property<float>("Weight");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("BodyWeights");
                });

            modelBuilder.Entity("MyHealth.Core.Models.PulseRate", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<byte>("Rate");

                    b.Property<DateTime>("Time");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("PulseRates");
                });

            modelBuilder.Entity("MyHealth.Core.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("BirthDate");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<byte>("Gender");

                    b.Property<float>("Height");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("MyHealth.Core.Models.BloodPressure", b =>
                {
                    b.HasOne("MyHealth.Core.Models.User")
                        .WithMany("BloodPressures")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("MyHealth.Core.Models.BodyWeight", b =>
                {
                    b.HasOne("MyHealth.Core.Models.User")
                        .WithMany("BodyWeights")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("MyHealth.Core.Models.PulseRate", b =>
                {
                    b.HasOne("MyHealth.Core.Models.User")
                        .WithMany("PulseRates")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
