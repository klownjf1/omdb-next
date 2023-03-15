import Head from 'next/head';
import Link from 'next/link';
import { ChangeEvent, FC, PropsWithChildren, useState } from 'react';
import {useRouter} from "next/router";

interface Props extends PropsWithChildren{
    keywords: string;
}

const MainContainer:FC<Props> = ({children, keywords}) => {
    const [value, setValue] = useState<string>('');
    const router = useRouter()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const inputElement = e.target as HTMLInputElement;
        if(e.key === 'Enter') {
            e.preventDefault()
            router.push(`/movies/${inputElement.value}?page=${1}`)
        }
    }

    return (
        <>
            <Head>
                <meta name="keywords" content={`next, test, work, i want to work${keywords}`} />
            </Head>

            <header className="bg-gray-900 text-white py-4 px-6">
                <div className="container mx-auto flex flex-wrap justify-between items-center">
                    <Link href="/">
                        <div className="text-2xl font-bold cursor-pointer">LOGO</div>
                    </Link>

                    <button className="inline-flex p-3 rounded-lg text-white ml-auto hover:bg-gray-800 outline-none lg:hidden">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto">
                        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                            <form className="flex items-center justify-center ">
                                <label>
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={handleInputChange}
                                        className="px-3 py-2 border rounded-md text-black"
                                        placeholder="Search..."
                                        onKeyDown={onKeyDownHandler}
                                    />
                                </label>

                                <Link href={`/movies/${value}?page=${1}`}>
                                    <div className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded cursor-pointer">
                                        Search
                                    </div>
                                </Link>
                            </form>

                            <Link href="/wishList">
                                <div className="text-xl font-semibold cursor-pointer ml-4 mt-4 lg:mt-0">Wish List</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {children}
        </>
    );
};

export default MainContainer;