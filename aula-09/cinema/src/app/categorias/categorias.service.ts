import { Categoria } from "./categoria/categoria.model";

export class CategoriasService{
    
        categorias: Categoria[] = [
            {id: 1, titulo: 'Terror', imagePath: '../../assets/img/terror.png'},
            {id: 2, titulo: 'Aventura', imagePath: '../../assets/img/climbing.png'},
            {id: 3, titulo: 'Romance', imagePath: '../../assets/img/romance.png'}, 
            {id: 4, titulo: 'Comédia', imagePath: '../../assets/img/comedia.png'}
      
          ];

    constructor(){}

    listarCategorias(){
        return this.categorias;
    }
}