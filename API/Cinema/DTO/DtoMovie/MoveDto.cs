﻿using System;
using System.Data;

namespace Cinema.DTO.DtoMovie
{
    public class MoveDto
    {
        public MoveDto(DataRow row)
        {
            this.MId = (int)row["MId"];
            this.MName = (string)row["MName"];
            this.MTime = (int)row["MTime"];
            this.MOpeningDay = (DateTime)row["MOpeningDay"];
            this.MCountry = (string)row["MIdMCountry"];
            this.MDirector = (string)row["MDirector"];
            this.MGenre = (int)row["MGenre"];
            this.MDescription = (string)row["MDescription"];
            //this.MPoster = (string)row["MPoster"];
        }
        public int MId { get; set; }
        public string MName { get; set; }
        public int MTime { get; set; }
        public DateTime? MOpeningDay { get; set; }
        public string MCountry { get; set; }
        public string MDirector { get; set; }
        public int MGenre { get; set; }
        public string MDescription { get; set; }
        //public string MPoster { get; set; }
    }
}
