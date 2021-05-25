using System;
using System.Collections.Generic;
using System.Text;

namespace InterfaceNoDI
{
    public class ProductService
    {
        public void Log(string message)
        {
            ILogger logger = new FileLogger();  //class options include FileLogger and DatabaseLogger (and this is where you could add new ones)
            logger.Log(message);
        }
    }
}
