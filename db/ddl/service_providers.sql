create table service_providers (
service_provider_id int4 not null primary key,
service_provider_nm text not null default ''::text
);

create sequence service_providers_sequence;


insert into service_providers(service_provider_id,service_provider_nm)
values (nextval('service_providers_sequence'), 'jolt_test_provider_1')
,	(nextval('service_providers_sequence'), 'jolt_test_provider_2')
,	(nextval('service_providers_sequence'), 'jolt_test_provider_3')
,	(nextval('service_providers_sequence'), 'jolt_test_provider_4');