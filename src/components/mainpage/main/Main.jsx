import React from 'react'
import {LogoMain} from "./logomain";
import {SwitchClothes} from "./switch";
import {HeaderClothes} from "./headerclothes";
import "./Main.scss"
import ReactPaginate from "react-paginate";
import {StyledEngineProvider, Typography} from "@mui/material";

export const Main = ({
                         onAdd,
                         renderOnZeroPageCount,
                         breakLabel,
                         previousPage,
                         setWindowVisible,
                         onPlus,
                         onPage,
                         currentItems,
                         totalClothes,
                         card,
                         paginate,
                         onPageChange,
                         pageCount,
                         currentPage,

                     }) => {
    return (
        <div className="background">
            <LogoMain/>
            <SwitchClothes/>
            <Typography>
                <HeaderClothes
                    currentItems={currentItems}
                    card={card}
                    onAdd={onAdd}
                    setWindowVisible={setWindowVisible}
                    onPlus={onPlus}
                    onPage={onPage}
                />
            </Typography>
            <StyledEngineProvider injectFirst>
                {/*<Pages*/}
                {/*    previousPage={previousPage}*/}
                {/*    totalClothes={totalClothes}*/}
                {/*    paginate={paginate}*/}
                {/*    clothesPerPage={9}*/}
                {/*    breakLabel={breakLabel}*/}
                {/*    onPageChange={onPageChange}*/}
                {/*    renderOnZeroPageCount={renderOnZeroPageCount}*/}
                {/*    containerClassName={"pagination"}*/}
                {/*    pageLinkClassName={"page-number"}*/}
                {/*    previousLinkClassName={"page-number"}*/}
                {/*    nextLinkClassName={"page-number"}*/}
                {/*    activeLinkClassName={"active"}*/}
                {/*    forcePage={currentPage}*/}
                {/*/>*/}
            </StyledEngineProvider>
            <ReactPaginate
                previousPage={previousPage}
                totalClothes={totalClothes}
                paginate={paginate}
                breakLabel={breakLabel}
                onPageChange={onPageChange}
                pageCount={pageCount}
                renderOnZeroPageCount={renderOnZeroPageCount}
                containerClassName={"pagination"}
                pageLinkClassName={"page-number"}
                previousLinkClassName={"page-number"}
                nextLinkClassName={"page-number"}
                pageRangeDisplayed={2}
                nextLabel={">" }
                previousLabel={"<"}
                activeLinkClassName={"active"}
                forcePage={currentPage}
            />
        </div>
    );
};