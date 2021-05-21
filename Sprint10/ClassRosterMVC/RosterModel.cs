using System;
using System.Collections.Generic;
using System.Text;

namespace ClassRosterMVC
{
    class RosterModel
    {
        Instructor myInstructor;  //declare
        List<Student> myClass;

        public RosterModel()
        {
            myInstructor = new Instructor();  //assign value / create instructor for this roster
            myClass = new List<Student>(); //create empty student list
        }

        public int StudentCount()
        {
            return myClass.Count;
        }
        public Student GetStudent(int index)
        {
            return myClass[index];
        }
        public void AddStudent(Student myStudent)
        {
            myClass.Add(myStudent);
        }

        public Instructor GetInstructor()
        {
            return myInstructor;
        }
        public void AddInstructor(Instructor myNewInstructor)  //pass in instructor object 
        {
            myInstructor = myNewInstructor;
        }
    }
}
