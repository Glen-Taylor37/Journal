/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.sql(`
        CREATE TABLE journals (
            id SERIAL PRIMARY KEY,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            title VARCHAR(60),
            user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
        );
    `);
};

exports.down = (pgm) => {
	pgm.sql(`
        DROP TABLE journals;
    `);
};
