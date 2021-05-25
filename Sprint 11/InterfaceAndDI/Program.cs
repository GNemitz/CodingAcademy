using System;

namespace InterfaceAndDI
{
    class Program
    {
        static void Main(string[] args)
        {
            ILogger loggerCloud = new CloudLogger();
            ProductService productService1 = new ProductService(loggerCloud);
            productService1.Log("First log to file");
        }
    }
}
