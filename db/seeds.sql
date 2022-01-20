-- INSERT INTO employee (id, employee_name, job_title, pay_rate)
-- VALUES (001, "Jim Halpert", "sales", "$50,000"),
--        (002, "Pam Beasley", "Receptionist", "$48,000"),
--        (003, "Dwight Shrute", "Assistant to the Regional Manager" "$60,000"),
--        (004, "Creed", "Quality Assurance Manager" "$89,000"),
--        (005, "Michael Scott", "Regional Manager" "$85,000");

INSERT INTO department (name) VALUES 
("Sales"),
("Audits"),
("Accounting"),
("Operations"),
("");

INSERT INTO role (title, salary, department_id) VALUES
("Sales Manager", 120000, 1),
("Audit Manager", 100,000, 2),
("Accounting Manager", 110,000, 3),
("Operations Manager", 105,000, 4),
;

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("FIRST NAME", "LAST NAME", ROLE, MANAGER ID);
