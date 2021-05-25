using System;
using System.Collections.Generic;
using System.Text;

namespace NoInterfaceOrDI
{
    public class ProductService
    {
        private readonly FileLogger _filelogger = new FileLogger();
        private readonly DatabaseLogger _databaselogger = new DatabaseLogger(); 
        public void LogToFile(string message)
        {
            _filelogger.Log(message);
        }
        public void LogToDatabase(string message)
        {
            _filelogger.Log(message);
        }
    }
}
