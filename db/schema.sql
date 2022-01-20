DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee(
  id INT NOT NULL,
  employee_name VARCHAR(30) NOT NULL,
  job_title VARCHAR(100) NOT NULL,
  pay_rate INT NOT NULL,
  current_status BOOLEAN
);

CREATE TABLE job_title(
  id INT NOT NULL,
  job_title VARCHAR(30) NOT NULL,
  pay_rate INT NOT NULL,
  current_status BOOLEAN
);
