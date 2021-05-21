using System;
using System.Collections.Generic;  //adding for list

namespace ClassRoster
{
    class Program
    {
        static void Main(string[] args)
        {
            /*Console.WriteLine("Pratice with classes and objects...");

            Instructor myInstructor1 = new Instructor("Alec", "Engebretson", "alec.engebretson@doane.edu");
            Instructor myInstructor2 = new Instructor();
            myInstructor2.FirstName = "Gwen";
            myInstructor2.LastName = "Nemitz";
            myInstructor2.ContactInfo = "gwennemitz@yahoo.com";

            Student myStudent1 = new Student("Megan", "Nemitz", "Freshman");
            Student myStudent2 = new Student();
            myStudent2.FirstName = "Brett";
            myStudent2.LastName = "Nemitz";
            myStudent2.ClassRank = "Junior";

            Console.WriteLine(myInstructor1);
            Console.WriteLine(myInstructor2);
            Console.WriteLine(myStudent1);
            Console.WriteLine(myStudent2);  */

            //get the instructor
            Instructor myInstructor = new Instructor();
            Console.Write("Please enter the instructor's first name: ");
            myInstructor.FirstName = Console.ReadLine();
            Console.Write("Please enter the instructor's last name: ");
            myInstructor.LastName = Console.ReadLine();
            Console.Write("Please enter the instructor's contact info: ");
            myInstructor.ContactInfo = Console.ReadLine();

            //Initialize the array of students  // why do we use list instead of array???
            //string[] myClass = new string[]; //array must specify size
            List<Student> myClass = new List<Student>();  // must instantiate it 
            
            //Initialize the flag for looping
            bool loopFlag = true;
            //Declare the user choice
            string userChoice;

            while (loopFlag)
            {
                //print the menu
                Console.WriteLine("1. Add a student to the roster.");
                Console.WriteLine("2. Print the roster.");
                Console.WriteLine("3. Quit.");
                Console.WriteLine("Please enter a 1 or 2 or 3: ");
                userChoice = Console.ReadLine();

                if (userChoice == "1")
                {
                    //get new student and place it in the object
                    Student newStudent = new Student();
                    Console.Write("Please enter the student's first name: ");
                    newStudent.FirstName = Console.ReadLine();
                    Console.Write("Please enter the student's last name: ");
                    newStudent.LastName = Console.ReadLine();
                    Console.Write("Please enter the student's class rank: ");
                    newStudent.ClassRank = Console.ReadLine();

                    //add student to the array
                    myClass.Add(newStudent);
                    //myClass[myClass.Length] = newStudent;
                }
                else if (userChoice == "2")
                {
                    Console.WriteLine(myInstructor);
                    foreach (Student aStudent in myClass)
                        Console.WriteLine(aStudent);
                }
                else if (userChoice == "3")
                {
                    Console.WriteLine("Good Bye!");
                    loopFlag = false;
                }
                else Console.WriteLine("Please enter 1, 2, or 3");
            }

        }
    }
}
