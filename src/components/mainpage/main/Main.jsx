import React from 'react'
import {LogoMain} from "./logomain";
import {SwitchClothes} from "./switch";
import {HeaderClothes} from "./headerclothes";
import "./Main.scss"
import arrow_top_background from "../../../assets/images/arrow_top_background.svg";
import arrow_down_background from "../../../assets/images/arrow_down_background.svg";
import ReactPaginate from "react-paginate";
import {StyledEngineProvider, Typography} from "@mui/material";
import {ConfigProvider, Pagination} from 'antd';
import {CaretUpOutlined, CaretDownOutlined, CaretLeftOutlined, ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';

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
                         clothesPerPage
                     }) => {

    // const isFirstVisit = !localStorage.getItem('visited');
    // const headerClothes = useSpring({
    //     from: { transform: 'translateY(0)', opacity: 0, filter: isFirstVisit ? 'blur(5px)' : 'blur(0px)', position: "fixed"},
    //     to: { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
    //     config: { duration: 1000 },
    // });
    //
    // // Set the visited flag in localStorage
    // if (isFirstVisit) {
    //     localStorage.setItem('visited', 'true');
    // }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#0000000',
                    borderRadius: 2,
                    colorBgContainer: '#fffffff',
                },
            }}
    
        >
            <div className="background">
                <LogoMain />
                <SwitchClothes />
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
                <div className='paginations'>

    
                <Pagination
                    current={currentPage}
                    total={totalClothes}
                    pageSize={clothesPerPage}
                    onChange={onPageChange}
                    defaultCurrent={currentPage}
                    showSizeChanger={false}
                    className="pagination"
                    itemRender={(current, type, originalElement) => {
                        if (type === 'prev') {
                            return <ArrowLeftOutlined  className="img-arrow2" />;
                        }
                        if (type === 'next') {
                            return <ArrowRightOutlined  className="img-arrow1" />;
                        }
                        return originalElement;
                    }}
                />
                      </div>
            </div>
        </ConfigProvider>
    );
};