export const addRemoveFav = (list, favToAdd) => {
    const existingListFav = list.find(fav => fav.id === favToAdd.id);
    // if not found, undefined
    if (existingListFav){
        return list.filter(fav => fav.id !== favToAdd.id);
    }
    return [...list, favToAdd];
}