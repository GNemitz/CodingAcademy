using CsvHelper.Configuration.Attributes;
using System.Collections.Generic;

public class Business
    {
        [Name("id")]
        public int Id { get; set; }
        [Name("name")]
        public string Name { get; set; }
        public List<Contact> Contacts { get; private set; } = new List<Contact>();
    }
