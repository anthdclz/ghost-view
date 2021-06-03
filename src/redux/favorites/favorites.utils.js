export const addRemoveFav = (favorites, favToAdd) => {
    const existingFavoritesFav = favorites.find(fav => fav.id === favToAdd.id);
    // if not found, undefined
    if (existingFavoritesFav){
        return favorites.filter(fav => fav.id !== favToAdd.id);
    }
    return [...favorites, favToAdd];
}