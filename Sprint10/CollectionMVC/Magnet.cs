using System;
using System.Collections.Generic;
using System.Text;

namespace CollectionMVC
{
    class Magnet: Souvenir
    {
        private string description;

        public Magnet() : base()
        {
            description = "";
        }

        public Magnet(string newLocation, string newYear, string newDescription) : base(newLocation, newYear)
        {
            description = newDescription;
        }

        public string Description
        {
            get { return description; }
            set { description = value; }
        }

        public override string ToString()
        {
            return "I got a " + this.Description + " magnet from " + this.Location + " " + "in " + this.Year;
        }
    }
}
