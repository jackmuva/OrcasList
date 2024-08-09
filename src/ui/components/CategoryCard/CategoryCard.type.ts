import {UniqueIdentifier} from "@dnd-kit/core";


export default interface CategoryCardProps{
    dndId: UniqueIdentifier;
    children: React.ReactNode;
    onAddItem?: () => void;

    categoryId: string,
    category: string
}