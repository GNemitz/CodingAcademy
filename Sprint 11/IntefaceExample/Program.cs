using System;

namespace IntefaceExample
{
    public interface IWeddingEvent
    {
        void PrintEventInfo();
        void AddFee(double theFee);
    }
    public interface IGraduationEvent
    {
        void PrintEventInfo();
    }
    public interface IBabyShowerEvent
    {
        void PrintEventInfo();
    }

    public class EventInfo
    {
        int id;
        string date;
        string location;
        double cost;

        public EventInfo(int newId, string newDate, string newLocation, double newCost)
        {
            id = newId;
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

    public class Event : IWeddingEvent, IGraduationEvent, IBabyShowerEvent
    {
        private EventInfo theEvent;
        
        public Event(int newId, string newDate, string newLocation, double newCost)
        {
            theEvent = new EventInfo(newId, newDate, newLocation, newCost);
        }

        void IWeddingEvent.PrintEventInfo()
        {
            Console.WriteLine("Wedding Event location: " + theEvent.Location);
        }

        void IWeddingEvent.AddFee(double theFee)  //add the fee to the cost of the wedding event
        {
            theEvent.Cost += theFee;
        }

        void IGraduationEvent.PrintEventInfo()
        {
            Console.WriteLine("Graduation Event location: " + theEvent.Location);
        }
        void IBabyShowerEvent.PrintEventInfo()
        {
            Console.WriteLine("Baby Shower Event location: " + theEvent.Location);
        }

        public void PrintEventInfo()
        {
            Console.WriteLine("Basic event cost: " + theEvent.Cost);
        }

        public override string ToString()
        {
            return theEvent.ToString();
        }


    }
    class Program
    {
        static void Main(string[] args)
        {
            IWeddingEvent weddingEvent = new Event(1, "July 9, 2021", "Florian Gardens", 5000.00);
            IGraduationEvent graduationEvent = new Event(2, "May 29, 2021", "Cleghorn Park", 200.00);
            IBabyShowerEvent babyShowerEvent = new Event(3, "November 20, 2021", "Church Basement", 100.00);
            Event myEvent = new Event(4, "July 4, 2021", "Nemitz home", 50.00);
            weddingEvent.PrintEventInfo();
            weddingEvent.AddFee(250.00);
            graduationEvent.PrintEventInfo();
            babyShowerEvent.PrintEventInfo();
            Console.WriteLine("Wedding: " + weddingEvent + "\nGraduation: " + graduationEvent + "\nBaby Shower: " + babyShowerEvent + "\nMy event: " + myEvent);
            Console.ReadLine();
            
        }
    }
}
