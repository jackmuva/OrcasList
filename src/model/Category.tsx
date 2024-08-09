import {UniqueIdentifier} from "@dnd-kit/core";

export default interface Category {
    categoryId: string,
    category:string,

    dndId: UniqueIdentifier,
    items:{
        id: UniqueIdentifier,
        title:string,
    }
}