﻿namespace PrediLiga.domain.Entities
{
    public interface IEntity
    {
        long Id { get; set; }

        bool IsArchived { get; set; }
    }

}