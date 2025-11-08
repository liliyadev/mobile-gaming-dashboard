from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# ✅ CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with Netlify domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# ✅ Serve favicon
@app.get("/favicon.ico")
def favicon():
    return FileResponse("static/favicon.ico")

# ✅ Root route
@app.get("/")
def read_root():
    return {"message": "Hello from Mobile Gaming Backend!"}

# ✅ Welcome route
@app.get("/welcome")
def welcome():
    return {"message": "Welcome to the Mobile Gaming Dashboard!"}

# ✅ Games route
@app.get("/games")
def get_games():
    return games

@app.get("/games/{id}")
def get_game_by_id(id: int):
    for game in games:
        if game["id"] == id:
            return game
    return {"error": "Game not found"}

games = [
    {
        "id": 1,
        "name": "Space Invaders",
        "genre": "Arcade",
        "description": "Classic alien shooter game.",
        "thumbnailUrl": "https://calm-concha-fa16ba.netlify.app/assets/space-invaders.png"
    },
    {
        "id": 2,
        "name": "Puzzle Quest",
        "genre": "Puzzle",
        "description": "Solve puzzles to advance through quests.",
        "thumbnailUrl": "https://calm-concha-fa16ba.netlify.app/assets/puzzle-quest.png"
    },
    {
        "id": 3,
        "name": "Speed Racer",
        "genre": "Racing",
        "description": "High-speed futuristic racing game.",
        "thumbnailUrl": "https://calm-concha-fa16ba.netlify.app/assets/speed-racer.png"
    }
]


