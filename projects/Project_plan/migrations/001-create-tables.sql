create table customer(
    id integer primary key AUTOINCREMENT,
    name text,
    location text,
    load integer
    
);

create table company(
    id integer primary key AUTOINCREMENT,
    staff_name text,
    location text,
    solar radiation actual integer,
    solar radiation predicted integer,
    installed capacity integer,
    FOREIGN KEY (customer_id) REFERENCES customer(id),
);

create table weather(
    id integer primary key AUTOINCREMENT,
    period_start integer,
    temperature integer,
    azimuth integer,
    humidity integer,
    location text,
    ghi actual integer
    FOREIGN KEY (customer_id) REFERENCES customer(id),
    FOREIGN KEY (company_id) REFERENCES company(id)
    
);



