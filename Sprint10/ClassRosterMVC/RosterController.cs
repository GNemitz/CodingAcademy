using System;
using System.Collections.Generic;
using System.Text;

namespace ClassRosterMVC
{
    class RosterController
    {
        private RosterModel aRosterModel;
        private RosterView aRosterView;

        public RosterController()
        {
            aRosterModel = new RosterModel();
            aRosterView = new RosterView();

            Instructor tempInstructor = new Instructor();  //temp obj for instructor
            //get from user
            tempInstructor.FirstName = aRosterView.GetInstructorFirst();
            tempInstructor.LastName = aRosterView.GetInstructorLast();
            tempInstructor.ContactInfo = aRosterView.GetInstructorContact();
            //move tempinstructor to model
            aRosterModel.AddInstructor(tempInstructor);

            //string newOption = aRosterView.getOption();
            //string result = aRosterModel.performAction(newOption);

            Student tempStudent = new Student();  //temp obj for student
            //get from user
            tempStudent.FirstName = aRosterView.GetStudentFirst();
            tempStudent.LastName = aRosterView.GetStudentLast();
            tempStudent.ClassRank = aRosterView.GetStudentClass();
            //move tempstudent to model
            aRosterModel.AddStudent(tempStudent);

            Instructor temp2Instructor = new Instructor();
            temp2Instructor = aRosterModel.GetInstructor();
            aRosterView.PrintInstructor(temp2Instructor);

            Student temp2Student = new Student();
            temp2Student = aRosterModel.GetStudent(aRosterModel.StudentCount() - 1);
            aRosterView.PrintStudent(temp2Student);



        }


    }
}
