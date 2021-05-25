using System;
using System.Collections.Generic;
using System.Text;

namespace EventAppInterfaceWithDI
{
    public class WeddingEvent : IEvent
    {
        EventInfo myEvent1;

        public WeddingEvent(int newId, string newDate, string newLocation, double newCost)   // constructor 
        {
            myEvent1 = new EventInfo(newId, newDate, newLocation, newCost);
        }

        public void Log(string message)
        {
            Console.WriteLine("Inside the log method of wedding event.");
            LogWeddingEvent(message);
        }
        public void LogWeddingEvent(string message)
        {
            Console.WriteLine("Method: LogWeddingEvent, Text: {0}", message);
            Console.WriteLine(myEvent1);
        }
    }
}
