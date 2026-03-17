CREATE TABLE IF NOT EXISTS user_activities (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(32) NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    app_name VARCHAR(100),
    window_title VARCHAR(200),
    keystrokes_per_min INTEGER,
    mouse_px_per_min INTEGER,
    focus_score DECIMAL(5,2),
    tags VARCHAR(100),
    country VARCHAR(50),
    region VARCHAR(50),
    city VARCHAR(50),
    timezone VARCHAR(50),
    language VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_user_id ON user_activities(user_id);
CREATE INDEX IF NOT EXISTS idx_timestamp ON user_activities(timestamp);
CREATE INDEX IF NOT EXISTS idx_app_name ON user_activities(app_name);

CREATE TABLE IF NOT EXISTS version_history (
    id SERIAL PRIMARY KEY,
    version VARCHAR(20) NOT NULL UNIQUE,
    download_url VARCHAR(500) NOT NULL,
    changelog TEXT,
    file_size VARCHAR(20),
    release_date DATE,
    min_version VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO version_history (version, download_url, changelog, file_size, release_date, min_version)
VALUES (
    '1.1.0',
    'https://foxmate2.sfo3.cdn.digitaloceanspaces.com/FoxMate%20AI_setup.exe',
    'Initial release with focus tracking and cute fox companion',
    '50MB',
    '2026-03-01',
    '1.0.0'
) ON CONFLICT (version) DO NOTHING;
