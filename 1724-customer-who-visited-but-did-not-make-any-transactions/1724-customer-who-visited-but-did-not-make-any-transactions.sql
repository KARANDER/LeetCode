# Write your MySQL query statement 
#select customer_id, COUNT(Distinct visit_id) as count_notrans 
#from Visit_id
# Write your MySQL query statement 
select customer_id, COUNT(Distinct visit_id) as count_no_trans 
from Visits 
where visit_id not in (
    select visit_id from Transactions
)
group by customer_id 
order by count_no_trans;


