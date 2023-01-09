import { Button, Typography } from "@mui/material";
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
        {props.total_pages &&[...Array(props.total_pages)].map((_, i) => {
            const pivotPage:number = i+1;
            const active = (pivotPage === page);
            return ([1,page-1,page,page+1,props.total_pages].includes(pivotPage) ?<Button key={i} onClick={() => updatePage(pivotPage)} disabled={active}>{pivotPage}</Button>: null);
        })}
    </div>);
}