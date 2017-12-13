1.1
CREATE DATABASE human_resource;

1.2
CREATE TABLE region (
  id integer CONSTRAINT constraint_name PRIMARY KEY,
  name varchar(255) NOT NULL
);

1.3
CREATE TABLE country (
  id integer CONSTRAINT constraint_country PRIMARY KEY,
  code varchar(2) NOT NULL,
  name varchar(255) NOT NULL,
  region_id integer
);

1.4
CREATE TABLE location (
  id integer CONSTRAINT constraint_location PRIMARY KEY,
  street_address varchar(255) NOT NULL,
  postal_code varchar(100) NOT NULL,
  city varchar(100) NOT NULL,
  state_province VARCHAR(100) NOT NULL,
  country_id integer
);

1.5
CREATE TABLE jobs (
  id integer CONSTRAINT constraint_jobs PRIMARY KEY,
  code varchar(100) NOT NULL,
  title varchar(100) NOT NULL,
  min_salary float NOT NULL,
  max_salary float NOT NULL
);

1.6
CREATE TABLE job_grades (
  id integer CONSTRAINT constraint_job_grades PRIMARY KEY,
  level varchar(1) NOT NULL,
  lowest_salary integer NOT NULL,
  highest_salary integer NOT NULL
);

1.7
CREATE TABLE job_history (
  id integer CONSTRAINT constraint_job_history PRIMARY KEY,
  employee_id integer NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  job_id integer NOT NULL,
  department_id integer NOT NULL
);


1.8
CREATE TABLE employees (
  id integer CONSTRAINT constraint_employee PRIMARY KEY,
  first_name varchar(100) NOT NULL,
  last_name varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  phone_number integer NOT NULL,
  department_id integer NOT NULL
);

1.9
CREATE TABLE departments (
  id integer CONSTRAINT constraint_department PRIMARY KEY,
  name varchar(100) NOT NULL,
  manager_id integer NOT NULL,
  location_id integer NOT NULL
);

2.0
CREATE TABLE employees (
  id integer CONSTRAINT constraint_employee PRIMARY KEY,
  first_name varchar(100) NOT NULL,
  last_name varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  phone_number varchar(100) NOT NULL,
  hire_date date NOT NULL,
  job_id integer NOT NULL,
  salary float NOT NULL,
  commission_pct float NOT NULL,
  manager_id integer,
  department_id integer NOT NULL
);
