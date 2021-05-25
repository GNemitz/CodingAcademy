using System;
using System.Collections.Generic;
using System.Text;

namespace EventAppInterfaceWithDI
{
    public class EventService
    {
        private readonly IEvent _event;  // creat _event of type IEvent
        public EventService(IEvent newEvent)  //constructor - injecting type of events
        {
            _event = newEvent;   //what was passed in new event
        }
        public void Log(string message)
        {
            _event.Log(message);  //goes to whichever log method
        }
    }
}
