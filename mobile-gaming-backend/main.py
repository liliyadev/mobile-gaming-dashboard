from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Serve favicon
@app.get("/favicon.ico")
def favicon():
    return FileResponse("static/favicon.ico")

# Root route
@app.get("/")
def read_root():
    return {"message": "Hello from Mobile Gaming Backend!"}
