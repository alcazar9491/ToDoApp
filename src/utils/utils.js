export const immutablePush = ( arr, newEntry ) => ([ ...arr, newEntry ]); 

export const quickAdd = ( { key, target }, callback ) => {

    if (  key === "Enter" && target.value.trim() === "" ) {
        return
    }
    else {
        key === "Enter" && callback();
    }
};

export const removeItemFromArr = ( arr, item ) =>  {
    return arr.filter( e => e !== item );
  };