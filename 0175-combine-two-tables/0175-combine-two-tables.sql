# Write your MySQL query statement below
select p.firstName, p.lastname, a.city, a.state from Person as p LEFT JOIN address as a on p.personId  = a.personId;