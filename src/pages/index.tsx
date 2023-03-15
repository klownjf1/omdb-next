import { ChangeEvent, useState } from "react";
import Link from "next/link";
import MainContainer from "@/components/MainContainer";
import {useRouter} from "next/router";

export default function Home() {
    const [inputValue, setInputValue] = useState<string>("");
    const router = useRouter()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };


    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const inputElement = e.target as HTMLInputElement;

        if(e.key === 'Enter') {
            e.preventDefault()
            router.push(`/movies/${inputElement.value}?page=${1}`)
        }

    }

    return (
        <MainContainer keywords={'want to work'}>
            <div className="flex flex-col items-center justify-center h-screen">
                <form className="flex items-center space-x-2">
                    <label>

                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="px-3 py-2 border rounded-md"
                            placeholder='Search...'
                            onKeyDown={onKeyDownHandler}
                        />
                    </label>
                    <Link href={`/movies/${inputValue}?page=${1}`}>
                        <div className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
                            Search
                        </div>
                    </Link>
                </form>

            </div>
        </MainContainer>
    );
}