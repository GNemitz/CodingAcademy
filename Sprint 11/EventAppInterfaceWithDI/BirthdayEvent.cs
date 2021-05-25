using System;
using System.Collections.Generic;
using System.Text;

namespace EventAppInterfaceWithDI
{
    public class BirthdayEvent : IEvent
    {
        EventInfo myEvent3;

        public BirthdayEvent(int newId, string newDate, string newLocation, double newCost)   // constructor 
        {
            myEvent3 = new EventInfo(newId, newDate, newLocation, newCost);
        }

        public void Log(string message)
        {
            Console.WriteLine("Inside the log method of birthday event.");
            LogBirthdayEvent(message);
        }
        public void LogBirthdayEvent(string message)
        {
            Console.WriteLine("Method: LogBirthdayEvent, Text: {0}", message);
            Console.WriteLine(myEvent3);
        }
    }
}
