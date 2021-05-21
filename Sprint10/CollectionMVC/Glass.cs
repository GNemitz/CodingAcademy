using System;
using System.Collections.Generic;
using System.Text;

namespace CollectionMVC
{
    class Glass: Souvenir
    {
        private string size;

        public Glass() : base()
        {
            size = "";
        }

        public Glass(string newLocation, string newYear, string newSize) : base(newLocation, newYear)
        {
            size = newSize;
        }

        public string Size
        {
            get { return size; }
            set { size = value; }
        }

        public override string ToString()
        {
            return "I got a " + this.Size + " glass from " + this.Location + " " + "in " + this.Year;
        }
    }
}
