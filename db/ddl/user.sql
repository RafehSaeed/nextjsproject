CREATE TABLE public.users (
 user_id SERIAL NOT NULL,
 nm_prefix text NOT NULL DEFAULT ''::text,
 nm_first text NOT NULL DEFAULT ''::text,
 nm_middle text NOT NULL DEFAULT ''::text,
 nm_last text NOT NULL DEFAULT ''::text,
 nm_suffix text NOT NULL DEFAULT ''::text,
 email_addr text not null unique ,
 password CHAR(60) not null,
 user_type text not null,
 service_provider_id int4 null,
 PRIMARY KEY(user_id),
 foreign key (service_provider_id) references service_providers(service_provider_id) on update cascade on delete restrict,
 constraint valid_user_type check (user_type = 'sp' or user_type = 'reg')
) 
WITH (oids = false);