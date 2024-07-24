import {useState} from "react";
import {Schema} from "../../../../amplify/data/resource";
import {generateClient} from "aws-amplify/api";

const client = generateClient<Schema>();
function CreateCatDropdown(){
    const [category, setCategory] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async() => {
        if(category === "" ){
            setErrorMessage("Category cannot be blank")
        }
        await client.models.Categories.create({
            category: category
        })
    }

    return(
        <div className="mt-4 flex flex-col overflow-x-hidden overflow-y-hidden place-items-center">
            <form className="flex flex-col space-y-2">
                <label className="font-mono font-bold text-blue-800">
                    Category Name:
                    <input className="mx-2 rounded-md border-2 border-indigo-800 px-2"
                           type = "text" value = {category}
                           onChange={(e) => {setCategory(e.target.value)}} />
                </label>
            </form>
            <div className="font-bold text-red-800 text-lg">
                {errorMessage}
            </div>
            <button className="m-2 w-fit py-1 text-blue-800 bg-blue-100 font-bold border-2 border-blue-800
                                hover:border-4" onClick={() => handleSubmit()}>
                Create Category
            </button>
        </div>
    );
}
export default CreateCatDropdown;