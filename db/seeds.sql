INSERT INTO department (name) VALUES 
("Sales"),
("Audits"),
("Accounting"),
("Operations"),
("Maintenance");

INSERT INTO role (title, salary, department_id) VALUES
("Sales Manager", 120000, 1),
("Audit Manager", 100000, 2),
("Accounting Manager", 110000, 3),
("Operations Manager", 105000, 4),
("Maintenance Manager", 105000, 5)
;

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Jim", "Halpert", 1, NULL),
("Pam", "Beasley", 2, NULL),
("Dwight", "Shrute", 3, 1),
("Michael", "Scott", 4, 2),
("Holly", "Flax", 5, 2)
;

