using System;
using System.Collections.Generic;
using System.Text;

namespace ClassRosterMVC
{
    class RosterView
    {
        public RosterView()
        {
            Console.WriteLine("Class Roster in C#\r");
            Console.WriteLine("------------------------\n");
        }

        public string GetInstructorFirst()
        {
            Console.Write("Please enter the instructor's first name: ");
            string newInstrFirst = Console.ReadLine();
            return newInstrFirst; 
        }
        public string GetInstructorLast()
        {
            Console.Write("Please enter the instructor's last name: ");
            string newInstrLast = Console.ReadLine();
            return newInstrLast;
        }
        public string GetInstructorContact()
        {
            Console.Write("Please enter the instructor's contact info: ");
            string newInstrContactInfo = Console.ReadLine();
            return newInstrContactInfo;
        }

        public string getOption()
        {
            Console.WriteLine("1. Add a student to the roster.");
            Console.WriteLine("2. Print the roster.");
            Console.WriteLine("3. Quit.");
            Console.WriteLine("Please enter a 1 or 2 or 3: ");
            string userOption = Console.ReadLine();
            return userOption;

        }

        public string GetStudentFirst()
        {
            Console.Write("Please enter the student's first name: ");
            string newStudentFirst = Console.ReadLine();
            return newStudentFirst;
        }
        public string GetStudentLast()
        {
            Console.Write("Please enter the student's last name: ");
            string newStudentLast = Console.ReadLine();
            return newStudentLast;
        }
        public string GetStudentClass()
        {
            Console.Write("Please enter the student's class rank: ");
            string newStudentClassRank = Console.ReadLine();
            return newStudentClassRank;
        }

        public void PrintInstructor(Instructor theInstructor)
        {
            Console.WriteLine(theInstructor.LastName);
            Console.WriteLine(theInstructor.FirstName);
            Console.WriteLine(theInstructor.ContactInfo);
        }

        public void PrintStudent(Student theStudent)
        {
            Console.WriteLine(theStudent.LastName);
            Console.WriteLine(theStudent.FirstName);
            Console.WriteLine(theStudent.ClassRank);
        }

    }
}
