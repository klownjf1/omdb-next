import React, { useState } from "react";
import { useRouter } from "next/router";

interface PaginatorProps {
    totalResults?: string | undefined | number;
}

const Paginator: React.FC<PaginatorProps> = ({ totalResults }) => {
    const router = useRouter();

    let pagesCount = Math.ceil(Number(totalResults) / 10);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let [portionNumber, setPortionNumber] = useState<number>(
        Math.ceil(Number(router.query.page) / 10)
    );
    let leftPortionRange = (portionNumber - 1) * 10 + 1;
    let RightPortionNumber = portionNumber * 10;

    const onPageChanged = async (value: number) => {
        router.push(`/movies/${router.query.id}?page=${value}` as string);
    };

    return (
        <div className="mx-auto my-4 text-center">
            {portionNumber > 1 ? (
                <button
                    onClick={() => setPortionNumber((prev) => prev - 1)}
                    className="inline-block mr-2 rounded-lg bg-gray-200 text-gray-700 px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    prev
                </button>
            ) : (
                ""
            )}
            {pages
                .filter((page) => {
                    if (page >= leftPortionRange && page <= RightPortionNumber) {
                        return page;
                    }
                })
                .map((page) => (
                    <span
                        key={page}
                        onClick={() => onPageChanged(page)}
                        className={`inline-block rounded-lg px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                            Number(router.query.page) == page ? "bg-gray-400 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
                        }`}
                    >
            {page}
          </span>
                ))}
            {portionNumber < pages.length / 10 ? (
                <button
                    onClick={() => setPortionNumber((prev) => prev + 1)}
                    className="inline-block ml-2 rounded-lg bg-gray-200 text-gray-700 px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    next
                </button>
            ) : (
                ""
            )}
        </div>
    );
};

export default Paginator;