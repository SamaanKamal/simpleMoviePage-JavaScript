const AddMovieButton = document.getElementById("add-movie-btn");
const SearchButton = document.getElementById("search-btn");


const movies =[];
const addMovie = () => {
  const title = document.getElementById("title").value;
  const ExtraName = document.getElementById("extra-name").value;
  const ExtraValue = document.getElementById("extra-value").value;

  if(title.trim() || ExtraName.trim() || ExtraValue.trim())
  {
    return;
  }
  const newMovie ={
    id: Math.random(),
    info : {
      title:title,
      [ExtraName]:ExtraValue
    }
  
  };

  movies.push(newMovie);
  renderMovies();
  console.log(movies);
};

const renderMovies = (filtered = '') => {
  const movieList = document.getElementById("movie-list");
  if(movies.length === 0)
  {
    movieList.classList.remove('visible');
    return;
  }
  else
  {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const FilterdMovies = !filtered ? movies : movies.filter((movie) => {
    return movie.info.title.includes(filtered);
  });

  FilterdMovies.forEach((movie) =>{
    const movieElement = document.createElement('li');
    let text = movie.info.title + ' - '; 
    for(const key in movies.info)
    {
      if(key !== 'title')
      {
        text = text + ` ${key}: ${movies.info[key]}`;
      }
    }
    movieList.textContent= text;
    movieList.append(movieElement);
  });
};

const FilteredMovie = () => {
  const FilterdValue = document.getElementById("filter-title");
  renderMovies(FilterdValue);
};

AddMovieButton.addEventListener('click',addMovie);
SearchButton.addEventListener('click',FilteredMovie);