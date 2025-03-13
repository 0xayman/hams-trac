from backend.settings.base import *  # noqa: F401, F403

DEBUG = True

X_FRAME_OPTIONS = "http://3.80.79.170:3000"
X_FRAME_OPTIONS = "ALLOW-FROM http://3.80.79.170:3000"

CORS_ALLOWED_ORIGINS = [
    "http://3.80.79.170:3000",
    "http://127.0.0.1:3000",
    "http://3.80.79.170",
    # Other allowed origins if needed
]

CORS_ORIGIN_WHITELIST = [
    "http://3.80.79.170:3000",
    "http://127.0.0.1:3000",
    "http://3.80.79.170",
    # Other allowed origins if needed
]

CORS_ALLOW_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]

CORS_ALLOW_HEADERS = [
    "authorization",
    "content-type",
]
