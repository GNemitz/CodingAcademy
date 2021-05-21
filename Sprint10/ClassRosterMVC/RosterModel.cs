using System;
using System.Collections.Generic;
using System.Text;

namespace ClassRosterMVC
{
    class RosterModel
    {
        private string instrFirstName;
        private string instrLastName;
        private string instrContactInfo;

        public RosterModel()
        {
            instrFirstName = "";
            instrLastName = "";
            instrContactInfo = "";
        }

        public string InstrFirstName
        {
            get { return instrFirstName; }
            set { instrFirstName = value; }
        }
        public string InstrLastName
        {
            get { return instrLastName; }
            set { instrLastName = value; }
        }
        public string InstrContactInfo
        {
            get { return instrContactInfo; }
            set { instrContactInfo = value; }
        }

        public string performAction(string newOption)
        {
            switch (newOption)
            {
                case "1":  //add student
                           //get student
                    break;
                case "2":  //print roster
                    Console.WriteLine(myInstructor);
                    //foreach (Student aStudent in myClass)
                    //    Console.WriteLine(aStudent);
                    break;
                case "3":  //quit
                    Console.WriteLine("Good Buy!");
                    //loopFlag = false;                   
                    break;
                // Return text for an incorrect option entry.
                default:
                    Console.WriteLine("Must select 1, 2, or 3!");
                    break;
            }
        }
    }
}
