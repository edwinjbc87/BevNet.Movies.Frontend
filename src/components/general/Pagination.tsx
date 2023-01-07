import { useState } from "react";

export interface PaginationProps {
    page: number;
    total_pages: number;
    setPage: (page: number) => void;
}

export default function Pagination(props: PaginationProps){
    const [page, setPage] = useState(props.page);
    const updatePage = (page: number) => {
        setPage(page);
        props.setPage(page);
    }

    return (<div>
        {[...Array(props.total_pages)].map((_, i) => {
            const pivotPage:number = i+1;
            const active = (pivotPage === page);
            return (!active ? ([1,page-1,page+1,props.total_pages].includes(pivotPage) ?<button key={i} onClick={() => updatePage(pivotPage)}>{pivotPage}</button>: null) : <span key={i}>{pivotPage}</span>);
        })}
    </div>);
}