# Write your MySQL query statement below
select email from Person 
group by email
Having Count(*) >1;