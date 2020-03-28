\echo 'INSERTING INTO author';
INSERT INTO author (name) VALUES ('Oscar Wilde');
INSERT INTO author (name) VALUES ('Albert Einstein');
INSERT INTO author (name) VALUES ('Dr. Seuss');

\echo 'INSERTING INTO quote';
INSERT INTO quote (txt) VALUES ('Be yourself; everyone else is already taken.');
INSERT INTO quote (txt) VALUES ('Two things are infinite: the universe and human stupidity; and I''m not sure about the universe.');
INSERT INTO quote (txt) VALUES ('You know you''re in love when you can''t fall asleep because reality is finally better than your dreams.');

\echo 'INSERTING INTO category';
INSERT INTO category (cat) VALUES ('Historical');
INSERT INTO category (cat) VALUES ('LDS');
INSERT INTO category (cat) VALUES ('Inspirational');

\echo 'INSERTING INTO author_quote';
INSERT INTO author_quote (author_id, quote_id) VALUES (1, 1);
INSERT INTO author_quote (author_id, quote_id) VALUES (2, 2);
INSERT INTO author_quote (author_id, quote_id) VALUES (3, 3);

\echo 'INSERTING INTO quote_category';
INSERT INTO quote_category (category_id, quote_id) VALUES (3, 1);
INSERT INTO quote_category (category_id, quote_id) VALUES (1, 2);
INSERT INTO quote_category (category_id, quote_id) VALUES (3, 3);