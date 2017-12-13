-- 1.Write a query in SQL to display the full name (first and last name),
-- and salary for those employees who earn below 6000.

SELECT first_name, last_name from employees
WHERE salary < 6000;

-- 2.Write a query in SQL to display the first and last_name,
-- department number and salary for those employees
-- who earn more than 8000.

SELECT first_name, last_name, department_id, salary from employees
WHERE salary > 8000;

-- 3.Write a query in SQL to display the first and last name,
-- and department number for all employees whose last name is "McEwen".

SELECT first_name, last_name, department_id from employees
WHERE last_name = 'McEwen';

-- 4.Write a query in SQL to display all the information
-- for all employees without any department number.

SELECT * from employees
WHERE department_id is null;

-- 5.Write a query in SQL to display all the information
-- about the department Marketing.

SELECT * from departments
WHERE name  = 'Marketing';

-- 6.Write a query in SQL to display the full name (first and last),
-- hire date, salary, and department number for those employees
-- whose first name does not containing the letter M
-- and make the result
-- set in ascending order by department number.

SELECT first_name, last_name, hire_date, salary, department_id from employees
WHERE first_name NOT LIKE '%M%'
ORDER BY department_id ASC

-- 7.Write a query in SQL to display all the information of employees
-- whose salary is in the range of 8000 and 12000
-- and commission is not null
-- or department number is except the number 4, 12 and 7
-- and they have been hired before June 5th, 1987.

SELECT * from employees
WHERE salary between 8000 and 12000
and commission_pct <> 0
OR department_id NOT IN (4,12,7)
AND hire_date < '1987-06-05';

-- 8. Write a query in SQL to display the full name (first and last name),
-- and salary for all employees who does not earn any commission.

SELECT first_name, last_name, salary from employees
WHERE commission_pct = 0;

-- 9.Write a query in SQL to display the full name (first and last),
-- the phone number and email separated by hyphen, and salary,
-- for those employees whose salary is within the range of 9000 and 17000.
-- The column headings assign with Full_Name, Contact_Details and Remuneration respectively.

select (first_name, last_name) AS Full_Name, concat(phone_number, '-',email) as Contact_Details, salary as Remuneration
from employees
WHERE salary between 9000 and 17000;

-- 10.Write a query in SQL to display the first and last name, and salary
-- for those employees whose first name is ending with the letter m.

select first_name, last_name, salary from employees
WHERE first_name like '%m';

-- 11.Write a query in SQL to display the full name (first and last) name, and salary,
-- for all employees whose salary is out of the range 7000 and 15000
-- and make the result set in ascending order by the full name.

select (first_name, last_name) as Full_Name, salary from employees
WHERE salary not between 7000 and 15000
order by Full_Name;

-- 12.Write a query in SQL to display the full name (first and last), job id and date of hire
-- for those employees who was hired during November 5th, 2007 and July 5th, 2009.

select (first_name, last_name) as Full_Name, job_id, hire_date from employees
WHERE hire_date between '2007-11-05' AND '2009-07-05';

-- 13. Write a query in SQL to display the the full name (first and last name), and department number
-- for those employees who works either in department 7 or 9.

select (first_name, last_name) as Full_Name, department_id from employees
WHERE department_id = 7 or department_id = 9;

-- 14. Write a query in SQL to display the full name (first and last name), salary, and manager number
-- for those employees who is working under a manager.

select (first_name, last_name) as Full_Name, salary, manager_id from employees
WHERE manager_id IS NOT NULL;

-- 15. Write a query in SQL to display all the information from Employees table
-- for those employees who was hired before June 21st, 2002.

SELECT * from employees
WHERE hire_date < '2002-06-21';

-- 16. Write a query in SQL to display the first and last name, email, salary and manager ID,
-- for those employees whose managers are hold the ID 21, 4 or 46.

select first_name, last_name, email, salary, manager_id from employees
WHERE manager_id in (21,4,46);

-- 17. Write a query in SQL to display all the information
-- for all employees who have the letters D, S, or N in their first name
-- and also arrange the result in descending order by salary.

SELECT * from employees
WHERE first_name LIKE '%D%'
OR first_name LIKE '%S%'
OR first_name LIKE '%N%'
ORDER BY salary DESC;

SELECT * from employees
WHERE first_name SIMILAR TO '%(D|S|N)%'
ORDER BY salary DESC;

-- 18. Write a query in SQL to display the full name (first name and last name), hire date,
-- commission percentage, email and telephone separated by '-', and salary
-- for those employees who earn the salary above 11000
-- or the seventh digit in their phone number equals 3
-- and make the result set in a descending order by the first name.

select first_name, last_name, hire_date, commission_pct, email || '-' || phone_number AS toto, salary
from employees
where salary < 11000
or substring(phone_number from 7 for 1) = '3'
order by first_name desc;

-- 19. Write a query in SQL to display the first and last name, and department number
-- for those employees who holds a letter s as a 3rd character in their first name.

select first_name, last_name, department_id from employees
WHERE substring(first_name from 3 for 1) = 's';

-- 20. Write a query in SQL to display the employee ID, first name, job id, and department number
-- for those employees who is working except the departments 5, 3 and 8.

select id, first_name, job_id, department_id from employees
WHERE department_id NOT IN (5,3,8);

-- 21. Write a query in SQL to display the employee Id, first name, job id, and department number
-- for those employees whose department number equals 3, 4 or 9.
select id, first_name, job_id, department_id from employees
WHERE department_id IN (3,4,9);

-- 22. Write a query in SQL to display the ID
-- for those employees who did two or more jobs in the past.

SELECT *
FROM employees
WHERE id IN (SELECT employee_id FROM job_history GROUP BY employee_id HAVING COUNT(employee_id) > 1);

-- ou

select employee_id, count(*)
from job_history
group by employee_id
having count(*) >= 2;

-- 23. Write a query in SQL to display job ID, number of employees, sum of salary,
-- and difference between highest salary and lowest salary for a job.

select job_id, count(id),sum(salary), MAX(salary), MIN(salary), MAX(salary)-MIN(salary) AS DIFF from employees
group by job_id;


-- 24. Write a query in SQL to display job ID
-- for those jobs that were done by two or more for more than 300 days.

select job_id from job_history
group by job_id having count(employee_id) > 1;

-- 25. Write a query in SQL to display the country ID and number of cities in that country we have.
SELECT country_id, count(*) from location
group by country_id;
