using System;
using System.IO;
using System.Collections.Generic;
using CsvHelper;
using CsvHelper.Configuration.Attributes;
using System.Globalization;
using System.Linq;

namespace Programming_4_Part4
{  
    class Program
    {
        static void Main(string[] args)
        {
            BizAndContacts run = new BizAndContacts(); 
            run.Part4();
        }
    }
    class BizAndContacts
    {
        public void Part4()
        {
            var contacts = ReadContactsToDictionary();
            var businesses = ReadBusinessesToDictionary();
            var links = ReadLinks();
            
            //Populate contact on business object
            foreach (var link in links)
            {
                Contact contact = contacts[link.ContactId];
                businesses[link.BusinessId].Contacts.Add(contact);
            }

            foreach (KeyValuePair<int, Business> biz in businesses)
            {
                if (biz.Value.Contacts.Count > 0)
                {
                    Console.WriteLine($"Business has at least 1 contact: {biz.Value.Id } { biz.Value.Name }  Count =  { biz.Value.Contacts.Count} ");
                }
            }

            foreach (KeyValuePair<int, Business> biz in businesses)
            {
                if (biz.Value.Contacts.Count >= 50)
                {
                    Console.WriteLine($"Business has at least 50 contacts: {biz.Value.Id } { biz.Value.Name }  Count =  { biz.Value.Contacts.Count} ");
                }
            }
        }
            
        static Dictionary<int, Contact> ReadContactsToDictionary()
        {

            using var reader = new StreamReader("C:/Users/gnemitz/CodingAcademy/Stage 2/Programming-1/Contacts.csv");
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            var contacts = csv.GetRecords<Contact>().ToArray();
            Dictionary<int, Contact> busContactDictionary = new Dictionary<int, Contact>();

            foreach (var ctc in contacts)
            {
                busContactDictionary.Add(ctc.Id, ctc);
            }

            return busContactDictionary;
        }

        static Dictionary<int, Business> ReadBusinessesToDictionary()
        {

            using var reader = new StreamReader("C:/Users/gnemitz/CodingAcademy/Stage 2/Programming-1/Business.csv");
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            var businesses = csv.GetRecords<Business>().ToArray();
            Dictionary<int, Business> businessDictionary = new Dictionary<int, Business>();

            foreach (var biz in businesses)
            {
                businessDictionary.Add(biz.Id, biz);
            }

            return businessDictionary;

        }
        static ContactToBusinessLink[] ReadLinks()
        {
            using var reader = new StreamReader("C:/Users/gnemitz/CodingAcademy/Stage 2/Programming-1/ContactToBusiness.csv");
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            return csv.GetRecords<ContactToBusinessLink>().ToArray();

        }

    }

    

}

        




