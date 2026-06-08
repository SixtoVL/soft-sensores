from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.services_routes import router as services_router

app = FastAPI(title="Soft-Termistores API")

# Configuración de CORS para permitir peticiones desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir las rutas directamente para que coincidan con /interpolation
app.include_router(services_router)

@app.get("/")
def read_root():
    return {"message": "API de Soft-Termistores activa"}

if __name__ == "__main__":
    import uvicorn
    # Puerto 8088 según configuración de axiosInstance.ts
    uvicorn.run(app, host="0.0.0.0", port=8088)
