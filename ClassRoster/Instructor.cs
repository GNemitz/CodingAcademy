using System;
using System.Collections.Generic;
using System.Text;

namespace ClassRoster
{
    class Instructor: Person 
    {
        private string contactInfo;

        public Instructor() : base()  //The constructor with no parameters passed, lastName and firstName will be initialized with the person constructor (base)
        {
            contactInfo = "";
        }

        public Instructor(string newFirstName, string newLastName, string newContactInfo) : base(newFirstName, newLastName) 
        {
            contactInfo = newContactInfo;
        }

        public string ContactInfo //property
        {
            get { return contactInfo; }  //get method
            set { contactInfo = value; } //set method
        }

        public override string ToString()
        {
            return "Instructor: " + this.FirstName + " " + this.LastName + ", " + this.ContactInfo;
        }
    }
}
