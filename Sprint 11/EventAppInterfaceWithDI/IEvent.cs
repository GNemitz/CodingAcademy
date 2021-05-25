using System;
using System.Collections.Generic;
using System.Text;

namespace EventAppInterfaceWithDI
{
    public interface IEvent
    {
        void Log(string message);
    }
}
