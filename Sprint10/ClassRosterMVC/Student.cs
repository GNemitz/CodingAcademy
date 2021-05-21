﻿using System;
using System.Collections.Generic;
using System.Text;

namespace ClassRosterMVC
{
    class Student : Person
    {
        private string classRank;

        public Student() : base()  //The constructor with no parameters passed, lastName and firstName will be initialized with the person constructor (base)
        {
            classRank = "";
        }

        public Student(string newFirstName, string newLastName, string newClassRank) : base(newFirstName, newLastName)
        {
            classRank = newClassRank;
        }

        public string ClassRank //property
        {
            get { return classRank; }  //get method
            set { classRank = value; } //set method
        }

        public override string ToString()
        {
            return "Student: " + this.FirstName + " " + this.LastName + ", " + this.ClassRank;
        }
    }
}
