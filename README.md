
# Project Overview

## Project Name

FilmFiasco

## Project Description

I will be making an app that displays a selection of movies. I plan on having link options for the user to access popular movies and recent releases, as well as popular shows. You can also search movies by title through a search bar. I plan to have a link for each movie and tv show to check out a trailer. Airtable will be used, where I will be seeding data from an external API 
## API and Data Sample

### Component Hierarchy

 
   
    -App.js
     -Components
       -Movie.js
       -MovieBoard.js
       -MovieHome.js
       -movieLink.js
          -Genre.js
	  -Banner.js
	  -Video.js
      



MovieDP API

```
           "popularity": 333.187,
            "vote_count": 217,
            "video": false,
            "poster_path": "/bKthjUmxjHjvJK8FktFfQdmwP12.jpg",
            "id": 703745,
            "adult": false,
            "backdrop_path": "/hIHtyIYgBqHybOgUdoAmveipuiO.jpg",
            "original_language": "en",
            "original_title": "Deep Blue Sea 3",
            "genre_ids": [
                28,
                27,
                878
            ],
            "title": "Deep Blue Sea 3",
            "vote_average": 6.3,
            "overview": "Dr. Emma Collins and her team are spending their third summer on the island of Little Happy studying the effect of climate change on the great white sharks who come to the nearby nursery every year to give birth. Along with the last two inhabitants of this former fishing village, their peaceful life is disrupted when a \"scientific\" team led by her ex-boyfriend and marine biologist Richard show up looking for three bull sharks who we soon learn aren't just any bull sharks.",
            "release_date": "2020-07-28"
	    
	    
```
        
           
   ## Wireframes


Desktop: "https://drive.google.com/file/d/1c8eVu2iD46i8vyfi4M6DZzkW3YDVvdqK/preview"
Mobile: "https://drive.google.com/file/d/10alqHiUZGAtAswnhUN0RgvGy-T9SIC6Y/preview" 
Tablet: "https://drive.google.com/file/d/1aUrGSqXimPbAGA1rVm-Wu4GLnkHkJq4E/preview" 
Link to movie details:  "https://drive.google.com/file/d/1-wj9_0rbuNsXRAk_IsqQ9_2lFfrPwm1N/preview" 


#### MVP 

- working axios /airtable data usage
- Render data on page dynamically
- working links  
-all components in place
-CSS with flexbox

#### PostMVP  

-adding  movie trailer link to Youtube on movie details page
-add information saying that movie does not exist if user types in a title with no matches
-remove search query from movie details page
-center review items 

- working axios /airtable data usage
- Render data on page dynamically
- working links  
-all components in place
-CSS with flexbox


## Project Schedule


   
|  Day        |                    Deliverable                     |  Status
|------------ |--------------------------------------------------- | ----------|
|September 4  | Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|September 4  | Project Approval                                   | Complete
|September 5  | Sucessful API Usage                                | Complete
|September 6  | React App structure with core Components           | Complete
|September 7  | Adding funcitonality to each component             | Complete
|September 8-9| Initial Clickable Model                            | Complette
|September 11 | Presentations                                      | Incomplete

## Priority Matrix


Priority Matrix "https://drive.google.com/file/d/1iVnp0tSUeg4gWFetqIWI4UwAAzdedHJQ/preview" 




## Timeframes



| Component                        | Priority | Estimated Time  | Time Invested | Actual Time |
| -------------------------------- | :---:    |  :------------:   | :--------:  | :---------: |
| Creating Functional API calls    | H        |       5hrs        |   15hrs     |     15hrs   |
| Working/Traversing API endpoints | H        |       8hrs        |   12hrs     |     12hrs   |
| React Router/Navigating to Links | H        |       5hrs        |    3hrs     |     3hrs    |
| Creating components dynamically  | H        |       6hrs        |   14hrs     |     14hrs   |
| CSS Styling                      | H        |       7hrs        |    2hrs     |     2hrs    |
| Linting/Debugging                | H        |       6hrs        |    1hr      |     1hr     |
| Total                            | H        |       32hrs       |    48hrs    |     48hrs   |



## SWOT Analysis
One weakness I have coming into the project is my knowledge level of certain concepts. I am still a bit confusd on React Router and how to use Airtable with an external API, so I plan on rewatching those lectures to get a better understanding. Also, I know I will have to use useParrams() at some point, but I don't know exactly how so I will learn this concept in more detail before starting. I believe that I am good at getting the layout of components organized, and I have a good understanding of how compontents interact with one another.


## Code Snippet


```
let display = <div/>
    if (status && !loading) {
      display = (
      <MovieHome movie={data} />
    )
    }
```

## Change Log
1. changed the possible homepage links from Popular Movies, Upcoming Movies , And New Releases to just Get Movies. I didn't think it was needed, it felt crowded on the home page. A label for each movie detail page to say if it has been released is sufficient. 
