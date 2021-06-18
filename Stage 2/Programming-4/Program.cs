using System;
using System.IO;
using System.Collections.Generic;
using CsvHelper;
using CsvHelper.Configuration.Attributes;
using System.Globalization;
using System.Linq;

namespace Programming_4
{
    public class Contact
    {
        [Name("id")]
        public int Id { get; set; }
        [Name("first_name")]
        public string FirstName { get; set; }
        [Name("last_name")]
        public string LastName { get; set; }
        [Name("email")]
        public string Email { get; set; }
        [Name("gender")]
        public string Gender { get; set; }
        [Name("skill")]
        public string Skill { get; set; }
        [Name("ip_address")]
        public string IpAddress { get; set; }
        [Name("GUID")]
        public Guid GUID { get; set; }
    }

    public class Business
    {
        [Name("id")]
        public int Id { get; set; }
        [Name("name")]
        public string Name { get; set; }
        public List<Contact> Contacts { get; private set; } = new List<Contact>();
    }

    public class ContactToBusinessLink
    {
        [Name("contact_id")]
        public int ContactId { get; set; }
        [Name("business_id")]
        public int BusinessId { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var contacts = ReadContacts();
            //WriteContacts(contacts);

            var businesses = ReadBusinesses();

            //WriteBusinesses(businesses);

            var links = ReadLinks();
            //WriteLinks(links);

            //Populate contact on business object
            foreach (var link in links)
            {
                var biz = (from b in businesses
                           where b.Id == link.BusinessId
                           select b).FirstOrDefault();

                //var biz = businesses.Where(theBiz => theBiz.Id == link.BusinessId).FirstOrDefault();

                var newContact = (from c in contacts
                                  where c.Id == link.BusinessId
                                  select c).FirstOrDefault();
                //var newContact = contacts.Where(theCtc => theCtc.Id == link.ContactId).FirstOrDefault();

                int bizIndex = Array.IndexOf(businesses, biz);

                businesses[bizIndex].Contacts.Add(newContact);

            }
            foreach (var biz in businesses)
            {
                if (biz.Contacts.Count >= 1)
                {
                    Console.WriteLine($"Business has 1 or more contacts: {biz.Id} {biz.Name} Count = { biz.Contacts.Count }");
                }
            }
            foreach (var biz in businesses)
            {
                if (biz.Contacts.Count >= 50)
                {
                    Console.WriteLine($"Business has 50 or more contacts: {biz.Id} {biz.Name} Count = { biz.Contacts.Count }");
                }
            }
        }

        static Contact[] ReadContacts()
        {
            using var reader = new StreamReader("C:/Users/gnemitz/CodingAcademy/Stage 2/Programming-1/Contacts.csv");
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            return csv.GetRecords<Contact>().ToArray();

        }

        static void WriteContacts(Contact[] contacts)
        {
            foreach (var contact in contacts)
            {
                Console.WriteLine($"{contact.FirstName} {contact.LastName}");
            }

        }
        static Business[] ReadBusinesses()
        {
            using var reader = new StreamReader("C:/Users/gnemitz/CodingAcademy/Stage 2/Programming-1/Business.csv");
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            return csv.GetRecords<Business>().ToArray();
        }
        static void WriteBusinesses(Business[] businesses)
        {
            foreach (var business in businesses)
            {
                Console.WriteLine($"{business.Id} {business.Name}");
            }

        }
        static ContactToBusinessLink[] ReadLinks()
        {
            using var reader = new StreamReader("C:/Users/gnemitz/CodingAcademy/Stage 2/Programming-1/ContactToBusiness.csv");
            using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);
            return csv.GetRecords<ContactToBusinessLink>().ToArray();

        }
        static void WriteLinks(ContactToBusinessLink[] links)
        {
            foreach (var contactToBusinessLink in links)
            {
                Console.WriteLine($"{contactToBusinessLink.ContactId} {contactToBusinessLink.BusinessId}");
            }
        }
    }

}
