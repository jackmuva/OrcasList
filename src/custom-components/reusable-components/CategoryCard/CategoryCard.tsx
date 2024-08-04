import {useState} from "react";
import CategoryCardDropdown from "./CategoryCardDropdown/CategoryCardDropdown";
import Category from "../../../model/Category";


export default function CategoryCard( input: Category){
    const [openCategory, setOpenCategory] = useState(false);

    const toggleOpen = () => {
        setOpenCategory(!openCategory);
    }

    return(
        <div className="flex-col bg-blue-200 px-2">
            <button className = "flex-auto bg-inherit border-0 text-black" onClick = {toggleOpen}>
                { input.category }
            </button>
            {openCategory && <CategoryCardDropdown category={input.category}
                                                   id={input.id} />}
        </div>
    );
}