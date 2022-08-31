import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return;
    setCategories(
        [newCategory, ...categories]
    );
  }
  const onDeleteLastCatergory = () => {
    if ( categories.length > 1) {
      setCategories(categories =>
        categories.filter(category =>{
          return category !== categories[categories.length-1];
        }),  
      );
    }
  }
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
          onNewCategory = { onAddCategory }
        />
        <button 
          className="botonEliminar"
          onClick={onDeleteLastCatergory}
          >
            Eliminar Categoria
        </button>
        { categories.map( category => 
                (
                  <GifGrid 
                    category={category} 
                    key={category}
                  />
                )
            )
        }
    </>
  )
}
