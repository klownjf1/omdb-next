import { Search } from '@/types/Types';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import MainContainer from '@/components/MainContainer';
import Image from 'next/image'

const WishList = () => {
    let wishList;

    const [myData, setMyData] = useState<Search[]>([]);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data: any = window.localStorage.getItem('movies');
            setMyData(JSON.parse(data));
        }
    }, []);


        wishList = myData.map((item) => (
            <div className="p-4 flex flex-col" key={item.imdbID}>
                <Link href={`/movie/${item.imdbID}`} className="mt-2 text-gray-900" >
                    <div className="h-96 w-5/6">

                        <Image
                            src={`${item.Poster}`}
                            alt=""
                            className="object-cover w-full h-full rounded-lg shadow-md"
                        />

                    </div>
                    <div className="mt-4">
                        {item.Title}
                    </div>
                </Link>

            </div>
        ));


    return (
        <MainContainer keywords={'want to work'}>
        <div className= "container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {wishList}
            </div>
        </div>
        </MainContainer>
    )
};

export default WishList;