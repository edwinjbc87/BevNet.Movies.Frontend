import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";

export interface MoviesSearchFormProps {
    searchTerm: string;
    onSearch: (searchTerm: string) => void;
}

export default function MoviesSearchForm(props: MoviesSearchFormProps){
    const [searchTerm, setSearchTerm] = useState(props.searchTerm);

    return (<div>
        <TextField placeholder="Title" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} onKeyDown={(ev)=>{ if(ev.key === 'Enter'){ props.onSearch(searchTerm); }}} variant='standard' />
        <IconButton role='button' title="Search" onClick={() => props.onSearch(searchTerm)}><FontAwesomeIcon icon={faSearch} /></IconButton>
    </div>);
}