# Write your MySQL query statement below
select students.student_id, student_name, Subjects.subject_name , Count(Examinations.subject_name) AS attended_exams
from Students 
JOIN Subjects
Left Join Examinations
ON students.student_id = Examinations.student_id AND Subjects.subject_name = Examinations.subject_name
Group by 1,2,3
order by 1,2,3;