using System;

namespace server.Models
{
    public class UserModel
    {
        public int Id { get; set; }           // Primary key

        public string? fullname { get; set; }       
        public string? username { get; set; }  //this must be unique
        public string? password { get; set; }  
          public DateOnly? RegistedDate { get; set; }  
    }
}
