create table company(
    id integer primary key AUTOINCREMENT,
    staff_name text,
    location text
    
);

create table weather(
    id integer primary key AUTOINCREMENT,
    period_start integer,
    temperature integer,
    ghi_actual integer,
    company_id integer,
    FOREIGN KEY (company_id) REFERENCES company(id)
    
);



