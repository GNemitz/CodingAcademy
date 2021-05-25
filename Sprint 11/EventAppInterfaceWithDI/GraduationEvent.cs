using System;
using System.Collections.Generic;
using System.Text;

namespace EventAppInterfaceWithDI
{
    public class GraduationEvent : IEvent
    {
        EventInfo myEvent2;

        public GraduationEvent(int newId, string newDate, string newLocation, double newCost)   // constructor 
        {
            myEvent2 = new EventInfo(newId, newDate, newLocation, newCost);
        }

        public void Log(string message)
        {
            Console.WriteLine("Inside the log method of graduation event.");
            LogGraduationEvent(message);
        }
        public void LogGraduationEvent(string message)
        {
            Console.WriteLine("Method: LogGraduationEvent, Text: {0}", message);
            Console.WriteLine(myEvent2);
        }
    }
}
