create table services (
service_id SERIAL not null ,
service_nm text  not null DEFAULT ''::text,
category_id text  not null DEFAULT ''::text,
service_price NUMERIC(9,2) null ,
service_provider_id int4 not null,
CONSTRAINT services_pkey PRIMARY KEY (service_id,category_id,service_provider_id),
FOREIGN KEY (category_id) REFERENCES service_categories(category_id) ON UPDATE CASCADE ON DELETE restrict,
FOREIGN KEY (service_provider_id) REFERENCES service_providers(service_provider_id) ON UPDATE CASCADE ON DELETE restrict
);

insert into services(service_nm , category_id  , service_price , service_provider_id)
values ('Window Tinting' , 'auto_main_care', 80.00 , 1);
