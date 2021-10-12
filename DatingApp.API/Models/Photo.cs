using System;

namespace DatingApp.API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }

        // because tthe photos belongs to a user we need to add that relantionship to the user table
        // we do this because we need to create a cascade deletion. THat means if the user is deleted then 
        // all of his photos are deleted too 
        
        public User User { get; set; }
        public int UserId { get; set; }
    }
}