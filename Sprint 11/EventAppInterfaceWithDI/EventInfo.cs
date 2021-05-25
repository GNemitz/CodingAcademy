using System;
using System.Collections.Generic;
using System.Text;

namespace EventAppInterfaceWithDI
{
    public class EventInfo
    {
        int id;
        string date;
        string location;
        double cost;

        public EventInfo(int newId, string newDate, string newLocation, double newCost)  //constructor
        {
            id = newId;           //set values that I passed in to the object
            date = newDate;
            location = newLocation;
            cost = newCost;
        }

        public int Id //property
        {
            get { return id; }
            set { id = value; }
        }

        public string Date //property
        {
            get { return date; }
            set { date = value; }
        }
        public string Location //property
        {
            get { return location; }
            set { location = value; }
        }
        public double Cost //property
        {
            get { return cost; }
            set { cost = value; }
        }
        public override string ToString()
        {
            return "Id: " + Id.ToString() + "  Date: " + Date + "  Location: " + Location + "  Cost: " + Cost.ToString();
        }
    }
}
