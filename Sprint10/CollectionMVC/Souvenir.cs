using System;
using System.Collections.Generic;
using System.Text;

namespace CollectionMVC
{
    class Souvenir
    {
        private string location;
        private string year;

        public Souvenir()
        {
            location = "";
            year = "";
        }

        public Souvenir(string newLocation, string newYear)
        {
            location = newLocation;
            year = newYear;
        }

        public string Location
        {
            get { return location; }
            set { location = value; }
        }

        public string Year
        {
            get { return year; }
            set { year = value; }
        }

    }
}
