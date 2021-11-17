CREATE TABLE IF NOT EXISTS questions (
  id SERIAL,
  product_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  date_written TIMESTAMP NOT NULL,
  asker_name VARCHAR(50) NOT NULL,
  asker_email VARCHAR(50),
  reported INTEGER,
  helpful INTEGER,
  PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS answers (
  id SERIAL,
  question_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  date_written TIMESTAMP NOT NULL,
  answerer_name VARCHAR(50) NOT NULL,
  answerer_email VARCHAR(50),
  reported INTEGER,
  helpful INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (question_id)
    REFERENCES questions(id)
)

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL,
  answer_id INTEGER NOT NULL,
  body TEXT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (answer_id)
    REFERENCES answers(id)
)