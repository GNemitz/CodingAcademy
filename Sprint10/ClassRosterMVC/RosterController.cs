using System;
using System.Collections.Generic;
using System.Text;

namespace ClassRosterMVC
{
    class RosterController
    {
        private Person aPerson;
        private Instructor aInstructor;
        private Student aStudent;
        private RosterModel aRosterModel;
        private RosterView aRosterView;

        public RosterController()
        {
            aPerson = new Person();
            aInstructor = new Instructor();
            aStudent = new Student();
            aRosterModel = new RosterModel();
            aRosterView = new RosterView();

            aRosterModel.InstrFirstName = aRosterView.GetInstructorFirst();
            aRosterModel.InstrLastName = aRosterView.GetInstructorLast();
            aInstructor.ContactInfo = aRosterView.GetInstructorContact();
            //aRosterModel.InstrContactInfo = aRosterView.GetInstructorContact();

            string newOption = aRosterView.getOption();
            string result = aRosterModel.performAction(newOption);

            Console.WriteLine(aInstructor);
            Console.WriteLine(newOption);

            //aRosterView.printResult(result);
            
        }
        

        }
}
