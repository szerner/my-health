using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyHealth.Core.Models
{
   public class Measurement
   {
      public int Id { get; set; }
      public int UserId { get; set; }
      public DateTime? Time { get; set; }
   }
}