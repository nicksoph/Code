-- Old Oracle Scott schema formatted for MySQL
CREATE TABLE dept(
  deptno INTEGER PRIMARY KEY,
  dname VARCHAR(14),
  loc VARCHAR(13) );
        
INSERT INTO dept VALUES (10, 'ACCOUNTING', 'NEW YORK');
INSERT INTO dept VALUES (20, 'RESEARCH', 'DALLAS');
INSERT INTO dept VALUES (30, 'SALES', 'CHICAGO');
INSERT INTO dept VALUES (40, 'OPERATIONS', 'BOSTON');

CREATE TABLE emp(
  empno INTEGER PRIMARY KEY,
  ename VARCHAR(10),
  job VARCHAR(9),
  mgr INTEGER,
  hiredate DATE,
  sal INTEGER,
  comm INTEGER,
  deptno INTEGER REFERENCES dept);

INSERT INTO emp VALUES(7369, 'SMITH',  'CLERK', 7902, '1980-12-17',  800, NULL, 20);
INSERT INTO emp VALUES(7499, 'ALLEN',  'SALESMAN', 7698, '1981-2-20', 1600,  300, 30);
INSERT INTO emp VALUES(7521, 'WARD',   'SALESMAN', 7698, '1981-2-22', 1250,  500, 30);
INSERT INTO emp VALUES(7566, 'JONES',  'MANAGER', 7839, '1981-4-2',  2975, NULL, 20);
INSERT INTO emp VALUES(7654, 'MARTIN', 'SALESMAN', 7698, '1981-9-28', 1250, 1400, 30);
INSERT INTO emp VALUES(7698, 'BLAKE',  'MANAGER', 7839, '1981-5-1',  2850, NULL, 30);
INSERT INTO emp VALUES(7782, 'CLARK',  'MANAGER', 7839, '1981-6-9',  2450, NULL, 10);
INSERT INTO emp VALUES(7788, 'SCOTT',  'ANALYST',   7566, '1982-12-9', 3000, NULL, 20);
INSERT INTO emp VALUES(7839, 'KING',   'PRESIDENT', NULL, '1981-11-17', 5000, NULL, 10);
INSERT INTO emp VALUES(7844, 'TURNER', 'SALESMAN',  7698, '1981-9-8',  1500,    0, 30);
INSERT INTO emp VALUES(7876, 'ADAMS',  'CLERK',     7788, '1983-1-12', 1100, NULL, 20);
INSERT INTO emp VALUES(7900, 'JAMES',  'CLERK',     7698, '1981-12-3',   950, NULL, 30);
INSERT INTO emp VALUES(7902, 'FORD',   'ANALYST',   7566, '1981-12-3',  3000, NULL, 20);
INSERT INTO emp VALUES(7934, 'MILLER', 'CLERK',     7782, '1982-1-23', 1300, NULL, 10);

-- Code Example 6.11
SELECT
  tab.table_name,
  tab.engine,
  tab.table_rows,
  col.column_name,
  col.column_type
FROM
  INFORMATION_SCHEMA.TABLES AS tab
  JOIN INFORMATION_SCHEMA.COLUMNS AS col
    ON tab.table_name = col.table_name
WHERE
  tab.table_type = 'BASE TABLE';
  
