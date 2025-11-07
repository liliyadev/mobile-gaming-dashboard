from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

@app.get("/api/games")
def get_games():
    return [
        {"id": 1, "title": "Puzzle Quest", "genre": "Strategy"},
        {"id": 2, "title": "Speed Racer", "genre": "Arcade"}
    ]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

