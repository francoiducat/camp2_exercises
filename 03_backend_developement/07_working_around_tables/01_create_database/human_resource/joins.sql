-- 1. Write a query in SQL to display the first name, last name, department number, and department name for each employee.

select first_name, last_name, department_id, d.name from employees e
INNER JOIN departments d ON e.department_id = d.id

-- 2. Write a query in SQL to display the first and last name, department, city, and state province for each employee.

select first_name, last_name, d.name, l.city, l.state_province from employees e
INNER JOIN departments d ON e.department_id = d.id
INNER JOIN location l on l.id = d.location_id;

-- 3. Write a query in SQL to display the first name, last name, salary, and job grade for all employees.

select first_name, last_name, salary, j.level from employees e
inner join job_grades j on e.salary between j.lowest_salary and j.highest_salary;

-- 4. Write a query in SQL to display the first name, last name, department number and department name
-- for all employees for departments 8 or 4.

select first_name, last_name, department_id, d.name from employees e
INNER JOIN departments d ON e.department_id = d.id
WHERE department_id in (8,4);


-- 5. Write a query in SQL to display those employees who contain a letter z to their first name
-- and also display their last name, department, city, and state province.

select first_name, last_name, d.name, l.city, l.state_province from employees e
INNER JOIN departments d ON e.department_id = d.id
INNER JOIN location l on l.id = d.location_id
WHERE e.first_name like '%z%'
