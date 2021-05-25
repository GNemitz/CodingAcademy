using System;

namespace EventAppInterfaceWithDI
{
    class Program
    {
        static void Main(string[] args)
        {
            IEvent eventWedding = new WeddingEvent(1, "June 5, 2021", "Rod and Gun Park", 25000.00);
            EventService eventService1 = new EventService(eventWedding);  //inject
            eventService1.Log("First event log");

            IEvent eventGraduation = new GraduationEvent(2, "May 29, 2021", "Memorial High School", 50.00);
            EventService eventService2 = new EventService(eventGraduation);  //inject
            eventService2.Log("Second event log");

            IEvent eventBirthday = new BirthdayEvent(3, "May 25, 2021", "Stella's", 100.00);
            EventService eventService3 = new EventService(eventBirthday);  //inject
            eventService3.Log("Third event log");
        }
    }
}
