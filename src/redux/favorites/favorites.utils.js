export const addFavToFavorites = (favorites, favToAdd) => {
    const existingFavoritesFav = favorites.find(fav => fav.id === favToAdd.id);
    // if not found, undefined
    if (existingFavoritesFav){
        return favorites;
    }
    return [...favorites, favToAdd];
}