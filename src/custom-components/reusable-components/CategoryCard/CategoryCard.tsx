import {useState} from "react";
import CategoryCardDropdown from "./CategoryCardDropdown/CategoryCardDropdown";
import Category from "../../../model/Category";


export default function CategoryCard( input: Category){
    const [openCategory, setOpenCategory] = useState(false);

    const toggleOpen = () => {
        setOpenCategory(!openCategory);
    }

    return(
        <div className="flex-col bg-blue-100 px-2 border-2 border-blue-800 rounded-lg">
            <button className = "flex bg-inherit border-0 text-black" onClick = {toggleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                </svg>
                <div className="mx-2 text-xl text-blue-800 font-bold font-mono hover:text-blue-400">
                    { input.category }
                </div>
            </button>
            {openCategory && <CategoryCardDropdown category={input.category}
                                                   id={input.id} />}
        </div>
    );
}