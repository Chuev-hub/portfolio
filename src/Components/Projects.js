import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
function Projects() {
  
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className='d-flex flex-column ' > 
                   <Card technology="ASP.NET + REACT"
                   title="Films Site"
                   options="A service for making selections of movies, viewing information about movies,
                   searching for them."
                   date="2021-22"
                   link="/project/8"
                   ></Card>
                     <Card technology="WPF"
                   title="Steam"
                   options="A copy of the Steam platform. There is registration and login, the ability to add 
                   friends, change your information in the personal cabinet.  "
                   date="04.2021"
                   link="/project/7"
                   ></Card>
                     <Card technology="WPF"
                   title="Solar Guitars"
                   options="This application has registration and login, personal account, shopping cart, order list, 
                   the ability to order, view guitars as in a regular online store."
                   date="03.2021"
                   link="/project/6"
                   ></Card>
                     <Card technology="WPF"
                   title="Cars3D"
                   options="WPF application that allows you to do CRUD operations
                   on cars, but they are presented in 3D format."
                   date="11.2020"
                   link="/project/5"
                   ></Card>
                     <Card technology="WinForms"
                   title="Phonebook"
                   options=" This application is written on WinForms C# and it allows us 
                   to do CRUD operations on the list of people (contacts)."
                   date="10.2020"
                   link="/project/4"
                   ></Card>
                     <Card technology="C# ConsoleApp"
                   title="FileManager "
                   options="File Manager - Console application in C #. It has two views, 
                   you can use console commands or arrows between the two panels.Analog of the Total Commander."
                   date="09.2020"
                   link="/project/3"
                   ></Card>
                     <Card technology="Unity"
                   title="Game Platformer"
                   options="The platformer is written in a team on the Unity using C# scripts and is posted on Google Play Market."
                   date="03.2020"
                   link="/project/2"
                   ></Card>
                  <Card technology="C++ ConsoleApp"
                   title="Tester"
                   options="A simple console program that has test categories and 
                   the tests themselves. Has registration and login."
                   date="03.2020"
                   link="/project/1"
                   ></Card>
{/*  
  
  
           
               
               Cars3D 11.2020
               WinForms
               Phonebook 10.2020
               C#
               FileManager 9,2020
              */}
                  </div>
            </div> 
        </div>
    );}
    export default Projects;