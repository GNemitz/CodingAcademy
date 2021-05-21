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
    }
}
