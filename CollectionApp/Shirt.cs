using System;
using System.Collections.Generic;
using System.Text;

namespace CollectionApp
{
    class Shirt: Souvenir
    {
        private string shirtType;

        public Shirt() : base()
        {
            shirtType = "";
        }

        public Shirt(string newLocation, string newYear, string newShirtType) : base(newLocation, newYear)
        {
            shirtType = newShirtType;
        }

        public string ShirtType
        {
            get { return shirtType; }
            set { shirtType = value; }
        }

        public override string ToString()
        {
            return "I got a " + this.ShirtType + " from " + this.Location + " " + "in " + this.Year;
        }
    }
}
