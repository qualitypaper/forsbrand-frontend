import React from 'react'
import {LogoMain} from "./logomain";
import {SwitchClothes} from "./switch";
import {HeaderClothes} from "./headerclothes";
import "./Main.scss"
import arrow_top_background from "../../../assets/images/arrow_top_background.svg";
import arrow_down_background from "../../../assets/images/arrow_down_background.svg";
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
                nextLabel={<img  className="img-arrow1" src={arrow_top_background} alt="Next" />}
                previousLabel={<img  className="img-arrow2"  src={arrow_down_background} alt="Next" />}
                activeLinkClassName={"active"}
                forcePage={currentPage}
            />
        </div>
    );
};