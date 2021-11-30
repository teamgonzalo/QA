CREATE TABLE IF NOT EXISTS questions (
  id SERIAL,
  product_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  date_written VARCHAR(20) NOT NULL,
  asker_name VARCHAR(50) NOT NULL,
  asker_email VARCHAR(50),
  reported INTEGER,
  helpful INTEGER,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS answers (
  id SERIAL,
  question_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  date_written VARCHAR(20) NOT NULL,
  answerer_name VARCHAR(50) NOT NULL,
  answerer_email VARCHAR(50),
  reported INTEGER,
  helpful INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (question_id)
    REFERENCES questions(id)
);

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL,
  answer_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (answer_id)
    REFERENCES answers(id)
);

CREATE INDEX idx_product_question ON questions(product_id);
CREATE INDEX idx_questionsID_answers ON answers(question_id);
CREATE INDEX idx_answersID_photos ON photos(answer_id);

COPY questions(id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
FROM '/Users/thomasrose/Hack Reactor/HRRFE6/SDC/QA/database/data/questions.csv'
DELIMITER ','
CSV HEADER;

COPY answers(id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
FROM '/Users/thomasrose/Hack Reactor/HRRFE6/SDC/QA/database/data/answers.csv'
DELIMITER ','
CSV HEADER;

COPY photos(id, answer_id, body)
FROM '/Users/thomasrose/Hack Reactor/HRRFE6/SDC/QA/database/data/answers_photos.csv'
DELIMITER ','
CSV HEADER;
