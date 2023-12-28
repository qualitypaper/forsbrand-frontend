import React, {useState} from 'react'
import "./Pages.scss"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {Typography} from "@mui/material";

export const Pages = ({clothesPerPage, totalClothes}) => {
    const [page, setPage] = useState("");
    const handleChange = (event, value) => {
        setPage(value);
    };
    const calculatePages = () => {
        let temp = totalClothes;
        let count = 0;
        while (temp > 0) {
            temp -= clothesPerPage;
            count++;
        }
        if (temp !== 0) {
            count++;
        }
        return count;
    };

    const totalPages = calculatePages();
    const pagesList = [];

    for (let i = 1; i <= totalPages; i++) {
        pagesList.push(i);
    }

    return (
        <div className="pages">
            {/*<ul className="">*/}
            {/*    <img src={arrow_right_black} alt=""/>*/}
            {/*    {pagesList.map((page, index) => (*/}
            {/*        <li key={index} onClick={() => paginate(page)} className={currentPage === page ? 'active' : ''}>*/}
            {/*            {page}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*    <img onClick={previousPage} src={arrow_left_black} alt=""/>*/}
            {/*</ul>*/}
            <Typography> </Typography>
            <Stack spacing={10}>
                <Pagination count={pagesList[1]} page={page} onChange={handleChange}/>
            </Stack>
        </div>
    );
};