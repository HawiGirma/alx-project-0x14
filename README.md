# alx-project-0x14
# Movie App

A simple web application leveraging **The Movie Database (TMDb) API** to fetch and display movie, TV show, and actor data.

## API Overview

The Movie Database (TMDb) API provides comprehensive access to a vast entertainment metadata database, including details on movies, TV shows, actors, images, reviews, lists, and trending content. It supports powerful search capabilities and includes multilingual and community-generated data :contentReference[oaicite:0]{index=0}.

## Version

Current stable version: **v3** of the TMDb API (with v4 available in preview) :contentReference[oaicite:1]{index=1}.

## Available Endpoints

Below are some primary TMDb API endpoints:

- **`GET /search/movie`** – Search for movies by title :contentReference[oaicite:2]{index=2}.  
- **`GET /movie/{movie_id}`** – Retrieve detailed information about a specific movie :contentReference[oaicite:3]{index=3}.  
- **`GET /movie/{movie_id}/credits`** – Fetch cast and crew, such as directors and actors :contentReference[oaicite:4]{index=4}.  
- **`POST /movie/{movie_id}/rating`** – Submit or update a rating for a specific movie :contentReference[oaicite:5]{index=5}.  
- **`DELETE /movie/{movie_id}/rating`** – Remove a previously submitted rating :contentReference[oaicite:6]{index=6}.  

## Request and Response Format

### Example Request: Get Movie Details

```http
GET https://api.themoviedb.org/3/movie/27205
Authorization: Bearer YOUR_ACCESS_TOKEN
