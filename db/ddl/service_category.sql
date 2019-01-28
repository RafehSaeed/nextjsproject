CREATE TABLE public.service_categories (
	category_id text NOT NULL,
	category_nm varchar(80) NULL,
	PRIMARY KEY (category_id)
);

-- Add service categories
insert into service_categories(category_id,category_nm)
values('auto_repair','Auto Repair'),
('auto_main_care' , 'Auto Maintainence and Care' ),
('bridal_services' ,  'Bridal Services' ),
('healths' , 'Healths' ),
( 'makeup_services' , 'Make-up Services' ),
( 'home_renovations' , 'Home Renovations' ),
( 'training_fitness' , 'Training & Fitness' ),
( 'event_planning' , 'Event Planning & Organizing' ),
( 'auto_care' , 'Auto Care' ),
( 'mobile_services' , 'Cellular/Mobile Services' ),
( 'grooming' , 'Men Grooming' ),
( 'home_care' , 'Home Care' ),
( 'home_repairs' , 'Home Repairs' ),
( 'home_improvements' , 'Home Improvements' ),
( 'painting' , 'Painters' ),
( 'electronics' , 'Electronics' ),
( 'makeup_artists' , 'Make Up Artists' ),
( 'auto_detailing' , 'Auto Detailing' );